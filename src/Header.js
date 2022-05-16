import React, { Component } from 'react';
import Clock from './Clock';
import AutoFocusInput from './AutoFocusInput';
import './assets/style/header.css';

class Header extends Component {
  constructor() {
    super();
    console.log('Header constructor 1');
    this.state = {
      result: null
    };
  }
  componentWillMount() {
    console.log('Header component will mount 2');
    //异步处理
    this.apiFn();
  }
  componentDidMount() {
    console.log('Header component did mount 4');
    console.log('this.clock:', this.clock);
    console.log('this.autoFocusInput:', this.autoFocusInput);
  }
  componentWillUnmount() {
    console.log('Header component will unmount 5');
    this.setState = () => false;
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
    // console.log('Header render 3');
    return (
      <div className='header'>
        <AutoFocusInput ref={autoFocusInput => (this.autoFocusInput = autoFocusInput)} />
        <Clock ref={clock => (this.clock = clock)} />
        <div className='list'>{this.listHandle(this.state.result)}</div>
      </div>
    );
  }
}

export default Header;
