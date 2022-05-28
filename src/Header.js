import React, { Component } from 'react';

class Title extends Component {
  render() {
    return <h1>React.js 小书标题</h1>;
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h2>This is header</h2>
        <Title />
      </div>
    );
  }
}

export default Header;
