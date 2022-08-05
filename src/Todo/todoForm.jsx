import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ addTodo, addTodoState }, ref) => (
  <>
    <form onSubmit={addTodo}>
      <input ref={ref} type="text" />
      <button
        disabled={addTodoState.isLoading}
        className="btn rounded-l-none disabled:bg-slate-400"
        type="submit"
      >
        Add Todo
      </button>
    </form>
    {!addTodoState.isLoading && addTodoState.errorMessage && (
      <span>{addTodoState.errorMessage}</span>
    )}
  </>
));

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  addTodoState: PropTypes.shape({
    state: PropTypes.string,
    isLoading: PropTypes.bool,
    errorMessage: PropTypes.string,
  }),
};

TodoForm.defaultProps = {
  addTodoState: {},
};

export default memo(TodoForm);
