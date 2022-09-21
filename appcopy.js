const express = require("express")
const app = express()
const port = 80
const path = require("path")
//serving static files
app.use('/static', express.static('static'))
// set template engine as pug
app.set('view engine', 'pug')

app.set('views', path.join(__dirname, 'views'))
// Our pug demo end point
app.get("/demo", (req, res) => {
    res.render('demo', { title: 'Hey', message: 'Hello there!' })
})
// set the directory

app.get("/", (req, res) => {
    res.status(414).send("This is my first express application")
})
app.get("/about", (req, res) => {
    res.send("This is my first express application inside about")
})
app.post("/about", (req, res) => {
    res.send("This is my first express application post operation")
})

app.listen(port, () => {
    console.log(`Application started successfully on ${port}`)
})
