import addTodo from '../actions/addTodo';
import AddTodoForm from '../presentation/AddTodoForm';
import { connect } from 'react-redux';


const addTodoSubmit = (dispatch, value) => {
    if (value) {
        dispatch(addTodo(value));
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (value) => {
            addTodoSubmit(dispatch, value);
        }
    };
};

const AddTodo = connect(null, mapDispatchToProps)(AddTodoForm);

export default AddTodo;