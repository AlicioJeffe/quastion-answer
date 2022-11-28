const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const connection = require('./database/database')


connection.authenticate().then(() => {
    console.log("Connection successfully");
}).catch(() => {

    console.log("Error to establish connection");
})


app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function (req, res) {
    var lang = "Javascript";
    res.render('home', {
        lang, showMessage: false, products: [
            { name: 'HP Computer', price: 2000 },
            { name: 'Iphone 14 Pro Max', price: 94000 },
            { name: 'Wi-fi Repeater with two antenna', price: 10500 },
        ]
    })
});

app.get('/ask', (req, res) => {
    res.render('ask_question')
})

app.post('/sendForm', ((req, res) => {

    res.end("Form sent. Data : Title: " + req.body['title'] + " Description: " + req.body.description)
}))

app.listen(8000, () => {
    console.log('server running')
})
