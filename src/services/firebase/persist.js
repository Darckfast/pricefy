import { isSameDay } from 'date-fns'
import { insertPrice } from './insert'
import { searchItemInStore } from './search'
import { updateData } from './update'

const persistData = async ({ productId, store, description, price, date }) => {
  const documents = await searchItemInStore({ store, productId })

  if (documents.empty) {
    return insertPrice({ productId, store, description, price })
  }

  const [document] = documents.docs
  const persistedItem = document.data()

  if (checkIfNeed(persistedItem, price, date)) {
    const newDocument = {
      ...persistedItem
    }

    newDocument.prices.push({ date, price })

    return updateData(document.id, { price, store })
  }

  console.log('Atualizacao nao necessaria - mesmo preco e dia')
}

const checkIfNeed = (persistedData, newPrice, newDate) => {
  const { price: lastPrice, date: lastDate } = persistedData.prices.slice(-1)[0]

  return (
    lastPrice !== newPrice && !isSameDay(lastDate.toDate(), newDate.toDate())
  )
}

export { persistData }
