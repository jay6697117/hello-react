import React, { Component } from 'react';
import './assets/style/hoc.css';

const Hoc = (WrappedComponent, name) => {
  //新组件NewComponent
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        data: null
      };
    }

    componentWillMount() {
      this._initData();
    }

    _initData() {
      // 新组件挂载前会先去 localStorage 加载数据
      let data = localStorage.getItem(name);
      if (data) {
        this.setState({ data });
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

    render() {
      // 渲染的时候再通过 props.data 传给WrappedComponent
      console.log('Hoc this.props:', this.props);
      return (
        <div className='hoc'>
          用户名: <WrappedComponent onWrappedChange={this.handleWrappedChange.bind(this)} data={this.state.data} />
        </div>
      );
    }
  }
  return NewComponent;
};

export default Hoc;
