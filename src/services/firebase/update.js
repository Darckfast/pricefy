import {
  arrayUnion,
  collection,
  doc,
  increment,
  Timestamp,
  updateDoc
} from 'firebase/firestore'
import { db } from './init'

const updateData = (id, { price, store }) => {
  const documentRef = doc(
    collection(doc(collection(db, 'stores'), store), 'items'),
    id
  )

  return updateDoc(documentRef, {
    prices: arrayUnion({
      date: Timestamp.fromDate(new Date()),
      price
    }),
    timesChecked: increment(1)
  })
}

export { updateData }
