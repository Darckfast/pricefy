const getPrice = (escapedHtml) => {
    return /R\$(.*?)<\/h4>/g.exec(escapedHtml)
        ?.map(element => {
            if (element.includes('"')) {
                return element.split('R$').slice(-1)[0]
            }

            return element
        })
        ?.map(element => element.trim())
        ?.map(element => element.replace(',', '').replace('.', ''))
}

const formatPrice = (html) => {
    // return ids.map(async productId => {
    // let { data, statusCode } = await getUrlData(urlBase, productId)

    const escapedData = html.replace(/\n/g, '').replace(/\t/g, '')

    const [, productPrice] = getPrice(escapedData)
    console.log(productPrice, productId)

    if (!productPrice) {
        console.log('Preco nao encontrado')
        throw new Error('Preco nao encontrado')
    }

    const [description] = getDescription(escapedData)

    return { price: new Decimal(productPrice), productId, description, date: new Date().getTime() }
    // })
}


module.exports = {
    getPrice,
    formatPrice
}