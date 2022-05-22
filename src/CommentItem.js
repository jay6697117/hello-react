import React, { Component } from 'react';
import './assets/style/comment-item.css';

class CommentItem extends Component {
  render() {
    // console.log('CommentItem render this.props', this.props);
    return (
      <div className='comment-item'>
        <div className='comment-username'>{this.props.comment.username}:</div>
        <div className='comment-content'>{this.props.comment.content}</div>
      </div>
    );
  }
}

export default CommentItem;
