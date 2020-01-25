import React, { Component } from 'react';
import TextField from './userForm';

class Input extends Component {
  render() {
    return (
      <div>
        <TextField
          type='text'
          id='123'
          name='dawood'
          userName='dawoodali'
          city='Lahore'
          phone='0323'
          companyName='dawood.pvt '
          email='dawood@gmail.com'
          // onChange={changeHandler}
          // placeholder={placeholder || 'placeholder'}
        />
      </div>
    );
  }
}
export default Input;
