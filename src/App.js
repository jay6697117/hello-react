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

    // this.props.likedText = '啦啦啦';
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
    const likeBtnClass = !this.state.isLiked ? 'like-btn like-btn-cancel' : 'like-btn like-btn-yes';
    return (
      <div className={likeBtnClass} onClick={this.handleClickLikeButton.bind(this, 'hello LikeButton')}>
        {JSON.stringify(this.state.isLiked)} - {this.state.isLiked ? this.props.likedText : this.props.unLikedText} 👍
      </div>
    );
  }
}

class Header extends Component {
  constructor() {
    super();
    this.state = { likedText: '取消1', unLikedText: '点赞1' };
  }
  handleHeaderBtnClick() {
    console.log('handleHeaderBtnClick run');
    this.setState({ likedText: '已赞2', unLikedText: '未赞2' });
  }
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
          <LikeButton likedText={this.state.likedText} unLikedText={this.state.unLikedText} onClick={param => param} />
          {/* <LikeButton /> */}
          <button style={{ marginLeft: '10px', padding: '2px 10px' }} onClick={this.handleHeaderBtnClick.bind(this)}>
            点击改变
          </button>
        </div>
      </div>
    );
  }
}

// class Main extends Component {
//   render() {
//     return <div className='main'>This is Main ...</div>;
//   }
// }
// function Main() {
//   return <div className='main'>This is Main ...</div>;
// }
const Main = props => {
  console.log('Main sayHi props 0:', props);
  const sayHi = (val, e) => {
    console.log('Main sayHi e:', e);
    console.log('Main sayHi props 1:', props);
    alert(`${val} Main...`);
  };
  return (
    <div onClick={sayHi.bind(null, 'hello 666 ')} className='main'>
      This is Main ...
    </div>
  );
};

// class Footer extends Component {
//   render() {
//     return <div className='footer'>This is Footer content ...</div>;
//   }
// }
// function Footer() {
//   return <div className='footer'>This is Footer content ...</div>;
// }
const Footer = function () {
  return <div className='footer'>This is Footer content ...</div>;
};

class Users extends Component {
  render() {
    console.log('Users this.props', this.props);
    // const usersElements = [];
    // for (const item of this.props.users) {
    //   usersElements.push(
    //     <div className='user' key={item.id}>
    //       <div>username:{item.username}</div>
    //       <div>age:{item.age}</div>
    //       <div>gender:{item.gender}</div>
    //     </div>
    //   );
    // }
    const users = this.props.users || [];
    return (
      <div className='users0'>
        {/* {[
          <div className='user' key='1'>
            username:zjh
          </div>,
          <div className='user' key='2'>
            age:32
          </div>,
          <div className='user' key='3'>
            gender:男
          </div>
        ]} */}
        {/* {usersElements} */}
        {users.map(item => {
          return (
            <div className='user' key={item.id}>
              <div>username:{item.username}</div>
              <div>age:{item.age}</div>
              <div>gender:{item.gender}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

class User extends Component {
  render() {
    const user = this.props.user;
    console.log('User render user:', user);
    if (!user) return null;
    return (
      <div className='user'>
        <div>username:{user.username || ''}</div>
        <div>age:{user.age || ''}</div>
        <div>gender:{user.gender || ''}</div>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: 1, username: 'Jerry', age: 21, gender: 'male' },
        { id: 2, username: 'Tomy', age: 22, gender: 'male' },
        { id: 3, username: 'Lily', age: 19, gender: 'female' },
        { id: 4, username: 'Lucy', age: 20, gender: 'female' }
      ]
    };
  }
  render() {
    return (
      <div className='app'>
        <Users users={this.state.users} />
        <div className='users1'>
          {this.state.users.map((user, i) => (
            <User key={user.id} user={user} />
          ))}
        </div>

        <User />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
