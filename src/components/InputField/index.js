import React, { Component } from 'react';

import PropTypes from 'prop-types'

import './style.css'

class InputField extends Component {
  static propTypes = {
    title: PropTypes.string,
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired
  }

  static defaultProps = {
    from: 0,
    to: 10
  }

  state = {
    value: undefined
  };

  render() {
    return (
      <input
          type="text"
          value={this.state.value || ""}
          onChange={this.changeValue}
          className={this.changeClassName(this.state.value, this.props.from, this.props.to)}
          placeholder={'Enter your ' + this.props.title}
        />
    );
  }

  changeClassName = (value, from, to) => {
    if (value === undefined) return;
    if (value.length > from && value.length < to) return "form-valid";
    else return "form-unvalid";
  };

  changeValue = ev => {
    this.setState({
      value: ev.target.value
    });
  };
}

export default InputField;