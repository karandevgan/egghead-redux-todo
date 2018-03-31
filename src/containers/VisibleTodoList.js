import { connect } from 'react-redux';
import TodoList from '../presentation/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter((t) => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter((t) => !t.completed);
        default:
            return todos;
    }
};

const onTodoClick = (dispatch, id) => {
    dispatch({
        type: 'TOGGLE_TODO',
        id
    });
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => onTodoClick(dispatch, id)
    };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;