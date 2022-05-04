// Import Express
const express = require('express')
const mongoose = require('mongoose')
const apiroute = require('./routes/api_route')

// Intialize the Application
const app = express()

// Setup Server Port
const port = 8080
app.use(express.json()) // Set Content Type to JSON

// Send Message for your localhost
app.use('/', apiroute)



const url = "mongodb+srv://arjunuvlad:12345@hitman24.ct1jy.mongodb.net/Kellton-Ecommerce?retryWrites=true&w=majority"

mongoose.connect(url,{useNewUrlParser:true})
.then(() => {
    console.log('Database Connected')
}).catch(err => console.log(err))




// Launch the Ecommerce Backend App
app.listen(port, () => {
    console.log(`Running the Ecommerce Backend on Port:  
    "http://localhost:${port}/ `)
})
