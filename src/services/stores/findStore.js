const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname)

const findStore = (storeName) => {
    const files = fs.readdirSync(filePath)

    return files
        .map(file => file.replace('.js', ''))
        .filter(file => file === storeName)
        ?.map(file => import(`${filePath}/${file}.js`))[0]
}

module.exports = {
    findStore
}