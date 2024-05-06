import React, { Component } from "react";

import axios from "axios"

import ProductTable from "../../components/ProductTable"
import {SERVER_HOST} from "../../config/global_constants"


export default class FLYM extends Component{

    constructor(props) 
    {
        super(props)
        
        this.state = {
            products:[]
        }
    }
    
    
    componentDidMount() 
    {
        axios.get(`${SERVER_HOST}/products`)
        .then(res => 
        { 
            this.setState({products: res.data})                                         
        })
        .catch(err =>
        {
            // do nothing
        })
    }
    render() {
        return (
            <div>
                <h3 className="view">Flavoured Yerba Mate</h3>
                <div className="table-container">
                    <ProductTable products={this.state.products.filter(product => product.category === "FLYM")} /> 
                  
                </div>
                <p></p>
            </div>
        )
    }
};