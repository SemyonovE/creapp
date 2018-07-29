import React from "react";

export default Component =>
  class ToggleOpenClose extends React.Component {
    state = {
      isOpen: false
    }

    handleClick = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    render() {
      return <Component {...this.props} isOpen = {this.state.isOpen} handleClick = {this.handleClick}/>;
    }
  };
