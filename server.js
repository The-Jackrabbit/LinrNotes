const path = require('path')
const express = require('express')

const app = express()
const port = (process.env.PORT || 8080)
const indexPath = path.join(__dirname, 'public/index.html')
const distPath = express.static(path.join(__dirname, 'dist'))
const publicPath = express.static(path.join(__dirname, 'src'))

app.use('/dist', distPath)
app.use('/src', publicPath)

const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const config = require('./webpack.config.js')
    const compiler = webpack(config)

    app.use(webpackHotMiddleware(compiler))
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }))

app.listen(port, err => {
    if (err) {
        console.warn(`Error in app.listen: ${err}`)
        return
    }

    console.log(`Listening at http://localhost:${port}`)
})

/*"start": "npm run build",
    "build": "webpack -d && xcopy \"public/index.html\" \"dist/\" /F /Y && webpack-dev-server --content-base public/ --inline",
    "build:prod": "webpack -d && xcopy \"public/index.html\" \"dist/\" /F /Y",
    */