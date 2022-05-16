import React, { Component } from 'react';
import './assets/style/autoFocusInput.css';

class AutoFocusInput extends Component {
  constructor() {
    super();
    console.log('AutoFocusInput constructor 1');
  }
  componentWillMount() {
    console.log('AutoFocusInput componentWillMount this.input:', this.input); //undefined
  }
  componentDidMount() {
    console.log('AutoFocusInput componentDidMount this.input:', this.input);
    console.log('AutoFocusInput componentDidMount this.autoFocusInput.clientHeight:', this.autoFocusInput.clientHeight);

    this.input.focus();
    this.timer = setTimeout(() => {
      console.log('blur run');
      this.input.blur();
    }, 5000);
  }
  // 组件从页面上销毁的时候，有时候需要一些数据的清理，例如定时器的清理，就会放在 componentWillUnmount 里面去做
  componentWillUnmount() {
    console.log('Clock component will unmount 5');
    clearTimeout(this.timer); //清除定时器
  }
  render() {
    return (
      <div className='autoFocusInput' ref={autoFocusInput => (this.autoFocusInput = autoFocusInput)}>
        <input ref={input => (this.input = input)} />
      </div>
    );
  }
}

export default AutoFocusInput;
