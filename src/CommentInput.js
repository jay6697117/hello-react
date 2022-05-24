import React, { Component } from 'react';
import './assets/style/comment-input.css';
import PropTypes from 'prop-types';
console.log('PropTypes:', PropTypes);

class CommentInput extends Component {
  static propTypes = {
    onSubmitComment: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      username: '',
      content: ''
    };
  }

  componentWillMount() {
    this._initCommentInput();
  }

  componentDidMount() {
    this.textareaDom.focus();
  }

  _initCommentInput() {
    const username = localStorage.getItem('USERNAME');
    const content = localStorage.getItem('CONTENT');
    if (username) {
      this.setState({
        username
      });
    }
    if (content) {
      this.setState({
        content
      });
    }
  }

  _saveUsername(username) {
    localStorage.setItem('USERNAME', username);
  }
  _saveContent(content) {
    localStorage.setItem('CONTENT', content);
  }

  handleUsernameChange(event) {
    console.log('handleUsernameChange event.target.value:', event.target.value);
    const username = event.target.value;
    this.setState({ username });
    this._saveUsername(username);
  }

  handleContentChange(event) {
    console.log('handleContentChange event.target.value:', event.target.value);
    const content = event.target.value;
    this.setState({ content });
    this._saveContent(content);
  }

  handleSubmit(event) {
    console.log('handleSubmit run');
    console.log('handleSubmit this.props:', this.props);
    if (this.props.onSubmitComment) {
      const { username, content } = this.state;
      const createdTime = new Date().getTime();
      this.props.onSubmitComment({ username, content, createdTime });
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
            <textarea
              ref={textareaDom => (this.textareaDom = textareaDom)}
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
            />
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
