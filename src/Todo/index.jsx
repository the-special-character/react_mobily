import React, { Component, createRef } from 'react';
import './style.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.todoTextRef = createRef();
    this.state = {
      todoList: [],
    };
  }

  addTodo = event => {
    event.preventDefault();
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: new Date().valueOf(),
            text: this.todoTextRef.current.value,
            isDone: false,
          },
        ],
      }),
      () => {
        this.todoTextRef.current.value = '';
      },
    );
  };

  toggleCompleteTodo = todoItem => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(x => x.id === todoItem.id);

      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...todoList[index], isDone: !todoList[index].isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = todoItem => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(x => x.id === todoItem.id);

      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  filterTodo = () => {};

  render() {
    const { todoList } = this.state;

    return (
      <div className="wrapper">
        <h1 className="text-center py-10">Todo App</h1>
        <form onSubmit={this.addTodo}>
          <input ref={this.todoTextRef} type="text" />
          <button type="submit">Add Todo</button>
        </form>
        <div>
          {todoList.map(todoItem => (
            <div key={todoItem.id} className="todoItem">
              <input
                type="checkbox"
                name="isDone"
                id="isDone"
                checked={todoItem.isDone}
                onChange={() => this.toggleCompleteTodo(todoItem)}
              />
              <p
                style={{
                  textDecoration: todoItem.isDone ? 'line-through' : 'none',
                }}
              >
                {todoItem.text}
              </p>
              <button type="button" onClick={() => this.deleteTodo(todoItem)}>
                Delete Todo
              </button>
            </div>
          ))}
        </div>
        <div>
          <button type="button" onClick={() => this.filterTodo()}>
            All
          </button>
          <button type="button" onClick={() => this.filterTodo()}>
            Pending
          </button>
          <button type="button" onClick={() => this.filterTodo()}>
            Completed
          </button>
        </div>
      </div>
    );
  }
}
