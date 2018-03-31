import React, { Component } from 'react';
import TodoApp from './containers/Todo-App';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TodoApp todos={store.getState().todos} />
      </div>
    );
  }
}

export default App;
