const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Leonel'
    })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Leonel Angelo'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'this is help'
  })
})

app.get('/weather', (req, res) => (
  res.send({
    forecast: 'it is raining',
    location: 'in the pelepens'
  })
))


app.listen(3000, () => {
  console.log('you started it correctly on port 3000')
})