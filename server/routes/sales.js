const router = require(`express`).Router()

const salesModel = require(`../models/sales`)
const productsModel = require(`../models/products`)


const createNewSaleDocument = (req, res, next) => 
{           
    // Use the PayPal details to create a new sale document                
    let saleDetails = new Object()
           
    saleDetails.paypalPaymentID = req.params.orderID
    saleDetails.productID = JSON.parse(req.params.productID)
    saleDetails.price = req.params.price
    saleDetails.userEmail = req.params.email
    saleDetails.date = req.params.data
    saleDetails.amount = req.params.amount

    productsModel.updateMany({_id : { $in : saleDetails.productID}}, {"$inc":{availibity:-1}} , (err,data) =>
    {
          
    })
        
    salesModel.create(saleDetails, (err, data) => 
    {
        if(err)
        {
            return next(err)
        }                        
    })   
    
    return res.json({success:true})
}

const getAllSalesDocuments = (req, res, next) => 
{   
    
    salesModel.find((err, data) => 
    {       
        if(err)
        {
            return next(err)
        }     
        return res.json(data)
    })
}
router.get(`/sales`, getAllSalesDocuments)



// Save a record of each Paypal payment
router.post('/sales/:orderID/:productID/:price/:email/:data/:amount', createNewSaleDocument)


module.exports = router