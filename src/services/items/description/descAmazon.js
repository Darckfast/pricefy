const getDescription = (escapedHtml) => {
  return /product-title-word-break">(.*?)<\/span>/g.exec(escapedHtml)
    ?.map(element => element.trim())
}

export {
  getDescription
}
