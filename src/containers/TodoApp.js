import React, { PureComponent } from 'react';
import AddTodo from '../presentation/AddTodo';
import TodoList from '../presentation/TodoList';
import Footer from '../presentation/Footer';
import store from '../store';

let nextToDoId = 0;

export default class TodoApp extends PureComponent {

    constructor(props) {
        super(props);
        this.addTodoClickHandler = this.addTodoClickHandler.bind(this);
        this.toggleTodoClickHandler = this.toggleTodoClickHandler.bind(this);
        this.getVisibleTodos = this.getVisibleTodos.bind(this);
        this.filterLinkClickHandler = this.filterLinkClickHandler.bind(this);
    };

    getVisibleTodos = (todos, filter) => {
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

    filterLinkClickHandler = (filter) => {
        store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
        });
    };

    addTodoClickHandler(value) {
        if (value) {
            store.dispatch({
                type: 'ADD_TODO',
                text: value,
                id: nextToDoId++
            });
        }
    };

    toggleTodoClickHandler(id) {
        store.dispatch({
            type: 'TOGGLE_TODO',
            id
        });
    };

    render() {
        const { todos, visibilityFilter } = this.props;
        const visibleTodos = this.getVisibleTodos(todos, visibilityFilter);
        return (
            <div>
                <AddTodo
                    onAddClick={this.addTodoClickHandler}
                />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={this.toggleTodoClickHandler}
                />
                <Footer
                    visibilityFilter={visibilityFilter}
                    filterLinkClick={this.filterLinkClickHandler}
                />
            </div >
        );
    };
}