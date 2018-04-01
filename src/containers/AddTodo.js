import React from 'react';
import addTodo from '../actions/addTodo';
import { connect } from 'react-redux';

let nextToDoId = 0;

const addTodoClick = (dispatch, value) => {
    if (value) {
        dispatch(addTodo(value));
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