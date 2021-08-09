import { persistData } from '../firebase/persist'
import { getDescription } from '../items/description/descPichau'
import { getPrice } from '../items/price/pricePichau'
import { getApiData } from '../items/urlData/dataPichau'
import { formatItem } from '../utils/formatItem'

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
      const item = formatItem({
        productId,
        productPrice,
        description,
        store: 'pichau'
      })

      await persistData(item)

      return item
    }

    return { error: 'Erro ao buscar info' }
  })
}

export {
  getInfo
}
