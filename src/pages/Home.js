import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <MainServices />
                <MainInto />
                <MainParallax />
                <Customer />
            </div>
        );
    }
}

class MainServices extends Component {
    render() {
        return (
            <div id="section02" className="main-service clr-bg-main">
                <div className="container">
                    <ul className="list-inline mg-b-35 text-center">
                        <li>
                            <h4>MECHANICS</h4>
                            <p>I m a paragraph. Click here to add your own text and edit me.</p>
                        </li>
                        <li>
                            <h4>MECHANICS</h4>
                            <p>I m a paragraph. Click here to add your own text and edit me.</p>
                        </li>
                        <li>
                            <h4>MECHANICS</h4>
                            <p>I m a paragraph. Click here to add your own text and edit me.</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

class MainInto extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="text-center">
                        <h1 className="title">
                            Why Notemptysoft
                            <div className="line-style"><i className="glyphicon glyphicon-tint"></i><span></span></div>
                        </h1>
                        <p>We provide high volume and efficient banner ad production solutions tailored for your digital marketing campaign. Our team has developed, implemented hundreds of banner ad campaigns and the solutions are trusted by the global brands and advertising agencies.</p>
                        <p>We provide high volume and efficient banner ad production solutions tailored for your digital marketing campaign. Our team has developed, implemented hundreds of banner ad campaigns and the solutions are trusted by the global brands and advertising agencies.</p>
                        <br />
                    </div>
                    <div className="row row-eq-height">
                        <div className="col-md-3">
                            <div className="inner flex-hover-card">
                                <div className="text-center">
                                    <span className="glyphicon glyphicon-comment"></span>
                                    <h4>1. CONSULTING</h4>
                                </div>
                                <p>We help clients to analyze the strategy and online. Response plans to improve the business both online advertising and social media marketing, mobile, etc.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="inner flex-hover-card">
                                <div className="text-center">
                                    <span className="glyphicon glyphicon-picture"></span>
                                    <h4>2. DESIGN</h4>
                                </div>
                                <p>Creativity Is the key In our design We have a team creative innovative and experienced professional design best.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="inner flex-hover-card">
                                <div className="text-center">
                                    <span className="glyphicon glyphicon-tree-deciduous"></span>
                                    <h4>3. DEVELOPMENT</h4>
                                </div>
                                <p>We develop websites and web application. On mobile app and social media applications with the latest technologies. We have the ability Manage projects of all sizes. Complex systems more efficiently.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="inner flex-hover-card">
                                <div className="text-center">
                                    <span className="glyphicon glyphicon-wrench"></span>
                                    <h4>4.MAINTENANCE</h4>
                                </div>
                                <p>We not only provide assistance. Our customers through the development process, but also carried out after the project is completed, the customer receives the package maintenance flexibility. And additional services, including domain and hosting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class MainParallax extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <h1 className="title text-center">
                        Current Project
                        <div className="line-style"><i className="glyphicon glyphicon-tint"></i><span></span></div>
                    </h1>
                </div>
                <div className="current-project parallax-window" data-parallax="scroll" data-image-src="https://www.buzzwoo.de/sites/default/files/bg_images/porsche-cayman-image.jpg">
                    <div className="container pad-cur">
                        <h1>PORSCHE iPad Business App (B2B)</h1>
                        <p>Business iPad Lösungen für die offiziellen Porsche Presse Fahrveranstaltungen. Die Fahrveranstaltungen werden weltweit ausgetragen, sind fahrzeugspezifisch organisiert und werden vor Verkaufsstart der Modelle ausgetragen. Hierzu werden Journalisten aus aller Welt eingeladen und durch das Veranstaltungsprogramm geführt. BUZZWOO! ist für die Konzeptionierung, Entwicklung und Aktualisierung der begleitenden iOS Apps verantwortlich.</p>

                        <h3>Technology</h3>
                        <ul>
                            <li>Bootstrap</li>
                            <li>Vue.js</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

class Customer extends Component {
    render() {
        return (
            <section className="customer">
                <div className="container text-center">
                    <h1 className="title text-center">
                        Our client
                        <div className="line-style"><i className="glyphicon glyphicon-tint"></i><span></span></div>
                    </h1>
                    <ul className="list-inline">
                        <li>
                            <img src={require('../images/logo.png')} alt="" height="60" />
                        </li>
                        <li>
                            <img src={require('../images/logo.png')} alt="" height="60" />
                        </li>
                        <li>
                            <img src={require('../images/logo.png')} alt="" height="60" />
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Home;