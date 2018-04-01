import setVisibilityFilter from './setVisibilityFilter';

it('should return json object for setVisibility dispatch successfully', () => {
    const visibilityFilterActual = setVisibilityFilter('SHOW_ALL');
    const visibilityFilterExpected = {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ALL'
    };
    expect(visibilityFilterActual).toEqual(visibilityFilterExpected);
});