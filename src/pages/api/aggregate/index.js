import { aggregateByDateAndPrice } from '../../../services/aggregate/aggregateValues'

export default async (req, res) => {
  const products =
    req.body.products ?? req.query.products
      ? JSON.parse(req.query.products)
      : []

  const agg = await aggregateByDateAndPrice(products)

  return res.send(agg)
}
