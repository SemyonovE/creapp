import React from "react";
import PropTypes from 'prop-types'

import ToggleOpenClose from "../../decorators/ToggleOpenClose"
import Comment from "../Comment";

class CommentsList extends React.Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    comments: PropTypes.arrayOf(PropTypes.string),
    isOpen: PropTypes.bool,
    handleClick: PropTypes.func
  }

  static defaultProps = {
    comments: []
  }

  state = {
    openComments: false
  };

  render() {
    const {id, comments, isOpen, handleClick} = this.props
    return (
      <div>
        <button onClick={handleClick}>
          {isOpen ? "close comments" : "open comments"}
        </button>
        <section>
          {isOpen ? (
            comments.length > 0 ? (
              <ul>
                {" "}
                {comments.map(comment => (
                  <Comment key={id + comment} comment={comment} />
                ))}{" "}
              </ul>
            ) : (
              "no comments"
            )
          ) : null}
        </section>
      </div>
    );
  }
}

export default ToggleOpenClose(CommentsList)