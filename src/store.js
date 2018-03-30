import { createStore, combineReducers } from 'redux';
import todos from './modules/todos';
import visibilityFilter from './modules/visibility-filter';

const todoApp = combineReducers({
    todos,
    visibilityFilter
});


const store = createStore(todoApp);


export default store;