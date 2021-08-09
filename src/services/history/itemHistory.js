import { format, fromUnixTime } from "date-fns"
import { searchItemInStore } from "../firebase/search"

const getItemHistory = ({ products }) => {
  return products.map(({ ids, store }) =>
    ids.map(async productId => {
      const itemDocs = await searchItemInStore({ store, productId })

      if (!itemDocs.empty) {
        const { prices } = itemDocs.docs[0].data()

        return {
          productId,
          store,
          status: 'found',
          prices: prices
            .map(({ price, date: { seconds } }) =>
            ({
              price,
              date: format(fromUnixTime(seconds), 'MM/dd/yyyy HH:mm:ss'),
              timestamp: seconds,
            }))
        }
      }

      return {
        productId,
        store,
        status: 'not found',
        prices: []
      }
    })).flat()
}

export { getItemHistory }
