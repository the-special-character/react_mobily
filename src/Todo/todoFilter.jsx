import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoFilter = ({ filterTodo }) => {
  console.log('TodoFilter render');
  return (
    <div className="w-full flex gap-1">
      <button
        className="btn flex-1 rounded-none"
        type="button"
        name="all"
        onClick={filterTodo}
      >
        All
      </button>
      <button
        className="btn flex-1 rounded-none"
        type="button"
        name="pending"
        onClick={filterTodo}
      >
        Pending
      </button>
      <button
        className="btn flex-1 rounded-none"
        type="button"
        name="completed"
        onClick={filterTodo}
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
