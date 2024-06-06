const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String
    },
    productImg : {
        type : String
    },
    price : {
        type : String
    },
    dummyprice : {
        type : String
    }
})

module.exports = mongoose.model('products', productSchema)