import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="main-service clr-bg-red">
                    <div className="container">
                        <ul className="list-inline text-center">
                            <li>
                                <h4><span className="glyphicon glyphicon-earphone"></span> CALL US</h4>
                                <p>Tel: 123-456-7890, 084-4067469</p>
                            </li>
                            <li>
                                <h4><span className="glyphicon glyphicon-envelope"></span> EMAIL US</h4>
                                <p>into@notemptysoft.com</p>
                            </li>
                            <li>
                                <h4><span className="glyphicon glyphicon-time"></span> OPENING HOURS</h4>
                                <p>Mon - Fri: 7am - 10pm</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container footer-main">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>OVER 30 YEARS EXPERIENCE</h4>
                            <p>...</p>
                        </div>
                        <div className="col-md-4">
                            <h4>OUR SERVICES</h4>
                            <p>...</p>
                        </div>
                        <div className="col-md-4">
                            <h4>VISIT US</h4>
                            <p>...</p>
                        </div>
                    </div>
                </div>
                <div className="copyr text-center">
                    © 2017 by Mr.Akharawit. Proudly created with Notemptysoft.com
                </div>
            </footer>
        );
    }
}