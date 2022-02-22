
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import App from './app.js';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);