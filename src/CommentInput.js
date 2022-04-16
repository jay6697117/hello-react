import React, { Component } from 'react';
import './assets/style/comment-input.css';

class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      content: ''
    };
  }

  handleUsernameChange(event) {
    console.log('handleUsernameChange event.target.value:', event.target.value);
    this.setState({
      username: event.target.value
    });
  }

  handleContentChange(event) {
    console.log('handleContentChange event.target.value:', event.target.value);
    this.setState({
      content: event.target.value
    });
  }

  handleSubmit(event) {
    console.log('handleSubmit run');
    console.log('handleSubmit this.props:', this.props);
    if (this.props.onSubmitComment) {
      const { username, content } = this.state;
      this.props.onSubmitComment({ username, content });
      this.setState({
        content: ''
      });
    }
  }

  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <div className='comment-field-label'>用户名:</div>
          <div className='comment-field-input'>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <div className='comment-field-label'>评论内容:</div>
          <div className='comment-field-input'>
            <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
