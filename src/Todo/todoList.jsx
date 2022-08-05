import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, filterType, toggleCompleteTodo, deleteTodo }) => {
  console.log('TodoList render');
  return (
    <div className="w-full flex-1">
      {todoList.map(todoItem => {
        if (
          filterType === 'all' ||
          (filterType === 'pending' && !todoItem.isDone) ||
          (filterType === 'completed' && todoItem.isDone)
        ) {
          return (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              toggleCompleteTodo={toggleCompleteTodo}
              deleteTodo={deleteTodo}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

TodoList.propTypes = {
  toggleCompleteTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  filterType: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ).isRequired,
};

export default memo(TodoList);
