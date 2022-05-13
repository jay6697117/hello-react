import React, { Component } from 'react';
import './assets/style/header.css';

class Header extends Component {
  constructor() {
    super();
    console.log('constructor 1');
    this.state = {
      dateNow: new Date().Format('yyyy-MM-dd hh:mm:ss'),
      timer: null,
      result: null
    };
  }
  async componentWillMount() {
    console.log('component will mount 2');
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

    //异步处理
    this.mySetInterval(() => {
      this.setState({
        dateNow: new Date().Format('yyyy-MM-dd hh:mm:ss')
      });
    }, 1000);
  }
  componentDidMount() {
    console.log('component did mount 4');
  }
  componentWillUnmount() {
    console.log('component will unmount 5');
    clearTimeout(this.state.timer); //清除定时器
    //设置timer 为 null
    this.setState({
      timer: null
    });
  }
  mySetInterval(callback, delay) {
    const rec = (callback, delay) => {
      const timer = setTimeout(() => {
        callback(); // 执行callback
        rec(callback, delay); // 递归
      }, delay);
      this.setState({
        timer
      });
    };
    rec(callback, delay);
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
        <h1 className='title'>当前时间:{this.state.dateNow}</h1>
        <div>{this.listHandle(this.state.result)}</div>
      </div>
    );
  }
}

export default Header;
