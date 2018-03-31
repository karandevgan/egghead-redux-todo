import React, { Component } from 'react';
import TodoApp from './containers/TodoApp';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TodoApp
          visibilityFilter={store.getState().visibilityFilter}
        />
      </div>
    );
  }
}

export default App;