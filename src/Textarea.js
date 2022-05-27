import React, { Component } from 'react';
import Hoc from './Hoc'; //Hoc是一个函数
import PropTypes from 'prop-types';
// console.log('Textarea PropTypes:', PropTypes);

class Textarea extends Component {
  static propTypes = {
    data: PropTypes.string,
    onWrappedBlur: PropTypes.func
  };

  handleBlur(e) {
    console.log('Textarea handleBlur e.target.value:', e.target.value);
    const val = e.target.value;
    if (this.props.onWrappedBlur) {
      this.props.onWrappedBlur(val);
    }
  }

  render() {
    console.log('Textarea this.props:', this.props);
    return (
      <textarea
        onBlur={this.handleBlur.bind(this)}
        value={this.props.data || ''}
        cols='30'
        rows='5'
      />
    );
  }
}

Textarea = Hoc(Textarea, 'CONTENT');
// console.log('Textarea:', Textarea);

export default Textarea;
