import { get } from 'axios'

const getUrlData = (url, productId) => {
  return get(`${url}/a/dp/${productId}`)
    .then(res => ({ ...res, data: res.data.replace(/\n/g, '').replace(/\t/g, '') }))
}

export {
  getUrlData
}