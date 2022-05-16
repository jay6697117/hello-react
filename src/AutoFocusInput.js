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
    console.log('AutoFocusInput componentDidMount this.divDom:', this.divDom);

    this.input.focus();
    setTimeout(() => {
      console.log('blur run');
      this.input.blur();
    }, 5000);
  }
  render() {
    return (
      <div className='autoFocusInput' ref={divDom => (this.divDom = divDom)}>
        <input ref={input => (this.input = input)} />
      </div>
    );
  }
}

export default AutoFocusInput;
