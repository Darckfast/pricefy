import { db } from './nodeApp'

const searchItemInStore = ({ store, productId }) => {
  return db
    .collection('stores')
    .doc(store)
    .collection('items')
    .where('productId', '==', productId.toString())
    .get()
}

const getPricesInStore = ({ documentId, store }) => {
  return db
    .collection('stores')
    .doc(store)
    .collection('items')
    .doc(documentId)
    .collection('prices')
    .orderBy('date', 'desc')
    .get()
}

export { searchItemInStore, getPricesInStore }
