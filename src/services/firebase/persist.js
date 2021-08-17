import { insertPrice } from './insert'
import { getPricesInStore, searchItemInStore } from './search'
import { updateData } from './update'
import { isSameDay } from 'date-fns'

const persistData = async ({ productId, store, description, price }) => {
  const documents = await searchItemInStore({ store, productId })

  if (documents.empty) {
    return insertPrice({ productId, store, description, price })
  }

  const [document] = documents.docs

  const documentsPrices = await getPricesInStore({
    documentId: document.id,
    store
  })

  const lastPrice = documentsPrices.docs[0].data()

  const newDate = new Date()

  if (checkIfNeed(lastPrice, price, newDate)) {
    return updateData(document.id, { price, store })
  }

  console.log('Atualizacao nao necessaria - mesmo preco e dia')
}

const checkIfNeed = ({ price: lastPrice, date: lastDate }, newPrice, newDate) =>
  lastPrice !== newPrice || !isSameDay(lastDate.toDate(), newDate)

export { persistData }
