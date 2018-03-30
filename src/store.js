import { createStore } from 'redux';
import todo from './modules/todos';
import todoApp from './modules/todo-app';


const store = createStore(todoApp);


export default store;