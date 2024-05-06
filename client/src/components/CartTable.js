import React, {Component} from "react"
import CartTableRow from "./CartTableRow"


export default class CartTable extends Component 
{
    render() 
    {
        return (
            <table>
                
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.map((product) => <CartTableRow key={product._id} product={product}/>)}
                </tbody>
            </table>      
        )
    }
}