const express = require('express')
const app = express()
const port = 5000


const validateUser = require('./users.json')

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Login'})
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))
