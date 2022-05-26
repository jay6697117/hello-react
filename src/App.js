import React, { Component } from 'react';
import './assets/style/app.css';
import Hoc from './Hoc'; //Hoc是一个函数
import PropTypes from 'prop-types';
console.log('PropTypes:', PropTypes);

class App extends Component {
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

App = Hoc(App, 'username');

console.log('App 1:', App);

export default App;
