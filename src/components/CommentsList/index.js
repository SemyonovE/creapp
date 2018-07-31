import React from "react";
import PropTypes from 'prop-types'

import toggleOpenClose from "../../decorators/ToggleOpenClose"
import Comment from "../Comment";
import AddCommentForm from "../AddCommentForm";

class CommentsList extends React.Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    comments: PropTypes.arrayOf(PropTypes.string),
    //from ToggleOpenClose
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
              <div>
                <AddCommentForm />
                <ul>
                  {" "}
                  {comments.map(comment => (
                    <Comment key={id + comment} comment={comment} />
                  ))}{" "}
                </ul>
              </div>
            ) : (
              "no comments"
            )
          ) : null}
        </section>
      </div>
    );
  }
}

export default toggleOpenClose(CommentsList)