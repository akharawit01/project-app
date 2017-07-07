import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'

class Index extends Component {
	render() {
		return (
			<div>
				<Header />
				<Home />
				<Footer />
			</div>
		);
	}
}

class About extends Component {
	render() {
		return (
			<div>
				<Header />
				About
				<Footer />
			</div>
		);
	}
}

class Services extends Component {
	render() {
		return (
			<div>
				<Header />
				Services
				<Footer />
			</div>
		);
	}
}

class Contact extends Component {
	render() {
		return (
			<div>
				<Header />
				Contact
				<Footer />
			</div>
		);
	}
}


ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact  path='/' component={Index} />
			<Route path='/about' component={About} />
			<Route path='/services' component={Services} />
			<Route path='/contact' component={Contact} />
		</Switch>
	</BrowserRouter>
	, document.getElementById('root'));

registerServiceWorker();
