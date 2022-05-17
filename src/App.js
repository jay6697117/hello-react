import React, { Component } from 'react';
import './assets/style/app.css';
import Card from './Card';

class App extends Component {
  render() {
    const dom = (
      <div className='content'>
        <h2>React.js 小书</h2>
        <div>开源、免费、专业、简单</div>
        <div>
          订阅: <input />
        </div>
      </div>
    );
    return <Card content={dom} />;
  }
}

export default App;
