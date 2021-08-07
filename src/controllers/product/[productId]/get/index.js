const { findStore } = require("../../../../services/stores/findStore")

module.exports = async ({ params: { productId }, body: { store } }, res) => {
  const { getInfo } = await findStore(store)

  return res.send(await Promise.all(await getInfo([productId])))
}