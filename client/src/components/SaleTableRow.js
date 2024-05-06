import React, {Component} from "react"
import axios from "axios"
import { Button } from "react-bootstrap";
import {SERVER_HOST} from "../config/global_constants"
import CartTable from "./CartTable";

//import BuyProduct from "./BuyProduct"

export default class SaleTableRow extends Component 
{   
    render() 
    {
        return (
            <tr>
                <td data-label="Order Number">{this.props.sale.paypalPaymentID}</td>
                <td data-label="Date">{this.props.sale.date}</td>      
                <td data-label="Price">{this.props.sale.price} EUR</td>      
                <td data-label="Amount">{this.props.sale.amount} items</td>      
            </tr>
        )
    }
}