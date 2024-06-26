import React, {Component} from "react"
import {Redirect, Link} from "react-router-dom"
import axios from "axios"

import LinkInClass from "../components/LinkInClass"

import {SERVER_HOST} from "../config/global_constants"


export default class Register extends Component
{
    constructor(props)
    {
        super(props)
        
        this.state = {
            name:"",
            email:"",
            password:"",
            confirmPassword:"", 
            selectedFile:null,
            isRegistered:false,
            wasSubmittedAtLeastOnce:false
        } 
    }
    
    
    handleChange = (e) => 
    {
        this.setState({[e.target.name]: e.target.value})
    }
    

    handleFileChange = (e) => 
    {
        this.setState({selectedFile: e.target.files[0]})
    }
    
    
    handleSubmit = (e) => 
    {
        e.preventDefault()

        let formData = new FormData()  
        if(this.state.selectedFile)
        {
            formData.append("profilePhoto", this.state.selectedFile, this.state.selectedFile.name)
        }    
        axios.post(`${SERVER_HOST}/users/register/${this.state.name}/${this.state.email}/${this.state.password}`, formData, {headers: {"Content-type": "multipart/form-data"}})
        .then(res => 
        {     
            localStorage.name = res.data.name
            localStorage.accessLevel = res.data.accessLevel
            localStorage.profilePhoto = res.data.profilePhoto                    
            localStorage.token = res.data.token
            localStorage.register = "true"
                    
            this.setState({isRegistered:true})               
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
            errorMessage = <div className="error">Error: All fields must be filled in<br/></div>;
        }          
    
        return (
            <form noValidate = {true} id = "loginOrRegistrationForm">
           
                {this.state.isRegistered ?  window.location.reload() : null} 
            
                {errorMessage}

                {localStorage.register === "true"
                ?
                    <div  className="view">
                        <h1> Registered </h1>
                        <Link className="button-profile-active-mid" to={"/loginstare"}>Log in</Link>             
                    </div>
                :
                    <div >
                        <br></br>
                        <h2 className="ok">New User Registration</h2><br/>
                        <div>
                            <div className="ok">
                            <input  
                                name = "name"              
                                type = "text"
                                placeholder = "Name"
                                autoComplete="name"
                                value = {this.state.name}
                                onChange = {this.handleChange}
                                ref = {(input) => { this.inputToFocus = input }} 
                            /><br/>           

                            <input  
                                    name = "email"              
                                    type = "email"
                                    placeholder = "Email"
                                    autoComplete="email"
                                    value = {this.state.email}
                                    onChange = {this.handleChange}
                            /><br/>              

                            <input  
                                    name = "password"           
                                    type = "password"
                                    placeholder = "Password"
                                    autoComplete="password"
                                    title = "Password must be at least ten-digits long and contains at least one lowercase letter, one uppercase letter, one digit and one of the following characters (£!#€$%^&*)"
                                    value = {this.state.password}
                                    onChange = {this.handleChange}
                            /><br/>           

                            <input          
                                name = "confirmPassword"    
                                type = "password"
                                placeholder = "Confirm password"
                                autoComplete="confirmPassword"
                                value = {this.state.confirmPassword}
                                onChange = {this.handleChange}
                            /><br/>
                            </div>
                            <div className="ok">
                            <input          
                                name = "profilePhoto"    
                                type = "file"           
                                onChange = {this.handleFileChange}
                            /><br/><br/>
                            </div>
                            <div className="view">
                            <LinkInClass value="Register New User" className="button-profile-active-mid" onClick={this.handleSubmit} />
                            <Link className="button-profile-active-mid" to={"/home"}>Cancel</Link> 
                            </div>
                            
                        </div>  
                    </div>
                }
            </form>
            
        )
    }
}