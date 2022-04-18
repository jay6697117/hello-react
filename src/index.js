import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import Header from './Header';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      showHeader: true
    };
  }
  handleShowOrHide() {
    this.setState({
      showHeader: !this.state.showHeader
    });
  }
  render() {
    return (
      <div>
        {this.state.showHeader ? <Header /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>显示或者隐藏标题</button>
      </div>
    );
  }
}

// ReactDOM.render(React.createElement(Index, null), document.getElementById('root'));
ReactDOM.render(<Index />, document.getElementById('root'));
