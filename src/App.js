import { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/style/App.css';

class Title extends Component {
  handleTitleClick(val, e) {
    console.log('val:', val);
    console.log('this:', this);
    console.log('e:', e);
    console.log('输出:', e.target.innerHTML);
  }
  render() {
    return (
      <div className='title'>
        <h1 onClick={this.handleTitleClick.bind(this, 'hello')} className='title-text'>
          React小书
        </h1>
        <img src={logo} className='logo' alt='logo' />
      </div>
    );
  }
}

class Header extends Component {
  renderBl(bool, dom1, dom2) {
    return bool ? dom1 : dom2;
  }
  render() {
    const msg = '太棒了';
    const foo = () => {
      return '123';
    };
    const cn = 'h2-tag';
    const bl = Math.floor(Math.random() * 2);
    const btn1 = <div className='btn'>{bl ? '真的' : null}</div>;
    const btn2 = <div className='btn'>{!bl ? '假的' : null}</div>;
    return (
      <div className='header'>
        <Title />
        <Title />
        <h2 className={cn}>
          这本React学习小书 - {msg} - {foo()}
        </h2>
        <div className='func'>{this.renderBl(bl, btn1, btn2)}</div>
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return <div className='main'>This is Main ...</div>;
  }
}
class Footer extends Component {
  render() {
    return <div className='footer'>This is Footer content ...</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
