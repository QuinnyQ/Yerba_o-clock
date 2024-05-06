const mongoose = require(`mongoose`)

let productPhotosSchema = new mongoose.Schema(
    {
       filename:{type:String}
    })


let productsSchema = new mongoose.Schema(
    {
        name: {type: String, required:true},
        availibity: {type: Number, required:true},
        quantity: {type: Number, default:1},
        price: {type: Number, required:true},
        category: {type: String, required:true},
        photos:[productPhotosSchema],
        sold: {type: Boolean, default:false}
    },
    {
       collection: `products`
    })

module.exports = mongoose.model(`products`, productsSchema)