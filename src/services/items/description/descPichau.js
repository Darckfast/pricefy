const getDescription = (apiResponse) => {
  const { data: { productDetail: { items: [{ name }] } } } = apiResponse

  return name
}

export {
  getDescription
}
