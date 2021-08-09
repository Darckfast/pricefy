import { format } from "date-fns"
import Decimal from "decimal.js"

const formatItem = ({ productPrice, productId, store, description }) => {
  return {
    store,
    price: new Decimal(productPrice).toNumber(),
    productId: productId.toString(),
    description,
    date: format(new Date(), 'MM/dd/yyyy HH:mm:ss'),
  }
}

export {
  formatItem,
}
