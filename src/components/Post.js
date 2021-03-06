import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import BEMHelper from 'react-bem-helper'

import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostTags from './PostTags'
// import PostInfoPanel from './PostInfoPanel'

const bem = BEMHelper('post')

const Post = ({ id, published, flow, hubs, title, author, company, tags, content, viewsCount, favoritesCount }) => (
  <div {...bem('', 'total')}>
    <PostHeader {...{ id, published, flow, hubs, title }} />
    <PostBody {...{ content }}>
      <PostTags {...{ tags }} />
    </PostBody>
    <div {...bem('footer')}>
      {/* <PostInfoPanel isTeaser={false} {...{ id, author, viewsCount, favoritesCount }} /> */}
    </div>
  </div>
)

const getPostId = (state, ownProps) =>
  parseInt(ownProps.params.postId, 10)

const getPosts = (state) =>
  state.posts

const mapStateToProps = createSelector(
  [getPosts, getPostId],
  (posts, postId) =>
    posts.find(element =>
      element.id === postId)
)

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
