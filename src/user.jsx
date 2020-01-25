import React, { Component } from 'react';
import './custom.css';

class User extends Component {
  render() {
    return (
      <div>
        <table className='userTable'>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
          <tr>
            <td>Dawood</td>
            <td>Dawood Ali</td>
            <td>Dawooodali16</td>
            <td>E-43 st#08</td>
            <td>Dawood</td>
            <tr>
              <button>Add</button>
              <button>Del</button>
            </tr>
          </tr>
          <tr>
            <td>Dawood</td>
            <td>Dawood Ali</td>
            <td>Dawooodali16</td>
            <td>Dawood</td>
            <td>Dawood</td>
            <tr>
              <button>Add</button>
              <button>Del</button>
            </tr>
          </tr>
          <tr>
            <td>Dawood</td>
            <td>Dawood Ali</td>
            <td>Dawooodali16</td>
            <td>Dawood</td>
            <td>Dawood</td>
            <tr>
              <button>Add</button>
              <button>Del</button>
            </tr>
          </tr>
        </table>
      </div>
    );
  }
}
export default User;
