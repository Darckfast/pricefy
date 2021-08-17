import { getItemHistory } from '../../../../../services/history/itemHistory'

export default async ({ query: { productId, storeId } }, res) => {
  const histories = await getItemHistory([{ store: storeId, ids: [productId] }])

  return res.send(await Promise.all(histories))
}
