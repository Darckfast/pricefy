export const getItemHistory = (productId, store) => {
  return fetch(`/api/aggregate/${productId}/${store}`).then(res => res.json())
}

export const addByUrl = itemUrl => {
  return fetch(`/api/product/dynamic?url=${encodeURIComponent(itemUrl)}`).then(
    res => res.json()
  )
}

export const formatDataset = (dataset, nextColor) => {
  dataset.datasets = dataset?.datasets.map(data => {
    const { value: color } = nextColor?.next() ?? { value: 'white' }
    return {
      ...data,
      backgroundColor: color,
      borderColor: color
    }
  })

  return dataset
}
