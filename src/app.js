
import React from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';

import ToDo from './components/todo/todo.js';
import SiteContextProvider from './context/SiteContext.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <SiteContextProvider>
          <ToDo />
        </SiteContextProvider>
      </>
    );
  }
}