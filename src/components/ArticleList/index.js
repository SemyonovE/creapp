import React from "react";
import PropTypes from "prop-types";

import Article from "../Article";
import Accordion from "../../decorators/Accordion";

class ArticleList extends React.Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    //from Accordion
    OpenedID: PropTypes.number, 
    changeOpenedID: PropTypes.func
  };

  static defaultProps = {
    articles: []
  }
  render(){
    const body = this.props.articles.map(article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={this.props.openedID === +article.id}
          changeOpenedID={this.props.changeOpenedID}
        />
      </li>
    ));

    return <div>{body}</div>;
  }
}

export default Accordion(ArticleList)