import React from 'react';

const FilterLink = ({
    filter,
    currentFilter,
    filterLinkClick,
    children
}) => {
    if (currentFilter === filter) {
        return (
            <span>{children}</span>
        );
    } else {
        return (
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    filterLinkClick(filter);
                }}
            >
                {children}
            </a>
        );
    }
};

export default FilterLink;