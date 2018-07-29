import React from "react";
import PropTypes from "prop-types";

import Article from "../Article";

export default class ArticleList extends React.Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    openedID: PropTypes.number.isRequired,
    fnChangeID: PropTypes.func.isRequired
  };

  static defaultProps = {
    article: []
  }
  render(){
    const body = this.props.articles.map(article => (
      <li key={article.id}>
        <Article
          article={article}
          openedID={this.props.openedID}
          fnChangeID={this.props.fnChangeID}
        />
      </li>
    ));

    return <div>{body}</div>;
  }
}
