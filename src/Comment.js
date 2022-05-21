import React, { Component } from 'react';
import './assets/style/card.css';
import PropTypes from 'prop-types';
console.log('PropTypes:', PropTypes);

class Comment extends Component {
  static propTypes = { comment: PropTypes.object.isRequired };

  render() {
    console.log('Comment render this.props:', this.props);
    const { comment } = this.props;
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username} </span>:
        </div>
        <p>{comment.content}</p>
      </div>
    );
  }
}

export default Comment;
