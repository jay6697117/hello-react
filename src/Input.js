import React, { Component } from 'react';
import Hoc from './Hoc'; //Hoc是一个函数
import PropTypes from 'prop-types';
// console.log('Input PropTypes:', PropTypes);

class Input extends Component {
  static propTypes = {
    data: PropTypes.string,
    onWrappedChange: PropTypes.func,
    onWrappedBlur: PropTypes.func
  };

  handleChange(e) {
    console.log('Input handleChange e.target.value:', e.target.value);
    const val = e.target.value;
    if (this.props.onWrappedChange) {
      this.props.onWrappedChange(val);
    }
  }

  handleBlur(e) {
    console.log('Input handleBlur e.target.value:', e.target.value);
    const val = e.target.value;
    if (this.props.onWrappedBlur) {
      this.props.onWrappedBlur(val);
    }
  }

  render() {
    console.log('Input this.props:', this.props);
    return (
      <input
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        value={this.props.data || ''}
      />
    );
  }
}

Input = Hoc(Input, 'USERNAME');
// console.log('Input:', Input);

export default Input;
