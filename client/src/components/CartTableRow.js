import React, {Component} from "react"
import axios from "axios"

import {ACCESS_LEVEL_GUEST, ACCESS_LEVEL_ADMIN, SERVER_HOST, ACCESS_LEVEL_NORMAL_USER} from "../config/global_constants"

//import BuyProduct from "./BuyProduct"

export default class CartTableRow extends Component 
{    
    componentDidMount() 
    {
        this.props.product.photos.map(photo => 
        {
            return axios.get(`${SERVER_HOST}/products/photo/${photo.filename}`)
            .then(res => 
            {         
                document.getElementById(photo._id).src = `data:;base64,${res.data.image}`                                                         
            })
            .catch(err =>
            {
                // do nothing
            })
        })
        
    }

    
    render() 
    {
        
        
        return (
            <tr className="products">
                <td className="product">
                    <div className="productPhotos">
                        {this.props.product.photos.map(photo => <img key={photo._id} id={photo._id} alt=""/>)}
                    </div>
                
                    <div>{this.props.product.name}</div>
                    <div>{this.props.product.price} EUR </div>
                </td>                         
            </tr>
        )
    }
}