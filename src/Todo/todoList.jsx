import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({
  todoList,
  toggleCompleteTodo,
  deleteTodo,
  deleteTodoState,
}) => (
  <div className="w-full flex-1">
    {todoList.map(todoItem => (
      <TodoItem
        key={todoItem.id}
        todoItem={todoItem}
        toggleCompleteTodo={toggleCompleteTodo}
        deleteTodo={deleteTodo}
        deleteTodoState={deleteTodoState.find(x => x.id === todoItem.id)}
      />
    ))}
  </div>
);

TodoList.propTypes = {
  toggleCompleteTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ).isRequired,
  deleteTodoState: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      state: PropTypes.string,
      isLoading: PropTypes.bool,
      errorMessage: PropTypes.string,
    }),
  ).isRequired,
};

export default memo(TodoList);
