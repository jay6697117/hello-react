import React, { Component } from 'react';
import './assets/style/clock.css';

class Clock extends Component {
  constructor() {
    super();
    console.log('Clock constructor 1');
    // 一般会把组件的 state 的初始化工作放在 constructor 里面去做
    this.state = {
      dateNow: new Date().Format('yyyy-MM-dd hh:mm:ss'),
      timer: null
    };
  }
  // 在 componentWillMount 进行组件的启动工作，例如 Ajax 数据拉取、定时器的启动
  componentWillMount() {
    console.log('Clock component will mount 2');

    //异步定时器
    this.mySetInterval(() => {
      this.setState({
        dateNow: new Date().Format('yyyy-MM-dd hh:mm:ss')
      });
    }, 1000);
  }
  // 一般来说，有些组件的启动工作是依赖 DOM 的，例如动画的启动，而 componentWillMount 的时候组件还没挂载完成，所以没法进行这些启动工作，这时候就可以把这些操作放在 componentDidMount 当中
  componentDidMount() {
    console.log('Clock component did mount 4');
    console.log('Clock this.clock:', this.clock);
    console.log('Clock this.clock.clientHeight:', this.clock.clientHeight)
  }
  // 组件从页面上销毁的时候，有时候需要一些数据的清理，例如定时器的清理，就会放在 componentWillUnmount 里面去做
  componentWillUnmount() {
    console.log('Clock component will unmount 5');
    clearTimeout(this.state.timer); //清除定时器
    this.setState = () => false;
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
    // console.log('Clock render 3');
    return (
      <div className='clock' ref={clock => (this.clock = clock)}>
        <h1 className='time'>当前时间:{this.state.dateNow}</h1>
      </div>
    );
  }
}

export default Clock;
