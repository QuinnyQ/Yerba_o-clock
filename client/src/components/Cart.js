import axios from "axios";
import React, { Component } from "react";
import { SERVER_HOST } from "../config/global_constants";
import CartTable from "./CartTable";
import { Link } from "react-router-dom";
import Data from "./Data";

export default class Cart extends Component{

    constructor(props)
    {
        super(props)

        this.state = {
            products: [],
            quantityCart: 0,
            toPay: 0,
            checkout: false

        }
    }

    componentDidMount()
    {
        const cartItems = sessionStorage.getItem("Cart")
        if(cartItems)
        {
            axios.get(`${SERVER_HOST}/products/${cartItems}`)
            .then(res =>
                {
                    if(res.data)
                    {
                        res.data.map((product) =>
                        {
                                this.state.toPay += product.price
                                this.state.quantityCart += product.quantity
                                
                                this.setState({products: res.data})
                                
                                sessionStorage.amount=this.state.quantityCart
                                sessionStorage.value=this.state.toPay
                            
                            
                        }
                        )
                        
                        
                    }
                    
                })
        }
    }

    

    render() {
              
        return (
            
            <div>
                <h3 className="view">Cart</h3>
                <div className="table-container">
                <CartTable products={this.state.products}/>
                    
                </div>
                
                <p></p>
                <h3 className="view">({this.state.quantityCart} items) {this.state.toPay.toFixed(2)} EUR</h3>
                {this.state.quantityCart === 0
                ?
                <div className="view">
                    <Link className="red-button" to={"/traditionalyerbamate"}>Add to cart</Link>
                </div>
                :
                <div className="viewpaypal">
                <Data productID={sessionStorage.Cart} price={sessionStorage.value} email={localStorage.email}/>
                </div>
                }
                
            </div>
            
        )
    }
};