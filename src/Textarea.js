import React, { Component } from 'react';
import Hoc from './Hoc'; //Hoc是一个函数
import PropTypes from 'prop-types';
// console.log('Textarea PropTypes:', PropTypes);

class Textarea extends Component {
  static propTypes = {
    data: PropTypes.string,
    onWrappedChange:PropTypes.func
  };

  handleChange(e) {
    console.log('Textarea handleChange e.target.value:', e.target.value);
    const val = e.target.value;
    if (this.props.onWrappedChange) {
      this.props.onWrappedChange(val);
    }
  }

  render() {
    console.log('Textarea this.props:', this.props);
    return <textarea onChange={this.handleChange.bind(this)} value={this.props.data || ''} cols='30' rows='5' />;
  }
}

Textarea = Hoc(Textarea, 'CONTENT');
console.log('Textarea:', Textarea);

export default Textarea;
