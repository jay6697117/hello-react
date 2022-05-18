import React, { Component } from 'react';
import './assets/style/app.css';
import Card from './Card';
import Layout from './Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Card>
          <h2>React.js 小书 - children</h2>
          <div>开源、免费、专业、简单</div>
          <div>
            订阅: <input />
          </div>
        </Card>
        <div style={{ height: '1px', margin: '20px 0', backgroundColor: '#ccc' }}></div>
        <Layout>
          <div className='content1'>
            <div className='content1-item'>111</div>
            <div className='content1-item'>222</div>
            <div className='content1-item'>333</div>
            <div className='content1-item'>111</div>
            <div className='content1-item'>222</div>
            <div className='content1-item'>333</div>
            <div className='content1-item'>111</div>
            <div className='content1-item'>222</div>
            <div className='content1-item'>333</div>
            <div className='content1-item'>111</div>
            <div className='content1-item'>222</div>
            <div className='content1-item'>333</div>
          </div>
          <div className='content2'>
            <h1>我是内容啦啦啦啦啦啦</h1>
            <h1>我是内容啦啦啦啦啦啦</h1>
            <h1>我是内容啦啦啦啦啦啦</h1>
            <h1>我是内容啦啦啦啦啦啦</h1>
            <h1>我是内容啦啦啦啦啦啦</h1>
            <h1>我是内容啦啦啦啦啦啦</h1>
            <h1>我是内容啦啦啦啦啦啦</h1>
            <h1>我是内容啦啦啦啦啦啦</h1>
            <h1>我是内容啦啦啦啦啦啦</h1>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
