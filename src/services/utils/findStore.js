import { getUrlId as pichauId } from './urlData/dataPichau'
import { getUrlId as kabumId } from './urlData/dataKabum'
import { getUrlId as amazonId } from './urlData/dataAmazon'

const availableStore = {
  kabum: { id: kabumId },
  amazon: { id: amazonId },
  pichau: { id: pichauId }
}

const getStoreName = () => Object.keys(availableStore)

const findStoreByDomain = url => {
  console.log('Buscando loja por dominio')
  const [store] = url
    .replace('https://', '')
    .split('.')
    .filter(val => availableStore[val])

  console.log(`${store} encontrada`)
  return availableStore[store]
}

export { getStoreName, findStoreByDomain }
