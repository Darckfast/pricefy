const getUrlId = url => {
  const id = url
    .split('/')
    .map(val => val.split('?')[0])
    .filter(val => val)
    .slice(-1)

  return { id: id[0], store: 'amazon' }
}

export { getUrlId }
