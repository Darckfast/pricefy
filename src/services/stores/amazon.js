
import { persistData } from '../firebase/persist'
import { getDescription } from '../items/description/descAmazon'
import { getPrice } from '../items/price/priceAmazon'
import { getUrlData } from '../items/urlData/dataAmazon'
import { formatItem } from '../utils/formatItem'

const getInfo = async productIds => {
  return productIds.map(async productId => {
    const { data: productHtml, status } = await getUrlData(
      'https://www.amazon.com.br',
      productId
    )

    if (status === 200) {
      const [, productPrice] = getPrice(productHtml)

      if (!productPrice) {
        console.log('Preco nao encontrado')
        throw new Error('Preco nao encontrado')
      }

      const [, description] = getDescription(productHtml)

      console.log('Preco encontrado')
      const item = formatItem({
        productId,
        productPrice,
        description,
        store: 'amazon'
      })

      await persistData(item)

      return item
    }
  })
}

export { getInfo }
