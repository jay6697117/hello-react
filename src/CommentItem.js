import React, { Component } from 'react';
import './assets/style/comment-item.css';
import PropTypes from 'prop-types';

class CommentItem extends Component {
  _timer = null;

  static propTypes = {
    comment: PropTypes.object.isRequired,
    currentIndex: PropTypes.number,
    onDeleteComment: PropTypes.func
  };

  constructor() {
    super();
    this.state = {
      timeStr: ''
    };
  }

  componentWillMount() {
    // console.log('componentWillMount this._timer:', this._timer);
    this._updateTimeString();
    this._timer = setInterval(() => {
      this._updateTimeString();
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
    this._timer = null;
  }

  _updateTimeString() {
    const comment = { ...this.props.comment };
    const duration = (Date.now() - comment.createdTime) / 1000;
    this.setState({
      timeStr: duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`
    });
  }

  handleDeleteComment() {
    console.log('handleDeleteComment this.props', this.props);
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.currentIndex);
    }
  }

  _getProcessedContent(content) {
    return content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>');
  }

  render() {
    // console.log('CommentItem render this.props', this.props);
    console.log('返回值:', this._getProcessedContent(this.props.comment.content));
    return (
      <div className='comment-item'>
        <div className='comment-username'>{this.props.comment.username}:</div>
        {/* <div className='comment-content'>{this.props.comment.content}</div> */}
        <div
          className='comment-content'
          dangerouslySetInnerHTML={{ __html: this._getProcessedContent(this.props.comment.content) }}></div>
        <div className='comment-time-str'>{this.state.timeStr}</div>
        <button
          onClick={this.handleDeleteComment.bind(this)}
          style={{ height: '20px', marginLeft: '4px', padding: '0 4px' }}>
          删除
        </button>
      </div>
    );
  }
}

export default CommentItem;
