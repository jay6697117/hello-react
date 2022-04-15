import React, { Component } from 'react';
import './assets/style/comment-app.css';

class CommentInput extends Component {
  render() {
    return (
      <div className='comment-input'>
        <h2>我是 CommentInput</h2>
      </div>
    );
  }
}

class CommentListItem extends Component {
  render() {
    return <div className='comment-list-item'>我是 CommentListItem</div>;
  }
}

class CommentList extends Component {
  render() {
    return (
      <div className='comment-list'>
        <CommentListItem />
        <CommentListItem />
        <CommentListItem />
        <CommentListItem />
      </div>
    );
  }
}

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
