export const addItemLocal = (productId, store, desc) => {
  const recenteItems = JSON.parse(localStorage.getItem('recent') ?? '[]')
  const item = { productId, store, desc }

  recenteItems.push(item)

  localStorage.setItem('recent', JSON.stringify(recenteItems))

  return item
}

export const removeItemLocal = (productId, store) => {
  const recenteItems = JSON.parse(localStorage.getItem('recent') ?? '[]')

  const index = recenteItems.findIndex(
    val => val.store === store && val.productId === productId
  )

  if (index !== -1) {
    recenteItems.splice(index, 1)

    localStorage.setItem('recent', JSON.stringify(recenteItems))
  }
}

export const getItems = () => {
  return JSON.parse(localStorage.getItem('recent') ?? '[]')
}
