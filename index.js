const express = require('express')
const ejs = require('ejs')
const {text, defaultText} = require("./public/functions");
// const fs = require('fs')

const app = express()
app.engine('html', ejs.renderFile)
app.use(express.static('public'))
app.use(express.json())


app.get('/', text)

app.listen(3333)
