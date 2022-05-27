import React, { Component } from 'react';
import './assets/style/hoc.css';

const Hoc = (WrappedComponent, name) => {
  //新组件NewComponent
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        data: null,
        info: null
      };
    }

    componentWillMount() {
      this._initData();
    }

    async _asyncInit(username) {
      try {
        const info = await fetch(`https://api.github.com/users/${username}`)
          .then(response => {
            return response.json();
          })
          .then(result => {
            return result;
          })
          .then(res => {
            console.log('res:', res);
            return {
              id: res.id,
              name: res.name,
              login: res.login,
              location: res.location,
              blog: res.blog,
              avatar_url: res.avatar_url
            };
          });

        console.log('info:', info);

        if (info.id) {
          this.setState({ info });
        } else {
          this.setState({ info: null });
        }
      } catch (error) {
        console.log('_asyncInit error:', error);
      }
    }

    _initData() {
      // 新组件挂载前会先去 localStorage 加载数据
      let data = localStorage.getItem(name);
      if (data) {
        this.setState({ data });
        this._asyncInit(data);
      }
    }

    _saveData(data) {
      localStorage.setItem(name, data);
    }

    handleWrappedChange(val) {
      console.log('Hoc handleWrappedChange val:', val);
      const data = val;
      this.setState({ data });
      this._saveData(data);
    }

    handleWrappedBlur(val) {
      console.log('Hoc handleWrappedBlur val:', val);
      this._asyncInit(val);
    }

    render() {
      // 渲染的时候再通过 props.data 传给WrappedComponent
      // console.log('Hoc this.props:', this.props);
      return (
        <div className='hoc'>
          <div className='name'>
            搜索用户名:{' '}
            <WrappedComponent
              onWrappedChange={this.handleWrappedChange.bind(this)}
              onWrappedBlur={this.handleWrappedBlur.bind(this)}
              data={this.state.data}
            />
          </div>
          <div className='info'>
            <div>用户信息:</div>
            <div style={{ backgroundColor: '#ccc', padding: '10px' }}>
              <div style={{ marginBottom: '10px' }}>
                {this.state.info ? JSON.stringify(this.state.info) : '--默认内容--'}
              </div>
              <img
                style={{ borderRadius: '50%' }}
                src={
                  this.state.info
                    ? this.state.info.avatar_url
                    : 'https://s0.lgstatic.com/i/image2/M01/14/FB/CgoB5lyrcBGAFyGsAAGmQ6jLb7I829.png'
                }
                alt='avatar'
                width='100'
              />
            </div>
          </div>
          <hr />
        </div>
      );
    }
  }
  return NewComponent;
};

export default Hoc;
