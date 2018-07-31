import React, { Component } from "react";

import InputField from '../InputField'

class AddCommentForm extends Component {

  render() {
    return (
      <div>
        <InputField
          title="name"
          from={5}
          to={15}
        />
        <InputField
          title="text"
          from={20}
          to={50}
        />
      </div>
    );
  }
}

export default AddCommentForm;
