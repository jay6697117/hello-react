import React, { Component } from 'react';
import Hoc from './Hoc'; //Hoc是一个函数
import PropTypes from 'prop-types';
console.log('PropTypes:', PropTypes);

class Input extends Component {
  static propTypes = {
    data: PropTypes.string
  };

  handleChange(e) {
    console.log('handleChange e.target.value:', e.target.value);
    const val = e.target.value;
    if (this.props.onWrappedChange) {
      this.props.onWrappedChange(val);
    }
  }

  render() {
    console.log('App this.props:', this.props);
    return <input onChange={this.handleChange.bind(this)} value={this.props.data || ''} />;
  }
}

Input = Hoc(Input, 'USERNAME');
console.log('Input:', Input);

export default Input;
