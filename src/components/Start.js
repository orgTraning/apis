import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import User from './User';
import Input from './Input';
import UserDetail from './UserDetail';

const Start = () => {
  return (
    <div>
      <ul className='navBar'>
        <span>
          <Link to='/'>Home || </Link>
        </span>

        <span>
          <Link to='/user'>User || </Link>
        </span>
        <span>
          <Link to='/TextField'> User Form || </Link>
        </span>
      </ul>
      <Switch>
        <Route path='/User/:id' component={UserDetail} />
        <Route path='/User' component={User} />
        <Route path='/TextField' component={Input} />
      </Switch>
    </div>
  );
};

export default Start;
