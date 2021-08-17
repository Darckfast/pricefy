const getUrlId = url => {
  const id = url.split('/').filter(val => val && /^[0-9]*$/g.test(val))

  return id ?? null
}

export { getUrlId }
