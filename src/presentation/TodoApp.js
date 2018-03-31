import React from 'react';
import AddTodo from '../containers/AddTodo';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';

const TodoApp = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
};

export default TodoApp;