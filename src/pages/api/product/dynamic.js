import { findStoreByDomain } from '../../../services/utils/findStore'

export default async ({ query: { url } }, res) => {
  const { id, get } = findStoreByDomain(url)
  const [productId] = await id(url)

  console.log(`${productId} encontrado`)

  return res.send(await Promise.all(await get([productId])))
}
