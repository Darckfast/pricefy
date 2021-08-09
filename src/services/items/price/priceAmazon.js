const getPrice = (escapedHtml) => {
  return /priceBlockBuyingPriceString">R\$(.*?)<\/span>/g.exec(escapedHtml)
    ?.map(element => element.trim())
    ?.map(element => element.replace(',', '').replace('.', ''))
}

export {
  getPrice
}
