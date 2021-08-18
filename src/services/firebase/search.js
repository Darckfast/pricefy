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

const getItemInStore = async itemToSearch => {
  const document = await searchItemInStore(itemToSearch)

  if (document.empty) {
    return itemToSearch
  }

  const [item] = document.docs

  return item.data()
}

export { searchItemInStore, getPricesInStore, getItemInStore }
