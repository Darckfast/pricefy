const { findStore } = require("../../../services/stores/findStore")

module.exports = async ({ body: { products } }, res) => {
    const result = await products.map(async ({ store, ids }) => {
        console.log(`Buscando [${ids.length}] ids na loja [${store}]`)

        const { getInfo } = await findStore(store)

        return Promise.all(await getInfo(ids))
    }).flat()

    return res.send(await Promise.all(result))
}