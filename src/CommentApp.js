import React, { Component } from 'react';
import './assets/style/comment-app.css';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: [
        {
          username: '李小龙',
          content: '哈哈哈哈'
        },
        {
          username: '陈小春',
          content: '洗洗休息累了'
        }
      ]
    };
  }

  componentWillMount() {
    this._init();
  }

  _init() {
    const comments = localStorage.getItem('COMMENTS');
    // console.log('_init comments:', comments);
    // console.log('JSON.parse(comments)', JSON.parse(comments));
    if (comments) {
      this.setState({
        comments: JSON.parse(comments)
      });
    }
  }

  _saveComments(comments) {
    localStorage.setItem('COMMENTS', comments);
  }

  handleSubmitComment(param) {
    // console.log('handleSubmitComment param:', param);
    if (!param) return;
    if (!param.username) return alert('用户名不能为空!');
    if (!param.content) return alert('评论内容不能为空!');

    const commentsTemp = [...this.state.comments]; //浅拷贝
    commentsTemp.push(param);
    // console.log('handleSubmitComment this.state.comments:', this.state.comments);
    // console.log('handleSubmitComment commentsTemp:', commentsTemp);

    this._saveComments(JSON.stringify(commentsTemp));
    this.setState({ comments: commentsTemp });
  }
  render() {
    return (
      <div className='comment-app'>
        <CommentInput onSubmitComment={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentApp;
