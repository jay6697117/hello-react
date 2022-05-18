import React, { Component } from 'react';
import './assets/style/layout.css';

class Layout extends Component {
  render() {
    console.log('this.props.children', this.props.children)
    return (
      <div className='two-cols-layout'>
        <div className='sidebar'>{this.props.children[0]}</div>
        <div className='main'>{this.props.children[1]}</div>
      </div>
    );
  }
}
export default Layout;
