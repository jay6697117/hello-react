import React, { Component } from 'react';
import './assets/style/app.css';
// import Card from './Card';
// import Layout from './Layout';

/*
class App extends Component {
  render() {
    return (
      <div>
        <Card>
          <h2>React.js 小书 - children</h2>
          123456
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
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: '<h1 style="color:blue;background-color:red;">hello world</h1>',
      commonStyle: { color: 'red', fontSize: '30px', textAlign: 'center' },
      backgroundColor: 'blue',
      opacity: 0
    };
  }
  componentDidMount() {
    setInterval(() => {
      const opacity = this.state.opacity + 0.01;
      if (opacity > 1) {
        this.setState({
          opacity: 1
        });
        return;
      }
      this.setState({
        opacity
      });
    }, 20);
  }
  componentWillUnmount() {
    this.setState = () => false;
  }
  handleClick() {
    this.setState({
      backgroundColor: 'green',
      opacity: 0
    });
  }

  render() {
    return (
      <div>
        <button style={{ marginBottom: '20px', padding: '2px 10px' }} onClick={this.handleClick.bind(this)}>
          点击
        </button>
        <div style={{ marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
        <div
          style={{
            ...this.state.commonStyle,
            backgroundColor: this.state.backgroundColor,
            opacity: this.state.opacity
          }}>
          大家好啊
        </div>
      </div>
    );
  }
}

export default App;
