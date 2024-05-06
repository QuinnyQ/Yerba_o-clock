const mongoose = require(`mongoose`)

let salesSchema = new mongoose.Schema(
   {
        paypalPaymentID: {type: String, required:true},
        productID: {type: Array, required:true},
        price: {type: Number, required:true},
        userEmail:{type: String, required:true},
        date: {type: String, required:true},
        amount: {type: String,reguired:true}
   },
   {
       collection: `sales`
   })

module.exports = mongoose.model(`sales`, salesSchema)