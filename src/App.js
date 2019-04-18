import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Default from './Component/Default';
import Details from './Component/Details';
import ProductList from './Component/ProductList';
import Cart from './Component/Cart';
import Modal from './Component/Modal';


class App extends Component {
	render() {
		return  (
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route  exact path="/" component={ProductList}/>
					<Route path="/details" component={Details}/>
					<Route path="/Cart" component={Cart}/>
					<Route  component={Default}/>
				</Switch>
				<Modal />
			</React.Fragment>

			);
	}
}

export default App;
