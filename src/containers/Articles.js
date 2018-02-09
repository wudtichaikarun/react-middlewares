import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Articles extends PureComponent {
  render() {
    return (
      <ul>
        {
          this.props.articles.map(article => <li key={article.id}>{article.value}</li>)
        }
      </ul>
    )
  }
}

export default connect(
  state => ({
    articles: state.articles
  })
)(Articles)