
import React from 'react';

import Main from './components/Main'
import SiteContextProvider from './context/SiteContext.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <SiteContextProvider>
          <Main />
        </SiteContextProvider>
      </>
    );
  }
}