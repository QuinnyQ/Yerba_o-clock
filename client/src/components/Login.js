import React, {Component} from "react"
import {Link} from "react-router-dom"

import axios from "axios"

import Logout from "./Logout"
import {SERVER_HOST} from "../config/global_constants"

import {ACCESS_LEVEL_GUEST} from "../config/global_constants"


export default class Login extends Component{

    constructor(props)
    {
        super(props)
        
        this.state = {
            isLoggedIn:true
        }
    }
    
    
    handleSubmit = (e) => 
    {
        e.preventDefault()
        
        axios.post(`${SERVER_HOST}/users/logout`)
        .then(res => 
        {     
            localStorage.clear() 
            localStorage.name="GUEST"
                    
            this.setState({isLoggedIn:false})                 
        }) 
        .catch(err =>
        {
            // do nothing
        })
    }
    render() {
        return (           
            <div className="view">
                {
                    localStorage.login === "true" 
                    ? <div>
                           
                      </div>
                    : <div>
                        <Link className="button-profile-active-bigger" to={"/Loginstare"}>Login</Link>
                        <Link className="button-profile-active-bigger" to={"/Register"}>Register</Link>
                        
                        </div>
                }
                
                
            </div> 
        )
    }
};