const getDescription = (escapedHtml) => {
    return /<h1 class=(.*?)<\/h1>/g.exec(escapedHtml)
        ?.map(element => element.trim())
        ?.map(element => element.replace('"', ''))
        ?.map(element => element.split('>'))
        ?.flat()
        ?.filter(element => element.length > 0 && !element.includes('"') && !element.includes('<'))
}

module.exports = {
    getDescription
}