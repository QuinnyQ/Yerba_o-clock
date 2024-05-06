import React, {Component} from "react"
import {Redirect, Link} from "react-router-dom"
import Form from "react-bootstrap/Form"

import axios from "axios"

import LinkInClass from "./LinkInClass"

import {ACCESS_LEVEL_ADMIN, SERVER_HOST} from "../config/global_constants"


export default class AddProduct extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            name:"",
            availibity:"",
            category:"",
            price:"",
            selectedFiles:null,
            redirectToDisplayAllProducts:localStorage.accessLevel < ACCESS_LEVEL_ADMIN,
            wasSubmittedAtLeastOnce:false
        }
    }


    componentDidMount() 
    {     
        this.inputToFocus.focus()        
    }
 
 
    handleChange = (e) => 
    {
        this.setState({[e.target.name]: e.target.value})
    }


    handleFileChange = (e) => 
    {
        this.setState({selectedFiles: e.target.files})
    }
    
    
    handleSubmit = (e) => 
    {
        e.preventDefault()

        let formData = new FormData()                  
        formData.append("name", this.state.name)
        formData.append("availibity", this.state.availibity)
        formData.append("category", this.state.category)
        formData.append("price", this.state.price)
        
        if(this.state.selectedFiles)
        {
            for(let i = 0; i < this.state.selectedFiles.length; i++)
            {
                formData.append("productPhotos", this.state.selectedFiles[i])
            }
        }

        axios.post(`${SERVER_HOST}/products`, formData, {headers:{"authorization":localStorage.token, "Content-type": "multipart/form-data"}})
        .then(res => 
        {           
            this.setState({redirectToDisplayAllProducts:true})
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
            <div className="view"> 
                {this.state.redirectToDisplayAllProducts ? <Redirect to="/profile"/> : null}                                            
                    
                {errorMessage}
                
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref = {(input) => { this.inputToFocus = input }} type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="availibity">
                        <Form.Label>Availibity</Form.Label>
                        <Form.Control type="text" name="availibity" value={this.state.availibity} onChange={this.handleChange} />
                    </Form.Group>
    
                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" value={this.state.price} onChange={this.handleChange} />
                    </Form.Group> 

                    <Form.Group controlId="category">
                        <Form.Label>Select Category</Form.Label>
                        <Form.Control as="select" type="text" name="category" value={this.state.category} custom onChange={this.handleChange}>
                            <option value="W">Select category</option>
                            <option value="TYM">Traditional Yerba Mate</option>
                            <option value="OYM">Organic Yerba Mate</option>
                            <option value="FLYM">Flavoured Yerba Mate</option>
                            <option value="HYM">Herbal Yerba Mate</option>
                            <option value="GYM">Green Yerba Mate</option>
                            <option value="ESYM">Extra Stimulating Yerba Mate</option>
                            <option value="Ceramic">Ceramic</option>
                            <option value="Termomate">Termomate</option>
                            <option value="Colored">Colored</option>
                            <option value="Yerbomos">Yerbomos</option>
                        </Form.Control>
                    </Form.Group> 
                    
                    <Form.Group controlId="photos">
                        <Form.Label>Photos</Form.Label>
                        <Form.Control          
                            type = "file" multiple onChange = {this.handleFileChange}
                        />
                    </Form.Group>
                    <div >
                        <LinkInClass value="Add" className="button-profile-active-mid" onClick={this.handleSubmit}/>                        
                        <Link className="button-profile-active-mid" to={"/home"}>Cancel</Link>
                    </div>
                </Form>
            </div>
        )
    }
}