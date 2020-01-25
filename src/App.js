import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import User from './user';
import TextField from './userForm';
import Input from './input';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <ul>
            <span>
              <Link to='/'>Home ||</Link>
            </span>
            <span>
              <Link to='/user'>User</Link>
            </span>
            <span>
              <Link to='/TextField'> User Form || </Link>
            </span>
            <spna>
              <Link to='/Input'> Input Field || </Link>
            </spna>
          </ul>
          <Switch>
            <Route path='/user'>
              <User />
            </Route>
            <Route path='Textfield' Component={TextField} />
            <Route>
              <Input />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
