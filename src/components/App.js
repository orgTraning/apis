import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';
import Start from './Start';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Welcome to Redux Project</h1>
        <Router>
          <Start />
        </Router>
      </Provider>
    );
  }
}

export default App;
