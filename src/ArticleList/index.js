import React from 'react'

import Article from '../Article'

export default function ArticleList(props) {

  const body = props.articles.map( (article) => 
    <li key = {article.id}><Article article = {article} openedID = { props.openedID } fnChangeID = { props.fnChangeID }/></li>
  )

  return (
    <div>
      {body}
    </div>
  )
}