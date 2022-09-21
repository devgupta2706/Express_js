const express = require("express")
const app = express()
const port = 80
const path = require("path")
const fs = require("fs");
//Express sstuff
app.use('/static', express.static('static'))
app.use(express.urlencoded({extended: true}));
// Pug specific stuff
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
// End points
app.get('/', (req, res) => {
    const con = "Get the membership for my channel in just Rupees Rs.299.";
    const params = { 'title': 'pug is a file type', "message": con };
    res.status(200).render('index.pug', params)
})
app.post('/',express.urlencoded(), (req, res) => {
    console.log(req.body);
    name = req.body.name
    age = req.body.age
    address = req.body.address
    gender=req.body.gender
    Reviews=req.body.Reviews

    let filewrite = `Client details: name ${name},Age ${age},Address ${address},Gender ${gender}, Reviews ${Reviews}\n`;
    // fs.writeFileSync('output.txt', filewrite)
    fs.appendFileSync('output.txt', filewrite, (err) => {
      
        // In case of a error throw err.
        if (err) throw err;
    })
    const params = { "message": "Form submitted successfully" };
    res.status(200).render('index.pug', params);
})
// start the servers
app.listen(port, () => {
    console.log(`Application started successfully on ${port}`)
})
