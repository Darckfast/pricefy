import { findStoreByDomain } from '../../../services/utils/findStore'

export default async ({ query: { url } }, res) => {
  const { id } = findStoreByDomain(url)
  const { id: productId, store } = await id(url)

  console.log(`${productId} encontrado`)

  return res.send({ productId, store })
}
