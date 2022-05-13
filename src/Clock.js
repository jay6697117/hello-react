import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    console.log('constructor 1');
    this.state = {
      dateNow: new Date().Format('yyyy-MM-dd hh:mm:ss'),
      timer: null
    };
  }
  async componentWillMount() {
    console.log('component will mount 2');

    //异步定时器
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
  render() {
    console.log('render 3');
    return (
      <div className='clock'>
        <h1 className='time'>当前时间:{this.state.dateNow}</h1>
      </div>
    );
  }
}

export default Clock;
