import React, { Component } from 'react';
import './assets/style/app.css';
import Header from './Header';
import Main from './Main';
import PropTypes from 'prop-types';

class App extends Component {
  _timer = null;

  // childContextTypes 作用跟 propTypes 验证组件 props 参数的作用类似
  static childContextTypes = {
    themeColor: PropTypes.string
  };

  constructor() {
    super();
    // console.log('this._timer 0:', this._timer);
    this.state = {
      themeColor: 'red'
    };
  }

  componentWillMount() {
    // console.log('this._timer 1:', this._timer);
    this._timer = setTimeout(() => {
      this.setState({
        themeColor: 'blue'
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
    this._timer = null;
  }

  getChildContext() {
    return { themeColor: this.state.themeColor };
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
