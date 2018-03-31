import React from 'react';
import FilterLink from './FilterLink';

const Footer = ({
    visibilityFilter,
    filterLinkClick
}) => {
    return (
        <div>
            Show:
            {' '}
            <FilterLink
                filter="SHOW_ALL"
                currentFilter={visibilityFilter}
                filterLinkClick={filterLinkClick}
            >
                All
             </FilterLink>
            {' '}
            <FilterLink
                filter="SHOW_ACTIVE"
                currentFilter={visibilityFilter}
                filterLinkClick={filterLinkClick}
            >
                Active
            </FilterLink>
            {' '}
            <FilterLink
                filter="SHOW_COMPLETED"
                currentFilter={visibilityFilter}
                filterLinkClick={filterLinkClick}
            >
                Completed
            </FilterLink>
        </div>
    );
};

export default Footer;