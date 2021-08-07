const express = require('express')
const app = express()
const port = 1111

const helmet = require('helmet')
const { setRoutes } = require('./config/indexRoutes')

const start = async () => {
  app.use(helmet())
  app.use(express.json());

  app.disable('x-powered-by');

  const { join } = await import('path')

  await setRoutes(app, join(__dirname, 'controllers'))

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

start()