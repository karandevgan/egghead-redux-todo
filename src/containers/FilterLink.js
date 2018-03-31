import React from 'react';
import store from '../store';

const filterLinkClickHandler = (e, filter) => {
    e.preventDefault();
    store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter
    });
};

const FilterLink = ({ filter, currentFilter, children }) => {
    if (currentFilter === filter) {
        return (
            <span>{children}</span>
        );
    } else {
        return (
            <a
                href="#"
                onClick={(e) => {
                    filterLinkClickHandler(e, filter);
                }}
            >
                {children}
            </a>
        );
    }
};

export default FilterLink;