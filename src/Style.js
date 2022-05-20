import React, { Component } from 'react';

class Style extends Component {
  constructor() {
    super();
    this.state = {
      content: '<h1 style="color:blue;background-color:red;padding:10px 0;">hello world</h1>',
      commonStyle: { color: 'white', fontSize: '30px', textAlign: 'center', padding: '10px 0' },
      backgroundColor: 'green',
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
    }, 50);
  }
  componentWillUnmount() {
    this.setState = () => false;
  }
  handleClick() {
    const colorArr = ['green', 'purple', 'blue', 'red', 'cyan'];
    const random = Math.floor(Math.random() * 5); // 0-4
    console.log('random', random);
    this.setState({
      backgroundColor: colorArr[random],
      opacity: 0
    });
  }

  render() {
    return (
      <div className='style'>
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

export default Style;
