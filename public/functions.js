const fs = require('fs')

let ipsum = JSON.parse(fs.readFileSync('public/ipsum.json', 'utf8'))

const text = (req, res) => {
    if(!req.query.paras){
        const text = ipsum[12] + ' ' +  ipsum[3] + ' ' +  ipsum[33] + ' ' +  ipsum[83] + ' ' +  ipsum[79];
        res.render('generator.html', { text: text, opt: 1 })
    }
    else {
            let text = ''
        for(let i = 0; i < req.query.paras; i++){
            for(let i = 0; i < 4; i++) {
                const randomIndex = Math.floor(Math.random() * ipsum.length)
                text += ' ' + ipsum[randomIndex]
            }
            text += '<br>'
        }
        res.render('generator.html', { text: text, opt: req.query.paras })
    }
}

module.exports = { text }


