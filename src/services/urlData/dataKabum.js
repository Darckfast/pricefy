const axios = require('axios')

const getUrlData = (url, productId) => {
    console.log(`${url}${productId}`)
    return axios.get(`${url}${productId}`)
        .then(res => ({ ...res, data: res.data.replace(/\n/g, '').replace(/\t/g, '') }))
}

module.exports = {
    getUrlData
}