import React from "react";

export default Component =>
  class AccordionWrapper extends React.Component {
    state = {
      openedID: null
    };

    changeOpenedID = id => {
      if (+id === this.state.openedID) {
        this.setState({
          openedID: null
        });
      } else {
        this.setState({
          openedID: +id
        });
      }
      return;
    };

    render() {
      return (
        <Component
          {...this.props}
          openedID={this.state.openedID}
          changeOpenedID={this.changeOpenedID}
        />
      );
    }
  };
