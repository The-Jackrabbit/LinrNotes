const path = require('path')
const express = require('express')

const app = express()
const port = (process.env.PORT || 8080)
const indexPath = path.join(__dirname, 'public/index.html')
const distPath = express.static(path.join(__dirname, 'dist'))
const publicPath = express.static(path.join(__dirname, 'src'))

app.use('/dist', distPath)
app.use('/src', publicPath)

app.listen(process.env.PORT || 8080)
/*"start": "npm run build",
    "build": "webpack -d && xcopy \"public/index.html\" \"dist/\" /F /Y && webpack-dev-server --content-base public/ --inline",
    "build:prod": "webpack -d && xcopy \"public/index.html\" \"dist/\" /F /Y",
    */