import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    console.log('constructor 1');
  }
  componentWillMount() {
    console.log('component will mount 2');
  }
  componentDidMount() {
    console.log('component did mount 4');
  }
  componentWillUnmount() {
    console.log('component will unmount 5');
  }
  render() {
    console.log('render 3');
    return (
      <div>
        <h1 className='title'>React 小书</h1>
      </div>
    );
  }
}

export default Header;
