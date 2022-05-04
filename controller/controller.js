// GET Controller

// Include Schema
const ProductsModel = require('../model/post_model')

// Default Response Throught the controller
exports.showIndex = (req,res) => {
    res.send("Running Node API")
}

exports.addProducts = (req,res) => {
    const post = new ProductsModel({
        id:req.body.id,
        title:req.body.title,
        routeName:req.body.routeName,
        items:req.body.items
    })
    post.save()
    .then(
        data => {
        res.send(data)
    })
    .catch(err => {res.send(err)})
}

