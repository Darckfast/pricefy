import { format, fromUnixTime } from 'date-fns'
import { getPricesInStore, searchItemInStore } from '../firebase/search'

const getItemHistory = products => {
  console.log(products)
  return products
    .map(({ ids, store }) =>
      ids.map(async productId => {
        const itemDocs = await searchItemInStore({ store, productId })

        if (!itemDocs.empty) {
          const { id: documentId } = itemDocs.docs[0]
          const { description } = itemDocs.docs[0].data()

          const docsPrices = await getPricesInStore({ store, documentId })

          return {
            productId,
            store,
            status: 'found',
            description,
            prices: docsPrices.docs
              .map(doc => doc.data())
              .map(({ price, date: { seconds } }) => ({
                price,
                date: format(fromUnixTime(seconds), 'MM/dd/yyyy HH:mm:ss'),
                timestamp: seconds
              }))
          }
        }

        return {
          productId,
          store,
          status: 'not found',
          prices: []
        }
      })
    )
    .flat()
}

export { getItemHistory }
