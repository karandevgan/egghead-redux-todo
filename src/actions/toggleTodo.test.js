import toggleTodo from './toggleTodo';

it('should return toggle todo JSON object for dispatcher successfully', () => {
    const actual = toggleTodo(1);
    const expected = {
        id: 1,
        type: 'TOGGLE_TODO'
    };
    expect(actual).toEqual(expected);
});