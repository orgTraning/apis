import React, { Component } from 'react';
import './Custom.css';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, deleteUser } from '../action/userAction';

class User extends Component {
  render() {
    return (
      <div>
        <button disabled={this.props.user.loading} onClick={this.props.getUser}>
          Get User Data
        </button>
        <div>
          {this.props.user.loading ? (
            <img
              src={'https://giphy.com/gifs/11xBk5MoWjrYoE/html5'}
              alt='loading'
            ></img>
          ) : (
            <table className='userTable'>
              {this.props.user.data.length ? (
                <tr>
                  <th>Name:</th>
                  <th>ID:</th>
                  <th>Node ID:</th>
                  <th>URL:</th>
                  <th colSpan='2'>Actions: </th>
                </tr>
              ) : null}
              {this.props.user.data.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        onClick={() => {
                          return this.props.deleteUser(user.id);
                        }}
                      >
                        Delete
                      </button>
                      <button>
                        <Link to={`/User/${user.id}`}>EDIT</Link>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, { getUser, deleteUser })(
  withRouter(User)
);
