import Decimal from 'decimal.js'
import { Timestamp } from 'firebase/firestore'
import { persistData } from '../firebase/persist'
import { getDescription } from '../items/description/descKabum'
import { getPrice } from '../items/price/priceKabum'
import { getUrlData } from '../items/urlData/dataKabum'
import { formatItem } from '../utils/formatItem'

const getInfo = async productIds => {
  return productIds.map(async productId => {
    const { data: productHtml, status } = await getUrlData(
      'https://kabum.com.br/produto/',
      productId
    )

    if (status === 200) {
      const [, productPrice] = getPrice(productHtml)

      if (!productPrice) {
        console.log('Preco nao encontrado')
        throw new Error('Preco nao encontrado')
      }

      const [description] = getDescription(productHtml)

      console.log('Preco encontrado')
      const item = formatItem({
        productId,
        productPrice,
        description,
        store: 'kabum'
      })

      await persistData(item)

      return item
    }

    return { error: 'Erro ao buscar info' }
  })
}

export { getInfo }
