import React, { Component } from 'react';

class TextField extends Component {
  render() {
    const {
      id,
      type,
      placeholder,
      name,
      changeHandler,
      value,
      label
    } = this.props;

    return (
      <>
        <label>{label}</label>
        <input
          type={type}
          id={id}
          name={name}
          onChange={changeHandler}
          placeholder={placeholder}
          value={value}
        />
      </>
    );
  }
}
export default TextField;
