const getPrice = (escapedHtml) => {
  return /R\$(.*?)<\/h4>/g.exec(escapedHtml)
    ?.map(element => {
      if (element.includes('"')) {
        return element.split('R$').slice(-1)[0]
      }

      return element
    })
    ?.map(element => element.trim())
    ?.map(element => element.replace(',', '').replace('.', ''))
}

export {
  getPrice
}
