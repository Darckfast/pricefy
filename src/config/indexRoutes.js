const fs = require('fs')

const methods = ['post', 'get', 'put', 'delete', 'patch', 'options']

const checkForParam = (filePath) => {
  if (/\[(.*?)\]\.js/g.test(filePath)) {
    const [, param] = /\[(.*?)\]\.js/g.exec(filePath)

    return `/:${param}`
  }

  return ''
}

const checkForParamFolder = (file) => {
  if (/\[(.*?)\]/g.test(file)) {
    const [, param] = /\[(.*?)\]/g.exec(file)

    return `/:${param}/`
  }

  return file
}

const readDir = (path, initialRoute = '/', initialMethod = 'get') => {
  const files = fs.readdirSync(path)

  return files
    .map(file => {
      const filePath = `${path}/${file}`


      if (fs.lstatSync(filePath).isDirectory()) {
        if (methods.includes(file.toLowerCase())) {
          const method = file.toLowerCase()

          return readDir(filePath, initialRoute, method)
        }

        const route = initialRoute + checkForParamFolder(file)

        return readDir(filePath, route, initialMethod)
      }

      return {
        method: initialMethod,
        route: initialRoute + checkForParam(file),
        path: filePath,
      }
    })
    .flat()
}

const setRoutes = async (app, path) => {
  const exportMethods = {
    get: (url, func) => app.get(url, func),
    post: (url, func) => app.post(url, func),
    put: (url, func) => app.put(url, func)
  }

  const routes = readDir(path)

  routes.forEach(async ({ route, path: filePath, method }) => {
    const { default: controllerFunction } = await import(filePath)

    if (typeof (controllerFunction) === 'function') {
      exportMethods[method](route, controllerFunction)
      console.log(`route ${route} [${method}] initialized`)
    }
  })
}

module.exports = {
  setRoutes
}