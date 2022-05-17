import React, { Component } from 'react';
import './assets/style/card.css';

class Card extends Component {
  render () {
    return (
      <div className='card'>
        <div className='card-content'>
          {this.props.content}
        </div>
      </div>
    )
  }
}

export default Card;
