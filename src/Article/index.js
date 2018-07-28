import React from 'react'

export default class Article extends React.Component {
  static defaultProps = {
    article: []
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.openedID === +props.article.id,
      openComments: false
    }

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.openedID !== this.props.openedID) {
      this.setState({
        isOpen: nextProps.openedID === +this.props.article.id
      })
    }
  }

  handleClick = () => {
    if(+this.props.article.id === this.props.openedID) {
      this.setState({
        isOpen: !this.state.isOpen
      })
      return
    }
    this.props.fnChangeID(this.props.article.id)
    this.setState({
      isOpen: false
    })
  }

  CommentClick = () => {
    this.setState({
      openComments: !this.state.openComments
    })
  }

  render() {
    const {article} = this.props
    const {isOpen, openComments} = this.state
    return (
      <div>
        <h3>
          {article.title}
          <button onClick={this.handleClick}>{isOpen ? 'close' : 'open'}</button>
        </h3>
        <section>
          {isOpen && article.text}
        </section>
        {isOpen ? <div>
          <button onClick={this.CommentClick}>{openComments ? 'close comments' : 'open comments'}</button>
          <section>
            {openComments ? (article.comments.length > 0 ? <ul> {article.comments.map(comment => <li key={article.id + comment}>{comment}</li>)} </ul> : "no comments") : null }
          </section>
        </div> : null}
      </div>
    )
  }
}