import { createStore } from 'redux';
import todos from './modules/todos';

const store = createStore(todos);


export default store;