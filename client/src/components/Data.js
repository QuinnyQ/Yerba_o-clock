import React, {Component} from "react"
import axios from "axios"
import {Redirect} from "react-router-dom"

import {SANDBOX_CLIENT_ID, SERVER_HOST} from "../config/global_constants"
import PayPalMessage from "./PayPalMessage"
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js"


export default class Data extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {redirectToPayPalMessage:false,
                      payPalMessageType:null,
                      payPalOrderID:null}
    }
    
    
    
    createOrder = (data, actions) => 
    {
        return actions.order.create({purchase_units:[{amount:{value:sessionStorage.value}}]})
    }
    
    
    onApprove = paymentData =>
    {      
        const now = new Date();
        localStorage.data = `${now.getHours()}:${now.getMinutes()}  ${now.getDate()}.0${now.getMonth()+1}.${now.getFullYear()}`
        axios.post(`${SERVER_HOST}/sales/${paymentData.orderID}/${sessionStorage.Cart}/${sessionStorage.value}/${localStorage.email}/${localStorage.data}/${sessionStorage.amount}`)
        .then(res => 
        {                   
            this.setState({payPalMessageType:PayPalMessage.messageType.SUCCESS, 
                           payPalOrderID:paymentData.orderID, 
                           redirectToPayPalMessage:true}) 
        })
        .catch(errorData =>
        {           
            this.setState({payPalMessageType:PayPalMessage.messageType.ERROR, 
                           redirectToPayPalMessage:true}) 
        })
    }
 
        
    onError = errorData => 
    {
        this.setState({payPalMessageType:PayPalMessage.messageType.ERROR, 
                       redirectToPayPalMessage:true})         
    }
    
    
    onCancel = cancelData => 
    {
        // The user pressed the Paypal checkout popup window cancel button or closed the Paypal checkout popup window
        this.setState({payPalMessageType:PayPalMessage.messageType.CANCEL, 
                       redirectToPayPalMessage:true})       
    }
    

                
    render()
    {
        return (
            <div>
                {this.state.redirectToPayPalMessage ? <Redirect to= {`/PayPalMessage/${this.state.payPalMessageType}/${this.state.payPalOrderID}`}/> : null}            
            
                <PayPalScriptProvider options={{currency:"EUR", "client-id":SANDBOX_CLIENT_ID }}>
                    <PayPalButtons style={{layout: "horizontal"}} createOrder={this.createOrder} onApprove={this.onApprove} onError={this.onError} onCancel={this.onCancel}/>
                </PayPalScriptProvider>
            </div>
    )}
}
