const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`It works!`)
})

app.get('/ip', (req, res) => {
    let ip = (req.headers['x-forwarded-for']) ? 
                req.headers['x-forwarded-for'].split(',')[0] : req.connection.remoteAddress

    res.send(`Hello ${ip}!`)
})

app.listen(3000, () => console.log('Server up'))