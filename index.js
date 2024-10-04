const express = require('express')
const ejs = require('ejs')
const fs = require('fs')

const app = express()
app.engine('html', ejs.renderFile)
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    let ipsum = JSON.parse(fs.readFileSync('public/ipsum.json', 'utf8'))
    res.render('generator.html', { ipsum: ipsum })
})



// app.post('/:paras', (req, res) => {}

app.listen(3333)
