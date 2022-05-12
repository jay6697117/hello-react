import React, { Component } from 'react';
import './assets/style/header.css';

class Header extends Component {
  constructor() {
    super();
    console.log('constructor 1');
    this.state = {
      dateNow: new Date().Format('yyyy-MM-dd hh:mm:ss'),
      timer: null
    };
  }
  componentWillMount() {
    console.log('component will mount 2');
  }
  componentDidMount() {
    console.log('component did mount 4');
    this.mySetInterval(() => {
      this.setState({
        dateNow: new Date().Format('yyyy-MM-dd hh:mm:ss')
      });
    }, 1000);
  }
  componentWillUnmount() {
    console.log('component will unmount 5');
    clearTimeout(this.state.timer);//清除定时器
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
  render() {
    console.log('render 3');
    return (
      <div className='header'>
        <h1 className='title'>当前时间:{this.state.dateNow}</h1>
      </div>
    );
  }
}

export default Header;
