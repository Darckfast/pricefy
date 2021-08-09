import { addDoc, collection, doc, Timestamp } from 'firebase/firestore'

import { db } from './init'

const insertPrice = async ({ productId, store, description, price }) => {
  console.log(`Inserindo item ${productId}`)

  const formattedItem = {
    timesChecked: 1,
    productId,
    store,
    description,
    prices: [
      {
        date: Timestamp.fromDate(new Date()),
        price
      }
    ]
  }

  return addDoc(
    collection(doc(collection(db, 'stores'), store), 'items'),
    formattedItem
  )
}

export { insertPrice }
