import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './Quotes';

class App extends Component {
	constructor() {
		super();
		this.state = {
			working: true,
			apptitle: false
		};
	}
	handleClick = () => {
		this.setState({
			working: !this.state.working,
			apptitle: !this.state.apptitle
		});
	};
	render() {
		const work = this.state.working ? 'App-logo' : 'App-logo-speed';
		const appTitle = this.state.apptitle ? 'App-title' : '';
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className={work} alt="logo" />
					<h1 className="App-title" className={appTitle}>
						I never work guys
					</h1>
				</header>
				<button onClick={this.handleClick}>Working or not Working ?</button>
				<br />
				<Quotes />
			</div>
		);
	}
}
export default App;
