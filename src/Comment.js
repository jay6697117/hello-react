import React, { Component } from 'react';
import './assets/style/card.css';

class Comment extends Component {
  render() {
    console.log('Comment render this.props:', this.props);
    const { comment } = this.props;
    console.log('comment:', comment)
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username} </span>:
        </div>
        <p>{comment.content}</p>
      </div>
    );
  }
}

export default Comment;
