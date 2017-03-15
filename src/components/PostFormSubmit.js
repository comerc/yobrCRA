import React from 'react'
import BEMHelper from 'react-bem-helper'

const bem = BEMHelper('post-form')

const PostFormSubmit = ({ isLoading }) => (
  <div {...bem('submit')}>
    <button>Отправить</button>
  </div>
)

export default PostFormSubmit