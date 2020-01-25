import React, { Component } from 'react';

class TextField extends Component {
  render() {
    const {
      id,
      city,
      phone,
      companyName,
      userName,
      type,
      email,
      placeholder,
      name,
      changeHandler
    } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type={type}
            id={id}
            name={name}
            userName={userName}
            city={city}
            phone={phone}
            companyName={companyName}
            email={email}
            onChange={changeHandler}
            placeholder={placeholder || 'placeholder'}
          />
        </form>
      </div>
    );
  }
}
export default TextField;
