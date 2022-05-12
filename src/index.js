import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/style/base.css';
import './assets/style/index.css';
import Header from './Header';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      showHeader: false
    };
  }
  handleShowOrHide() {
    const showHeader = !this.state.showHeader;
    this.setState({
      showHeader
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

// ReactDOM.render(React.createElement(Index, null), document.getElementById('root'));
ReactDOM.render(<Index />, document.getElementById('root'));
