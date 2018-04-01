import React from 'react';
import Todo from './Todo';

const TodoList = ({
    todos,
    onTodoClick
}) => {
    if (!todos.length) {
        return (
            <div>
                No Todo
            </div>
        );
    }
    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            {...todo}
                            onClick={() => onTodoClick(todo.id)}
                        />
                    );
                })
            }
        </ul>
    );
};

export default TodoList;