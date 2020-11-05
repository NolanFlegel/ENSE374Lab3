const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 5000


//setting static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + '\css'))

//Templates
app.use(expressLayouts)
app.set('view engine', 'ejs')


// Routes
app.get('/', (req, res) => {
    res.render('index')
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))


//const validateUser = require('./users.json')