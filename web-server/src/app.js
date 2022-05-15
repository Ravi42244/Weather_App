const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000
const pubpath = path.join(__dirname, '../public')
const viewpath = path.join(__dirname, '../Templates/views')
const partialspath = path.join(__dirname, '../Templates/partials')
const webapp = require('../../web-app/utils/weather_api')
const weather_api = require('../../web-app/utils/weather_api')

app.set('view engine', 'hbs')
app.set('views', viewpath)
hbs.registerPartials(partialspath)
// app.use(express.static(pubpath))

console.log('server side')


app.get('', (req, res) => {

    res.render('index')

})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    webapp(req.query.address, (error, data) => {
        if (error) {
            return res.send({ error })
        }
        return res.send(data)
    })
})

    app.get('/about',(req,res)=>{
    res.render('about')

    })
    app.get('./about/*',(req,res)=>{
        res.send('<h1>Error404</h1>')

        })


    app.get('*',(req,res)=>{
    res.send('<h1>Error404</h1>')

    })


    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })