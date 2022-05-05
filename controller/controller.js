// GET Controller

// Include Schema
const ProductsModel = require('../model/product_model')

// Default Response Throught the controller
exports.showIndex = (req,res) => {
    res.send("Running Node API")
}

exports.addProducts = (req,res) => {
    const product = new ProductsModel({
        id:req.body.id,
        title:req.body.title,
        routeName:req.body.routeName,
        items:req.body.items
    })
    product.save()
    .then(
        data => {
        res.send(data)
    })
    .catch(err => {res.send(err)})
}

exports.showProducts = (req,res) => {
    ProductsModel.find() // fetches all the 
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.status(400).send(err)
    })
}

