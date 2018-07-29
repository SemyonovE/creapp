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
    openedID: PropTypes.number.isRequired,
    fnChangeID: PropTypes.func.isRequired
  };

  static defaultProps = {
    article: []
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.openedID === +props.article.id
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.openedID !== this.props.openedID) {
      this.setState({
        isOpen: nextProps.openedID === +this.props.article.id
      });
    }
  }

  handleClick = () => {
    if (+this.props.article.id === this.props.openedID) {
      this.setState({
        isOpen: !this.state.isOpen
      });
      return;
    }
    this.props.fnChangeID(this.props.article.id);
    this.setState({
      isOpen: false
    });
  };

  render() {
    const { article } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <h3>
          {article.title}
          <button onClick={this.handleClick}>
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
