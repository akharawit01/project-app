import React, { Component } from 'react';
import logo from '../images/logo.png';
import logo_hero from '../images/logo-hero.png';

class Header extends Component {
    render() {
        return (
            <header>
                <Nav />
                <Hero />
                <Parallax />
            </header>
        );
    }
}

class Nav extends Component {
    render() {
        return (
            <nav id="header" className="navbar navbar-fixed-top">
                <div id="header-container" className="container navbar-container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a id="brand" className="navbar-brand" href="">
                            <img src={logo} alt="notemptysoft logo" className="logo" />
                        </a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li role="Why Notemptysoft"><a href="/">Why Notemptysoft</a></li>
                            <li role="About Us Notemptysoft"><a href="/about">About Us</a></li>
                            <li role="Services Notemptysoft"><a href="/services">Services</a></li>
                            <li role="Contact Us Notemptysoft"><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

class Hero extends Component {
    render() {
        return (
            <article className="notemp-hero">
                <header className="hero text-center">
                    <img src={logo_hero} alt="" />
                    <h4>The team of professionals is committed to doing business customers growth....</h4>
                    <p>Best Technology Notemptysoft the team collected those with expertise in web development application . Both in terms of web design, systems analysis and specialize in producing a website application. Our commitment Develop the best systems to customers.</p>
                    <button type="button" className="btn btn-notemp">Contact us</button>
                </header>
            </article>
        );
    }
}

class Parallax extends Component {
    render() {
        return (
            <div className="box-parallax">
                <div className="parallax"></div>
                <div className="scroll" id="scroll">
                    <a href="#section02">scroll<span></span></a>
                </div>
            </div>
        );
    }
}

export default Header;
