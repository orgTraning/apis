import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import TextField from './UserForm';
import { editUser } from '../action/userAction';
import { connect } from 'react-redux';
class UserDetail extends Component {
  state = {
    name: '',
    username: '',
    email: ''
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
      this.setState({
        name: res.data.name,
        username: res.data.username,
        email: res.data.email
      });
    });
    console.log(this.props.match.params.id);
  }
  onSubmitHandler = event => {
    const id = this.props.match.params.id;
    event.preventDefault();
    this.props.editUser(this.state, id);
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <>
        <h2> User Details: </h2>
        <form onSubmit={this.onSubmitHandler}>
          <TextField
            label='Name: '
            type='text'
            name='name'
            changeHandler={this.changeHandler}
            placeholder={'Please enter name'}
            value={this.state.name}
          />
          <br />
          <TextField
            label='Email: '
            type='email'
            name='name'
            changeHandler={this.changeHandler}
            placeholder={'Please enter name'}
            value={this.state.email}
          />
          <br />
          <TextField
            label='Username: '
            type='text'
            name='name'
            changeHandler={this.changeHandler}
            placeholder={'Please enter name'}
            value={this.state.username}
          />
          <br />
          <button>Edit Data</button>
        </form>
      </>
    );
  }
}
const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, { editUser })(withRouter(UserDetail));
