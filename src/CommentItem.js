import React, { Component } from 'react';
import './assets/style/comment-item.css';
import PropTypes from 'prop-types';

class CommentItem extends Component {
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
    this._updateTimeString();
  }

  _updateTimeString() {
    const comment = { ...this.props.comment };
    // console.log('_updateTimeString comment', comment);
    const duration = (new Date().getTime() - comment.createdTime) / 1000;
    // console.log('_updateTimeString duration', duration);
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
