const { default: Decimal } = require("decimal.js")
const { getDescription } = require("../description/descKabum")
const { getPrice } = require("../price/priceKabum")
const { getUrlData } = require("../urlData/dataKabum")

const getInfo = async (productIds) => {
  return productIds.map(async productId => {
    const { data: productHtml, status } = await getUrlData('https://kabum.com.br/produto/', productId)

    if (status === 200) {
      const [, productPrice] = getPrice(productHtml)

      console.log(productPrice, productId)

      if (!productPrice) {
        console.log('Preco nao encontrado')
        throw new Error('Preco nao encontrado')
      }

      const [description] = getDescription(productHtml)

      console.log('Preco encontrado')
      return {
        store: "kabum",
        price: new Decimal(productPrice),
        productId,
        description,
        date: new Date().getTime()
      }
    }

    return { error: "Erro ao buscar info" }
  })

}

module.exports = {
  getInfo
}