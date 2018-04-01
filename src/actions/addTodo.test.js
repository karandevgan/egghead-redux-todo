import addTodo from './addTodo';

it('should return todos with incremental ids', () => {
    const todo_first_actual = addTodo('Test Todo 1');
    const todo_second_actual = addTodo('Test Todo 2');
    const todo_first_expected = {
        id: 0,
        text: 'Test Todo 1',
        type: 'ADD_TODO'
    };
    const todo_second_expected = {
        id: 1,
        text: 'Test Todo 2',
        type: 'ADD_TODO'
    };
    expect(todo_first_actual).toEqual(todo_first_expected);
    expect(todo_second_actual).toEqual(todo_second_expected);
});