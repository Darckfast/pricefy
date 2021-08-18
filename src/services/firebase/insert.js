import { db, Timestamp } from './nodeApp'

const insertPrice = async ({ productId, store, description, price }) => {
  console.log(`Inserindo item ${productId}`)

  const formattedItem = {
    timesChecked: 1,
    productId,
    store,
    description
  }

  const prices = {
    date: Timestamp.fromDate(new Date()),
    price
  }

  const documentRef = await db
    .collection('stores')
    .doc(store)
    .collection('items')
    .add(formattedItem)

  return db
    .collection('stores')
    .doc(store)
    .collection('items')
    .doc(documentRef.id)
    .collection('prices')
    .add(prices)
}

export { insertPrice }
