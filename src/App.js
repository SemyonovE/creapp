import React from 'react';
import ArticleList from './components/ArticleList'
import './App.css';

import articles from './articles.json'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openedID: 0
    }
  }

  changeOpenedID = id => {
    this.setState({
      openedID: +id
    })
  }

  render() {
    return (
      <div className="App">
        <ArticleList articles = { articles } openedID = { this.state.openedID } fnChangeID = { this.changeOpenedID }/>
      </div>
    );
  }
}

export default App;
