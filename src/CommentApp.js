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

  componentWillMount() {
    this._initComments();
  }

  _initComments() {
    let comments = localStorage.getItem('COMMENTS');
    // console.log('_initComments comments:', comments);
    // console.log('JSON.parse(comments)', JSON.parse(comments));
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({
        comments
      });
    }
  }

  _saveComments(comments) {
    localStorage.setItem('COMMENTS', JSON.stringify(comments));
  }

  handleSubmitComment(param) {
    console.log('handleSubmitComment param:', param);
    if (!param) return;
    if (!param.username) return alert('用户名不能为空!');
    if (!param.content) return alert('评论内容不能为空!');

    const commentsTemp = [...this.state.comments]; //浅拷贝
    commentsTemp.push(param);
    console.log('handleSubmitComment this.state.comments:', this.state.comments);
    console.log('handleSubmitComment commentsTemp:', commentsTemp);

    this.setState({ comments: commentsTemp });
    this._saveComments(commentsTemp);
  }

  handleAppDeleteComment(currentIndex) {
    console.log('handleAppDeleteComment currentIndex', currentIndex);
    const commentsTemp = [...this.state.comments]; //浅拷贝
    console.log('handleSubmitComment commentsTemp:', commentsTemp);
    commentsTemp.splice(currentIndex, 1);
    this.setState({ comments: commentsTemp });
    this._saveComments(commentsTemp);
  }

  render() {
    return (
      <div className='comment-app'>
        <CommentInput onSubmitComment={this.handleSubmitComment.bind(this)} />
        <CommentList onDeleteComment={this.handleAppDeleteComment.bind(this)} comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentApp;
