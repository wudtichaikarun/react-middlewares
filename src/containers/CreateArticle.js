import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Form } from 'Components'

class CreateArticle extends PureComponent {
  render() {
    return(
      <Form onSubmit={} />
    )
  }
}

export default connect(
  null,
)(CreateArticle)