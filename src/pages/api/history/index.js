import { getItemHistory } from '../../../services/history/itemHistory'

export default async (req, res) => {
  const products =
    req.body.products ?? req.query.products
      ? JSON.parse(req.query.products)
      : []

  const histories = await getItemHistory(products)

  return res.send(await Promise.all(histories))
}
