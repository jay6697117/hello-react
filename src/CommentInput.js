import React, { Component } from 'react';
import './assets/style/comment-input.css';

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '111',
      content: '222'
    };
  }
  render() {
    return (
      <div className='comment-input'>
        <h1>我是CommentInput</h1>
        <div className='comment-field'>
          <div className='comment-field-label'>用户名:</div>
          <div className='comment-field-input'>
            <input type='text' value={this.state.username} />
          </div>
        </div>
        <div className='comment-field'>
          <div className='comment-field-label'>评论内容:</div>
          <div className='comment-field-input'>
            <textarea value={this.state.content}></textarea>
          </div>
        </div>
        <div className='comment-field-button'>
          <button>发布</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
