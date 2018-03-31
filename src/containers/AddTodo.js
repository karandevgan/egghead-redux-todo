import React from 'react';
import { connect } from 'react-redux';

let nextToDoId = 0;

const addTodoClick = (dispatch, value) => {
    if (value) {
        dispatch({
            type: 'ADD_TODO',
            text: value,
            id: nextToDoId++
        });
    }
};

let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input
                type="text"
                ref={node => {
                    input = node;
                }}
            />
            <button
                onClick={() => {
                    addTodoClick(dispatch, input.value)
                    input.value = '';
                }}
            >
                Add Todo
            </button>
        </div>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;