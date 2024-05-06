import React, {Component} from "react"
//import {BrowserRouter, Switch, Route} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"
import "./css/App.css"

// import Register from "./components/Register"
// import ResetDatabase from "./components/ResetDatabase"
// import Login from "./components/Login"
// import Logout from "./components/Logout"
// import AddProduct from "./components/AddProduct"
// import EditProduct from "./components/EditProduct"
// import DeleteProduct from "./components/DeleteProduct"
// import DisplayAllProducts from "./components/DisplayAllProducts"
// import BuyProduct from "./components/BuyProduct"
// import PayPalMessage from "./components/PayPalMessage"
import NavbarComponent from "./components/NavbarComponent"
import { ACCESS_LEVEL_GUEST } from "./config/global_constants"

if (typeof localStorage.accessLevel === "undefined")
{
    localStorage.name = "GUEST"
    localStorage.accessLevel = ACCESS_LEVEL_GUEST
    localStorage.token = null
    localStorage.profilePhoto = null
}
    
export default class App extends Component 
{
    render() 
    {
        return (
            <div className="App">
                <NavbarComponent/>
            </div>
            /*
            <BrowserRouter>
                <Switch>
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/ResetDatabase" component={ResetDatabase} />                    
                    <Route exact path="/" component={NavbarComponent} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/BuyProduct/:id" component={BuyProduct} />
                    <Route exact path="/PayPalMessage/:messageType/:payPalPaymentID" component={PayPalMessage}/>                     
                    <Route exact path="/Logout" component={Logout} />
                    <Route exact path="/AddProduct" component={AddProduct} />
                    <Route exact path="/EditProduct/:id" component={EditProduct} />
                    <Route exact path="/DeleteProduct/:id" component={DeleteProduct} />
                    <Route exact path="/DisplayAllProducts" component={DisplayAllProducts}/> 
                    <Route path="*" component={NavbarComponent}/>                            
                </Switch>
            </BrowserRouter>
            */
        )
    }
}