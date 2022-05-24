import React, { Component } from 'react';
import './assets/style/comment-item.css';
import PropTypes from 'prop-types';

class CommentItem extends Component {
  _timer = null;

  static propTypes = {
    comment: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      timeStr: ''
    };
  }

  componentWillMount() {
    console.log('this._timer', this._timer);
    this._updateTimeString();
    this._timer = setInterval(() => {
      this._updateTimeString();
    }, 5000);
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

  render() {
    console.log('CommentItem render this.props', this.props);
    return (
      <div className='comment-item'>
        <div className='comment-username'>{this.props.comment.username}:</div>
        <div className='comment-content'>{this.props.comment.content}</div>
        <div className='comment-time-str'>{this.state.timeStr}</div>
      </div>
    );
  }
}

export default CommentItem;
