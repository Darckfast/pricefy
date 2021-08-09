import { findStore } from "../../../../services/utils/findStore"

export default async ({ body: { store: storeBody }, query: { store: storeQs, productId } }, res) => {
  const store = storeBody ?? storeQs

  console.log(`Buscando [1] id na loja [${store}]`)

  const getInfo = await findStore(store)

  return res.send(await Promise.all(await getInfo([productId])))
}
