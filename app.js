const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const posadasModule = require('./utils/posadas')

app.set('views', path.join(__dirname, 'views' ))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('', (req, res) => {
    posadasModule.getAllPosadas((err, posadas) => {
        if(err) return res.status(500).send(err)
        console.log(posadas)
        return res.render('pages/index', { posadas })
    })
})

app.get('/admin', (req, res) => {
    res.render('pages/admin')
})

app.listen(port, () => {
    console.log(`Escuchando el puerto ${3000}`)
})