import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Header from './Header';
import Home from './Home/Home';
import About from './About/About';
import ApplyNow from './Apply/Apply';
import Support from './Support';
import Footer from './Footer';
import NotFound from './NotFound';


const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/apply" component={ApplyNow} />
					<Route path="/support" component={Support} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
