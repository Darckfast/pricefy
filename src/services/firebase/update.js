import { db, FieldValue, Timestamp } from './nodeApp'

const updateData = async (id, { price, store }) => {
  return db
    .collection('stores')
    .doc(store)
    .collection('items')
    .doc(id)
    .collection('prices')
    .add({
      date: Timestamp.fromDate(new Date()),
      price
    })
}

export { updateData }
