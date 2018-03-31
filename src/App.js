import React, { Component } from 'react';
import TodoApp from './presentation/TodoApp';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

export default App;