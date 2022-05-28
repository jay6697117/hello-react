import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  };

  render() {
    console.log('Title this.context:', this.context);
    return <h1 style={{ color: this.context.themeColor }}>React.js 小书标题</h1>;
  }
}

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h2>This is header</h2>
        <Title />
      </div>
    );
  }
}

export default Header;
