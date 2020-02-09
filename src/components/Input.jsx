import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from './UserForm';
import { postUser } from '../action/userAction';
class Input extends Component {
  state = {
    name: '',
    email: '',
    phone: 0
  };
  changeHandler = e => {
    console.log(`${e.target.name}: ${e.target.value}`);
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = event => {
    event.preventDefault();
    this.props.postUser(this.state);
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <TextField
            label='Name:  '
            type='text'
            id='123'
            name='name'
            changeHandler={this.changeHandler}
            placeholder={'Please enter name'}
            value={name}
          />
          <TextField
            label='Email:  '
            type='email'
            id='email'
            name='email'
            changeHandler={this.changeHandler}
            placeholder={'Please enter Email'}
            value={email}
          />

          <TextField
            label='Phone:  '
            type='number'
            id='phone'
            name='phone'
            changeHandler={this.changeHandler}
            placeholder={'Please enter phone no'}
            value={phone}
          />

          <input type='submit' value='Send' className='inputFieldButton' />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    formReducer: state.userFormReducer
  };
};
export default connect(mapStateToProps, {
  postUser
})(Input);
