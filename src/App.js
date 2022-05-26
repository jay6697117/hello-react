import React, { Component } from 'react';
import './assets/style/app.css';
import Input from './Input';
import Textarea from './Textarea';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Input />
        <Textarea />
      </div>
    );
  }
}

export default App;
