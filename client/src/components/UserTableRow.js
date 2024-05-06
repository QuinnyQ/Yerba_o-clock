import React, {Component} from "react"
import axios from "axios"
import { Button } from "react-bootstrap";
import {SERVER_HOST} from "../config/global_constants"

//import BuyProduct from "./BuyProduct"

export default class UserTableRow extends Component 
{    
    delete = () =>
        {
            axios.delete(`${SERVER_HOST}/users/${this.props.user._id}`, {headers:{"authorization":localStorage.token}})
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
            <tr>
                <td data-label="Name">{this.props.user.name}</td>         
                <td data-label="Email">{this.props.user.email}</td>         
                <td data-label=" ">
                    {this.props.user.name==="Administrator"
                    ?
                        <div>You can't delete this account</div>
                        
                    :
                        <Button className="button-profile-active-small" value="delete" onClick={this.delete}>Delete</Button>
                    }
                                                         
                </td>      
            </tr>
        )
    }
}