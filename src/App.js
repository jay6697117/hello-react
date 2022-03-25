import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/style/App.css';

class Title extends Component {
  handleTitleClick(val, e) {
    console.log('handleTitleClick val:', val);
    console.log('handleTitleClick this:', this);
    console.log('handleTitleClick e:', e);
    console.log('handleTitleClick 输出:', e.target.innerHTML);
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

class LikeButton extends Component {
  static defaultProps = { likedText: '取消', unLikedText: '点赞' };
  // constructor(props) {
  // console.log('LikeButton constructor props:', props);
  // super(props);
  constructor() {
    super();
    console.log('LikeButton constructor this.props:', this.props);
    this.state = { name: '张金辉', age: 34, isLiked: false };
  }
  async handleClickLikeButton(val, e) {
    console.log('handleClickOnLikeButton val:', val);
    console.log('handleClickOnLikeButton e:', e);
    console.log('handleClickOnLikeButton this.state.isLiked 000:', this.state.isLiked);
    // await this.setState({
    //   isLiked: !this.state.isLiked
    // });
    this.setState(
      {
        isLiked: !this.state.isLiked
      },
      () => {
        console.log('handleClickOnLikeButton this.state.isLiked 111:', this.state.isLiked);
        if (this.props.onClick) {
          console.log('isLiked改变后的值:', this.props.onClick(this.state.isLiked));
        }
      }
    );
    console.log('handleClickOnLikeButton this.state.isLiked 222:', this.state.isLiked);
  }
  render() {
    console.log('LikeButton render this.props:', this.props);
    const likeBtnClass = this.state.isLiked ? 'like-btn like-btn-cancel' : 'like-btn like-btn-yes';
    return (
      <div className={likeBtnClass} onClick={this.handleClickLikeButton.bind(this, 'hello LikeButton')}>
        {JSON.stringify(this.state.isLiked)} - {this.state.isLiked ? this.props.likedText : this.props.unLikedText} 👍
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
        <div className='func'>
          {this.renderBl(bl, btn1, btn2)}
          {/* <LikeButton likedText='已赞' unLikedText='赞' onClick={param => param} /> */}
          <LikeButton />
        </div>
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
