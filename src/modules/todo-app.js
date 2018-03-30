import todos from './todos';
import visibilityFilter from './visibility-filter';

const todoApp = (state = {}, action) => {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    };
};

export default todoApp;