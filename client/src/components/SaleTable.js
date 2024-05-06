import React, {Component} from "react"
import SaleTableRow from "./SaleTableRow"


export default class SaleTable extends Component 
{
    
    render() 
    {
        return (
            <table className="table2">
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.sales.map((sale) => <SaleTableRow key={sale._id} sale={sale}/>)}
                </tbody>
            </table>      
        )
    }
}