import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import Header from './Header';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      isShowHeader: true
    };
  }
  handleShowOrHide() {
    this.setState({
      isShowHeader: !this.state.isShowHeader
    });
  }
  render() {
    return (
      <div>
        {this.state.isShowHeader ? <Header /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>显示或者隐藏标题</button>
      </div>
    );
  }
}

// ReactDOM.render(React.createElement(Header, null), document.getElementById('root'));
ReactDOM.render(<Index />, document.getElementById('root'));
