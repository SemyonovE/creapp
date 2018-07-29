import React from "react";
import PropTypes from "prop-types";
import CommentsList from "../CommentsList";

export default class Article extends React.Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    changeOpenedID: PropTypes.func.isRequired
  };

  static defaultProps = {
    article: []
  };

  render() {
    const { article, isOpen, changeOpenedID } = this.props;
    return (
      <div>
        <h3>
          {article.title}
          <button onClick={() => changeOpenedID(article.id)}>
            {isOpen ? "close" : "open"}
          </button>
        </h3>
        {isOpen ? this.showHideSection(article) : null}
      </div>
    );
  }

  showHideSection = article => (
    <div>
      <section>{article.text}</section>
      <CommentsList id={article.id} comments={article.comments} />
    </div>
  );
}
