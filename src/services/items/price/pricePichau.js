const getPrice = (apiResponse) => {
  const { data: { productDetail: { items: [{ price_range: { minimum_price: { regular_price: { value } } } }] } } } = apiResponse

  return value * 100
}

export {
  getPrice
}
