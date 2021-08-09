import { getInfo as getKabum } from '../stores/kabum'
import { getInfo as getAmazon } from '../stores/amazon'
import { getInfo as getPichau } from '../stores/pichau'

const availableStore = {
  kabum: getKabum,
  amazon: getAmazon,
  pichau: getPichau
}

const findStore = storeName => {
  return availableStore[storeName]
}

const getStoreName = () => Object.keys(availableStore)

export { findStore, getStoreName }
