const getUrlId = url => {
  const id = url
    .split('/')
    .map(val => val.split('?')[0])
    .filter(val => val)
    .slice(-1)

  return id ?? null
}

export { getUrlId }
