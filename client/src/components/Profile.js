import "../css/App.css"
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ACCESS_LEVEL_ADMIN, SERVER_HOST} from "../config/global_constants.js"
import axios from 'axios';
import UserTable from './UserTable';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
    }

    componentDidMount() 
    {
        axios.get(`${SERVER_HOST}/users`)
        .then(res => 
        { 
            this.setState({users: res.data})                                         
        })
        .catch(err =>
        {
            // do nothing
        })
    }
    render() {
        return (
            <div>
            {localStorage.accessLevel >= ACCESS_LEVEL_ADMIN 
            ?
                <div className="table-container2">
                    <div className="view">
                        <Link className="button-profile-active-big" to={"/AddProduct"}>Add New Product</Link><br/><br/>
                        <h1>Users</h1> 
                        </div>
                        <div className="table2">
                            <UserTable users={this.state.users} /> 
                        </div>
                </div>
            :
                <div>
                    {localStorage.login === "true"
                    ?
                        <div className='view'>
                            <Link to={"/profile"}>
                                <button type="submit" className="button-profile-active-big">
                                    Profile
                                </button>
                            </Link>
                            <Link to={"/orderhistory"}>
                                <button type="submit" className="button-profile-nonactive">
                                    Order history
                                </button>
                            </Link>
                            <div >
                                <h1 >Profile</h1>
                                <br/>
                                <img src={`data:;base64,${localStorage.profilePhoto}`} alt="Avatar" className="avatarek"></img>
                                <br/><br/>
                                <div>
                                    <div className="data">
                                        <b>Profile details</b><br/><br/>
                                        <p>
                                            {localStorage.name} 
                                        </p>
                                        <button type="submit" className="button-profile-active-mid">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                                <br/>
                                <div>
                                    <div className="data">
                                        <b>Address email</b><br/><br/>
                                        <p>
                                            {localStorage.email}
                                        </p>
                                        <button type="submit" className="button-profile-active-mid">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                                <br/>
                                <div>
                                    <div className="data">
                                        <b>Password</b><br/><br/>
                                        <p>
                                            ••••••••
                                        </p>
                                        <button type="submit" className="button-profile-active-mid">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :
                        <div className="view-title">
                            <h1>Log in to view your profile</h1>
                        </div>
                    }
                </div>
            }
            </div>
        
        );
    }
}