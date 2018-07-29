import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Commnet extends Component {
  static propTypes = {
    comment: PropTypes.string
  }

  static defaultProps = {
    comment: ""
  }

  render() {
    return (
      <li>{this.props.comment}</li>
    );
  }
}

export default Commnet;