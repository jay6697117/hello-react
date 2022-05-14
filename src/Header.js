import React, { Component } from 'react';
import './assets/style/header.css';
import Clock from './Clock';

class Header extends Component {
  constructor() {
    super();
    console.log('constructor 1');
    this.state = {
      result: null
    };
  }
  componentWillMount() {
    console.log('component will mount 2');
    this.apiFn();
  }
  componentDidMount() {
    console.log('component did mount 4');
  }
  componentWillUnmount() {
    console.log('component will unmount 5');
  }
  async apiFn() {
    //异步处理
    let result = null;
    let response = await fetch('https://json-server-demo-rho.vercel.app/companies');
    if (response.ok) {
      // 如果 HTTP 状态码为 200-299
      // 获取 response body（此方法会在下面解释）
      result = await response.json();
    } else {
      alert('HTTP-Error: ' + response.status);
    }
    console.log('result', result);
    this.setState({
      result
    });
  }
  listHandle(arr) {
    if (arr && arr.length > 0) {
      const listArr = arr.map(item => {
        return <div key={item.id}>{item.name}</div>;
      });
      return listArr;
    } else {
      return null;
    }
  }
  render() {
    console.log('render 3');
    return (
      <div className='header'>
        <Clock />
        {this.listHandle(this.state.result)}
      </div>
    );
  }
}

export default Header;
