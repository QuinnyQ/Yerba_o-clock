import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import {SERVER_HOST} from "../config/global_constants.js"
import SaleTable from './SaleTable';

export default class Orderhistory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sales:[],
        };
    }
    componentDidMount() 
    {

        axios.get(`${SERVER_HOST}/sales`)
        .then(res => 
        { 
            console.log(res.data)
            this.setState({sales: res.data})                                         
        })
        .catch(err =>
        {
            // do nothing
        })
    }
    render() {
        return (
            
            <div >
                {localStorage.login === "true"
                ?
                    <div className='table-container2'>
                        <div className="view">
                            <Link to={"/profile"}>
                                <button type="submit" className="button-profile-nonactive">
                                    Profile
                                </button>
                            </Link>
                            <Link to={"/orderhistory"}>
                                <button type="submit" className="button-profile-active-big">
                                    Order history
                                </button>
                            </Link>
                        </div><div>
                            
                            <div className="view">
                                <h3>Order history</h3>
                            </div>
                            <br/>
                            <table className="table2">
                                <SaleTable sales={this.state.sales.filter(sale => sale.userEmail === localStorage.email)} />
                            </table>
                        </div>
                    </div>
                :
                    <div>
                        <h3>Not log in</h3>
                    </div>
                }
            </div>
            
        )
    }
};