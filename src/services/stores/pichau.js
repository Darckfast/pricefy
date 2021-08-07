const { default: Decimal } = require("decimal.js")
const { getDescription } = require("../description/descPichau")
const { getPrice } = require("../price/pricePichau")
const { getApiData } = require("../urlData/dataPichau")

const getInfo = (productIds) => {
  return productIds.map(async productId => {
    const { data: apiResponse, status } = await getApiData('https://www.pichau.com.br/api/pichau', productId)

    if (status === 200) {
      const productPrice = getPrice(apiResponse)

      console.log(productPrice, productId)

      if (!productPrice) {
        console.log('Preco nao encontrado')
        throw new Error('Preco nao encontrado')
      }

      const description = getDescription(apiResponse)

      console.log('Preco encontrado')
      return {
        store: "pichau",
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