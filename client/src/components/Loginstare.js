import React, {Component} from "react"
import {Redirect, Link} from "react-router-dom"
import axios from "axios"

import LinkInClass from "./LinkInClass"
import {ACCESS_LEVEL_ADMIN, SERVER_HOST} from "../config/global_constants"


export default class Loginstare extends Component
{
    constructor(props)
    {
        super(props)
        
        this.state = {
            email:"",
            password:"",
            isLoggedIn:false,
            wasSubmittedAtLeastOnce:false
        }
    }
        
    
    handleChange = (e) => 
    {
        this.setState({[e.target.name]: e.target.value})
    }
    
    
    handleSubmit = (e) => 
    {
        axios.post(`${SERVER_HOST}/users/login/${this.state.email}/${this.state.password}`)
        .then(res => 
        {     
            localStorage.name = res.data.name
            localStorage.accessLevel = res.data.accessLevel
            localStorage.profilePhoto = res.data.profilePhoto                        
            localStorage.token = res.data.token
            localStorage.email = this.state.email
            localStorage.login = "true"
                    
            this.setState({isLoggedIn:true})
        }) 
        .catch(err =>
        {
            this.setState({wasSubmittedAtLeastOnce: true})
        })
    }


    render()
    {         
        let errorMessage = "";
        if(this.state.wasSubmittedAtLeastOnce)
        {
            errorMessage = <div className="error">Login Details are incorrect<br/></div>;
        }
        
        return (
            <form className="view" noValidate = {true} id = "loginOrRegistrationForm">

               
                
                {this.state.isLoggedIn ? window.location.reload() : null} 
                
                {errorMessage}
                <div>
                    {localStorage.login === "true"
                    ?
                        <div>
                            <h3>You are logged in</h3>
                            
                                {localStorage.name}
                                
                            
                            {localStorage.accessLevel >= ACCESS_LEVEL_ADMIN 
                                ?
                                null
                                : 
                                    <div>
                                        {<img src={`data:;base64,${localStorage.profilePhoto}`} alt="Avatar" className="avatarek"></img>}
                                    </div>
                            }
                            
                            
                        </div> 
                    :
                        <div> 
                            <h2>Log in</h2><br/>
                            <input 
                                type = "email" 
                                name = "email" 
                                placeholder = "Email"
                                autoComplete="email"
                                value={this.state.email} 
                                onChange={this.handleChange}
                            /><br/>
                                
                            <input 
                                type = "password" 
                                name = "password" 
                                placeholder = "Password"
                                autoComplete="password"
                                value={this.state.password} 
                                onChange={this.handleChange}
                            /><br/><br/>

                            <LinkInClass value="Login" className="button-profile-active-mid" onClick={this.handleSubmit}/> 
                            <Link className="button-profile-active-mid" to={"/home"}>Cancel</Link>
                        </div>
                    }
                </div>                               
            </form>
        )
    }
}