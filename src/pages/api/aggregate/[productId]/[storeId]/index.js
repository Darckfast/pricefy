import { aggregateByDateAndPrice } from '../../../../../services/aggregate/aggregateValues'

export default async ({ query: { storeId, productId } }, res) => {
  const agg = await aggregateByDateAndPrice([
    { store: storeId, ids: [productId] }
  ])

  return res.send(agg)
}
