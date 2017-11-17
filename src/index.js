import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import '../style/index.css';

// COMPONENTS
import App from './components/App';

class Root extends React.Component {
	render() {
		return <App />;
	}
}

ReactDOM.render(<Root />, document.getElementById('container'));
