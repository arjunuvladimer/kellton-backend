// API Routes

const express = require('express')
const router = express.Router()
const Controller = require('../controller/controller')

// Default Route
router.get('/',Controller.showIndex )

// Add Products
router.post('/add-products',Controller.addProducts)

// Get Products
router.get('/get-products',Controller.showProducts )

// Client => Postman
    // Default:
    // Request => http://locahost:8080/ 
    // Add Products
    // Request => http://locahost:8080/add-products
    // Response => Data
// Server => Nodejs
   // Response => Running Node API
   // Add Products
   // Asssigned all the things from => Request from Client Body => Set Schema => Created a Model using mongoose
   // It communicated with your database
   // Response => Data => Client 

// Methods
    // GET => We are fetching data from a specified resource => Node/PHP/JSP =>  MongoDB
    // POST => We are sending submiting data =>Data =>  Node => MongoDB
    // PUT => We are updating existing document => Updating Data => Node => MongoDB
    // Delete => we are deleting existing document => Deleting Data => Node => MongoDB

module.exports = router