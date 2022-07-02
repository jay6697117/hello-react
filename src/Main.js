import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div>
        <p>React.js 小书内容 666</p>
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <p>This is main</p>
        <Content />
      </div>
    );
  }
}

export default Main;
