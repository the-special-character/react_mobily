import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todoItem, toggleCompleteTodo, deleteTodo }) => {
  console.log('todoitem render');
  return (
    <div key={todoItem.id} className="flex items-center p-4 hover:bg-white">
      <input
        type="checkbox"
        name="isDone"
        id="isDone"
        checked={todoItem.isDone}
        onChange={() => toggleCompleteTodo(todoItem)}
      />
      <p
        className="flex-1 px-4 line-clamp-1"
        style={{
          textDecoration: todoItem.isDone ? 'line-through' : 'none',
        }}
      >
        {todoItem.text}
      </p>
      <button
        className="btn"
        type="button"
        onClick={() => deleteTodo(todoItem)}
      >
        Delete Todo
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  toggleCompleteTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
  }).isRequired,
};

export default memo(TodoItem);
