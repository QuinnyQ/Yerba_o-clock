import React, { Component } from "react";


export default class About extends Component{
    render() {
        return (
            <div>
                <p></p>
                <h3 className="about-view">About us</h3><br></br>
                <div className="two-row-view">
                    <div className="about-icon">
                        <img src="pin.png"/>
                    </div>
                    <div className="about-info">
                        <b>Stationary shop:</b><br></br>
                        <p>
                        Manufaktura, lokal 222<br></br>
                        ul. Drewnowska 58<br></br>
                        91- 002 Łódź
                        </p>
                    </div>  
                </div>
                <div className="two-row-view">
                <img src="mapa.png" className="about-map"></img>
                </div>
                <div className="two-row-view">
                    <div className="about-icon">
                        <img src="open-sign.png"/>
                    </div>
                    <div className="about-info">
                        <b>Shop open:</b><br></br>
                        <p>
                            Mon - Sat: 10AM - 10PM
                        </p>
                    </div>
                </div>
                <div className="two-row-view">
                    <div className="about-icon">
                        <img src="management.png"/>
                    </div>
                    <div className="about-info">
                        <b>Company data:</b><br></br>
                        <p>
                            NIP 012-345-67-89<br></br>
                            REGON 123456789
                        </p>
                    </div>
                </div>
                <div className="two-row-view">
                    <div className="about-icon">
                        <img src="bank.png"/>
                    </div>
                    <div className="about-info">
                        <b>Bank transfer details:</b><br></br>
                        <p>
                            account number (mBank):<br></br>
                            02 0123 4567 8900 0001 2345 6789
                        </p>
                    </div>
                </div>
                <div className="two-row-view">
                    <div className="about-icon">
                        <img src="contact.png" alt="Contact icon"/>
                    </div>
                    <div className="about-info">
                        <b>Contact:</b><br></br>
                        <p>
                            +48 123 456 789<br></br>
                            yerbaoclock@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};