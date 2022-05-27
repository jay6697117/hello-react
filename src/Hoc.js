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
          });

        console.log('info:', info);
        if (info.id) {
          this.setState({ info });
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

    handleWrappedBlur(val) {
      console.log('Hoc handleWrappedBlur val:', val);
      const data = val;
      this.setState({ data });
      this._asyncInit(data);
    }

    render() {
      // 渲染的时候再通过 props.data 传给WrappedComponent
      // console.log('Hoc this.props:', this.props);
      return (
        <div className='hoc'>
          <div className='name'>
            搜索用户名:{' '}
            <WrappedComponent
              onWrappedBlur={this.handleWrappedBlur.bind(this)}
              data={this.state.data}
            />
          </div>
          <div className='info'>用户信息:{JSON.stringify(this.state.info)}</div>
          <hr />
        </div>
      );
    }
  }
  return NewComponent;
};

export default Hoc;
