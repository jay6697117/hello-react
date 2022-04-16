import React, { Component } from 'react';
import './assets/style/comment-app.css';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }
  handleInputSubmit(param) {
    console.log('handleInputSubmit param:', param);
    if (!param) return;
    if (!param.username) return alert('用户名不能为空');
    if (!param.content) return alert('评论内容不能为空');
    this.state.comments.push(param);
    console.log('handleInputSubmit this.state.comments:', this.state.comments);
    this.setState({ comments: this.state.comments });
  }
  render() {
    return (
      <div className='comment-app'>
        <CommentInput onInputSubmit={this.handleInputSubmit.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentApp;
