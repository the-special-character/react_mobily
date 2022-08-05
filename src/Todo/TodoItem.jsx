import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({
  todoItem,
  toggleCompleteTodo,
  deleteTodo,
  deleteTodoState,
  updateTodoState,
}) => {
  console.log('TodoItem render');
  return (
    <div key={todoItem.id} className="flex items-center p-4 hover:bg-white">
      <input
        type="checkbox"
        name="isDone"
        id="isDone"
        className="disabled:accent-gray-500"
        disabled={updateTodoState.isLoading}
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
        disabled={deleteTodoState.isLoading}
        className="btn disabled:bg-slate-400"
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
  deleteTodoState: PropTypes.shape({
    id: PropTypes.number,
    state: PropTypes.string,
    isLoading: PropTypes.bool,
    errorMessage: PropTypes.string,
  }),
  updateTodoState: PropTypes.shape({
    id: PropTypes.number,
    state: PropTypes.string,
    isLoading: PropTypes.bool,
    errorMessage: PropTypes.string,
  }),
};

TodoItem.defaultProps = {
  deleteTodoState: {},
  updateTodoState: {},
};

export default memo(TodoItem);
