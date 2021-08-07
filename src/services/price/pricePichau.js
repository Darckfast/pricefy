const getPrice = (apiResponse) => {
  const { data: { productDetail: { items: [{ price_range: { minimum_price: { regular_price: { value } } } }] } } } = apiResponse

  return value
}

module.exports = {
  getPrice
}
