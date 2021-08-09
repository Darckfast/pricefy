import { findStore } from '../../../services/utils/findStore'

export default async (req, res) => {
  const filteredProducts =
    req.body.products ?? req.query.products?.map(product => JSON.parse(product))

  const result = await filteredProducts.map(async ({ store, ids }) => {
    console.log(`Buscando [${ids.length}] ids na loja [${store}]`)

    const getInfo = await findStore(store)

    return Promise.all(await getInfo(ids))
  })

  return res.send((await Promise.all(result)).flat())
}
