import React, { Component } from 'react';
import './assets/style/comment-list.css'
import CommentItem from './CommentItem'

class CommentList extends Component {
  render() {
    return (
      <div className='comment-list'>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    );
  }
}

export default  CommentList;
