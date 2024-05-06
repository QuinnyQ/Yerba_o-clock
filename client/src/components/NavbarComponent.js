import "../css/App.css"
import React, {Component} from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from'react-router-dom';
import LoggedInRoute from "./LoggedInRoute";
import "bootstrap/dist/css/bootstrap.css"

import axios from "axios"
import Login from "./Login"
import LinkInClass from "./LinkInClass"
import About from "./About";
import Cart from "./Cart";
import Home from "./Home";
import Register from "./Register";
import TYM from "./YerbaMate/TYM";
import FLYM from "./YerbaMate/FLYM";
import HYM from "./YerbaMate/HYM";
import OYM from "./YerbaMate/OYM";
import GYM from "./YerbaMate/GYM";
import ESYM from "./YerbaMate/ESYM";
import Ceramic from "./Mates/Ceramic";
import Colored from "./Mates/Colored";
import Termomate from "./Mates/Termomate";
import Yerbomos from "./Mates/Yerbomos";
import Bamboo from "./Bombillas/Bamboo";
import ColoredB from "./Bombillas/ColoredB";
import Disassembled from "./Bombillas/Disassembled";
import StainlessSteel from "./Bombillas/StainlessSteel";
import Wooden from "./Bombillas/Wooden";
import {SERVER_HOST, ACCESS_LEVEL_GUEST, ACCESS_LEVEL_NORMAL_USER} from "../config/global_constants.js"
import Loginstare from "./Loginstare";
import AddProduct from "./AddProduct";
import Profile from "./Profile";
import EditProduct from "./EditProduct";
import Data from "./Data"
import PayPalMessage from "./PayPalMessage";
import Orderhistory from "./Orderhistory";
import DisplayAllProducts from "./DisplayAllProducts";


export default class NavbarComponent extends Component {
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
            localStorage.accessLevel=0
            localStorage.login="false"
            localStorage.email="guest"
            sessionStorage.clear()
            window.location.reload()
            
                    
            this.setState({isLoggedIn:false})                 
        }) 
        .catch(err =>
        {
            // do nothing
        })
    }
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="warning" variant = {"light"} expand="lg">
                        <Container fluid>
                            <Navbar.Brand as={Link} to={"/home"}>
                                <img
                                    alt=""
                                    src="yerbalogo.png"
                                    width="40"
                                    height="40"
                                />
                                {' '}Yerba 'clock
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto my-2 my-lg-0">
                                <Nav.Link as={Link} to={"/profile"}>Profile</Nav.Link>
                                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                                {/* <Nav.Link as={Link} to={"/cart"}>Cart</Nav.Link> */}
                                <NavDropdown title="Yerba Mate" id="basic-nav-dropdown" >
                                    <NavDropdown.Item as={Link} to={"/traditionalyerbamate"}>Traditional Yerba Mate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/organicyerbamate"}>Organic Yerba Mate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/flavouredyerbamate"}>Flavoured Yerba Mate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/herbalyerbamate"}>Herbal Yerba Mate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/greenyerbamate"}>Green Yerba Mate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/extrastimulatingyerbamate"}>Extra Stimulating Yerba Mate</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Mates/ Gourds" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to={"/ceramicmates"}>Ceramic Mates</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/trmomatemaets"}>Termomate</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/coloredmates"}>Colored Mates</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/yerbomosmates"}>Yerbomos</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Bombillas" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to={"/bamboobombillas"}>Baboo Bombillas</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/boloredbombillas"}>Colored Bombillas</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/disassembeledbombillas"}>Disassembeled Bombillas</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/stainlesssteelbombillas"}>Stainless Steel Bombillas</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/woodenbombillas"}>Wooden Bombillas</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Sets" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to={"/starterkits"}>Yerba Mate Tea Starter kits </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/setsforcouples"}>Yerba Mate Tea Sets For Couples</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={"/sets"}>Yerba Mate Tea Sets</NavDropdown.Item>
                                </NavDropdown>
                                </Nav>
                                </Navbar.Collapse>
                                <Navbar.Collapse>
                                    <Nav className="ml-auto">
                                    
                                    {
                                        localStorage.name === "Administrator" && localStorage.login === "true"
                                        ?
                                        null
                                        :
                                        
                                            <Button variant="outline-dark" as={Link} to={"/cart"} className="mr-2">Cart</Button>
                                        
                                    }
                                    
                                        <Button variant="outline-dark" as={Link} to={"/displayallproducts"} className="mr-2">Display All Products</Button>
                                        
                                        {
                                            localStorage.login === "true"
                                            ? 
                                            
                                            <Button variant="outline-dark" className="mr-2"> <LinkInClass value="Log out" onClick={this.handleSubmit}/> </Button>
                                                
                                                    
                                            :
                                            
                                            <Button variant="outline-dark" as={Link} to={"/login"} className="mr-2">Log in</Button>
                                                  
                                            
                                        }
                                        {
                                            localStorage.login === "true"
                                            ? 
                                            <Button variant="dark" className="mr-2" as={Link} to={"/profile"} >
                                            {localStorage.name}
                                            </Button>

                                             
                                                    
                                            :
                                            
                                            null   
                                            
                                        }
                                        
                                            
                                        
                                            
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <LoggedInRoute exact path="/EditProduct/:id" component={EditProduct} />
                        <Route exact path="/PayPalMessage/:messageType/:payPalPaymentID" component={PayPalMessage}/>  
                        <Route path="/profile"><Profile/></Route>
                        <Route path="/data"><Data/></Route>
                        <Route path="/home"><Home/></Route>
                        <Route path="/paypalmessage"><PayPalMessage/></Route>
                        <Route path="/displayallproducts"><DisplayAllProducts/></Route>
                        <Route path="/about"><About/></Route>
                        <Route path="/cart"><Cart/></Route>
                        <Route path="/login"><Login/></Route>
                        <Route path="/addproduct"><AddProduct/></Route>
                        <Route path="/register"><Register/></Route>
                        <Route path="/loginstare"><Loginstare/></Route>
                        <Route path="/orderhistory"><Orderhistory/></Route>
                        <Route path="/traditionalyerbamate"><TYM/></Route>
                        <Route path="/organicyerbamate"><OYM/></Route>
                        <Route path="/flavouredyerbamate"><FLYM/></Route>
                        <Route path="/herbalyerbamate"><HYM/></Route>
                        <Route path="/greenyerbamate"><GYM/></Route>
                        <Route path="/extrastimulatingyerbamate"><ESYM/></Route>
                        <Route path="/ceramicmates"><Ceramic/></Route>
                        <Route path="/trmomatemaets"><Termomate/></Route>
                        <Route path="/coloredmates"><Colored/></Route>
                        <Route path="/yerbomosmates"><Yerbomos/></Route>
                        <Route path="/bamboobombillas"><Bamboo/></Route>
                        <Route path="/boloredbombillas"><ColoredB/></Route>
                        <Route path="/disassembeledbombillas"><Disassembled/></Route>
                        <Route path="/stainlesssteelbombillas"><StainlessSteel/></Route>
                        <Route path="/woodenbombillas"><Wooden/></Route>
                        <Route path="*"><Home/></Route>
                        
                    </Switch>
                </div>
            </Router>
            
        );
    }
};
