import React, {Component} from "react"
import {Link} from "react-router-dom"
import { Button } from "react-bootstrap";
import axios from "axios"

import {ACCESS_LEVEL_GUEST, ACCESS_LEVEL_ADMIN, SERVER_HOST, ACCESS_LEVEL_NORMAL_USER} from "../config/global_constants"

//import BuyProduct from "./BuyProduct"

export default class ProductTableRow extends Component 
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
    
    addToCart = () =>
        {
            let cartItems = JSON.parse(sessionStorage.getItem("Cart"))
            if(!cartItems)
            {
                cartItems = []
            }
            cartItems.push(this.props.product._id)
            sessionStorage.setItem("Cart",JSON.stringify(cartItems))
        }
    
    delete = () =>
        {
            axios.delete(`${SERVER_HOST}/products/${this.props.product._id}`, {headers:{"authorization":localStorage.token}})
            .then(res => 
            {       

                window.location.reload()         
            })
            .catch(err =>
            {
                // Do nothing
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
                    <div>{this.props.product.availibity} pieces left </div>
                    <div>{this.props.product.price} EUR </div>
                               
                    <div>
                    {localStorage.accessLevel >= ACCESS_LEVEL_ADMIN ? <Link className="green-button" to={"/EditProduct/" + this.props.product._id}>Edit</Link> : null}

                    {localStorage.accessLevel != ACCESS_LEVEL_ADMIN ? 
                        <div>
                        {this.props.product.availibity !== 0 
                        ?
                        <Link className="red-button" value="addcart" onClick={this.addToCart}> Add to cart</Link> 
                        :
                            <div>Sold</div>
                        }
                        </div>
                        : 
                        null}

                    {localStorage.accessLevel >= ACCESS_LEVEL_ADMIN ? <Button className="red-button" value="delete" onClick={this.delete}>Delete</Button> : null}                     
                    
                    </div>                
                </td>  
            </tr>
            
        )
    }
}