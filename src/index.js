import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import App from './components/App';

import '../style/index.css';

class Root extends React.Component {
	render() {
		return <App />;
	}
}

ReactDOM.render(<Root />, document.getElementById('container'));
