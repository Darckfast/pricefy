import { db } from './init'
import { collection, query, where, getDocs, doc } from 'firebase/firestore'

const searchItemInStore = ({ store, productId }) => {
  return getDocs(
    query(
      collection(doc(collection(db, 'stores'), store), 'items'),
      where('productId', '==', productId.toString()),
    )
  )
}

export { searchItemInStore }
