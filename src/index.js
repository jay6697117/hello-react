import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import './assets/style/common.css';
import './assets/style/index.css';
import './utils/date';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      showHeader: false
    };
  }
  handleShowOrHide() {
    this.setState({
      showHeader: !this.state.showHeader
    });
  }
  render() {
    return (
      <div className='index'>
        {this.state.showHeader ? <Header /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>{this.state.showHeader ? '隐藏' : '显示'}Header</button>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
