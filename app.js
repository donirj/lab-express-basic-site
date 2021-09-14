const express = require('express')
const app = express()

// Make everything inside of public/ available
app.use(express.static('public'));

//Rutas:
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/andoni.html`)
})

app.get("/future", (req, res) => {
    res.sendFile(`${__dirname}/views/future.html`)
})

app.listen(3000,() => console.log('http://localhost:3000'))