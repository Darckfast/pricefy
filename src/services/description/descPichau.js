const getDescription = (apiResponse) => {
  const { data: { productDetail: { items: [{ name }] } } } = apiResponse

  return name
}

module.exports = {
  getDescription
}