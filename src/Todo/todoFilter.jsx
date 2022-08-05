import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoFilter = ({ filterTodo }) => {
  console.log('TodoFilter render');
  return (
    <div className="w-full flex gap-1">
      <button
        className="btn flex-1 rounded-none"
        type="button"
        onClick={() => filterTodo('all')}
      >
        All
      </button>
      <button
        className="btn flex-1 rounded-none"
        type="button"
        onClick={() => filterTodo('pending')}
      >
        Pending
      </button>
      <button
        className="btn flex-1 rounded-none"
        type="button"
        onClick={() => filterTodo('completed')}
      >
        Completed
      </button>
    </div>
  );
};

TodoFilter.propTypes = {
  filterTodo: PropTypes.func.isRequired,
};

export default memo(TodoFilter);
