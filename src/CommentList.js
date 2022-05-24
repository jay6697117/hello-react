import React, { Component } from 'react';
import './assets/style/comment-list.css';
import CommentItem from './CommentItem';
import PropTypes from 'prop-types';

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired
  };

  static defaultProps = {
    comments: []
  };
  render() {
    console.log('CommentList render this.props.comments:', this.props.comments);

    const listDom = (
      <div className='comment-list'>
        {this.props.comments.map((item, index) => {
          return <CommentItem comment={item} key={index} />;
        })}
      </div>
    );
    return Array.isArray(this.props.comments) && this.props.comments.length > 0 ? listDom : null;
  }
}

export default CommentList;
