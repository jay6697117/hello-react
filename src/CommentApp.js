import React, { Component } from 'react';
import './assets/style/comment-app.css';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
  render() {
    return (
      <div className='comment-app'>
        <h1>我是CommentApp</h1>
        <hr />
        <CommentInput />
        <hr />
        <CommentList />
      </div>
    );
  }
}

export default CommentApp;
