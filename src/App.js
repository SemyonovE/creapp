import React from 'react';
import ArticleList from './components/ArticleList'
import './App.css';

import { hot } from 'react-hot-loader'

import articles from './articles.json'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ArticleList articles = { articles } />
      </div>
    );
  }
}

export default hot(module) (App);
