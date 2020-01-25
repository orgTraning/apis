import React, { Component } from 'react';
import TextField from './userForm';

class Input extends Component {
  state = {
    name: '',
    email: '',
    phone: 0,
    city: ''
  };
  changeHandler = e => {
    console.log(`${e.target.name}: ${e.target.value}`);
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = event => {
    event.preventDefault();
    const { name, email, city } = this.state;
    const data = {
      username: name,
      email,
      city
    };
    console.log(data);
    // onAddUser(data);
  };
  render() {
    const { name, email, phone, city } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <TextField
            type='text'
            id='123'
            name='name'
            changeHandler={this.changeHandler}
            placeholder={'Please enter name'}
            value={name}
          />

          <TextField
            label='Email'
            type='email'
            id='email'
            name='email'
            changeHandler={this.changeHandler}
            placeholder={'Please enter email'}
            value={email}
          />

          <TextField
            type='number'
            id='phone'
            name='phone'
            changeHandler={this.changeHandler}
            placeholder={'Please enter phone no'}
            value={phone}
          />

          <TextField
            type='text'
            id='city'
            name='city'
            changeHandler={this.changeHandler}
            placeholder={'Please enter city'}
            value={city}
          />
          <input type='submit' value='Send' />
        </form>
      </div>
    );
  }
}
export default Input;
