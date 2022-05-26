import React, { Component } from 'react';

const HocFn = WrappedComponent => {
  class NewComponent extends Component {
    // 可以做很多自定义逻辑
    render() {
      return <WrappedComponent />;
    }
  }
  return NewComponent;
};

export default HocFn;
