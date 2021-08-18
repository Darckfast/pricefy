import { get } from 'axios'

const getUrlId = async url => {
  const { data } = await get(url)
  const possibleIds = /strong>SKU:<\/strong>(.*?)<\/span>/g
    .exec(data)
    ?.map(val => val.replace('<!--', '').replace('-->', '').trim())
    ?.filter(val => !val.includes('/'))

  return { id: possibleIds[0], store: 'pichau' }
}

export { getUrlId }
