import React, { Component } from 'react';
import './assets/style/card.css';

class Card extends Component {
  componentWillMount() {
    // console.log('Card this.props:', this.props);
  }
  render() {
    const children = this.props.children ? [].concat(this.props.children) : [];
    const cardClassName = children.length > 0 ? 'card' : '';
    return (
      <div className={cardClassName}>
        {children.map((item, index) => {
          return (
            <div className='card-content' key={index}>
              {item}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
