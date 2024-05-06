import React, { Component } from "react";
import {Link} from "react-router-dom"

import axios from "axios"

import ProductTable from "../../components/ProductTable"
import {ACCESS_LEVEL_GUEST, ACCESS_LEVEL_ADMIN, SERVER_HOST} from "../../config/global_constants"


export default class TYM extends Component{

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
            <div >
                <h3 className="view">Traditional Yerba Mate</h3>
                <div className="table-container">
                    <ProductTable products={this.state.products.filter(product => product.category === "TYM")} /> 
                    
                </div>
                <p></p>
            </div>
        )
    }
};