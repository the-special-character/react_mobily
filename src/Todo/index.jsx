import React, { Component, createRef } from 'react';
import './style.css';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.todoTextRef = createRef();
    this.state = {
      todoList: [],
      filterType: 'all',
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

  filterTodo = event => {
    this.setState({ filterType: event.target.name });
  };

  render() {
    console.log('todo render');

    return (
      <div className="wrapper">
        <h1 className="text-center py-10">Todo App</h1>
        <TodoForm addTodo={this.addTodo} ref={this.todoTextRef} />
        <TodoList
          {...this.state}
          deleteTodo={this.deleteTodo}
          toggleCompleteTodo={this.toggleCompleteTodo}
        />
        <TodoFilter filterTodo={this.filterTodo} />
      </div>
    );
  }
}
