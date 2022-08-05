import React, { Component, createRef } from 'react';
import axiosInstance from '../utils/axiosInstance';
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
      appState: [],
    };
  }

  componentDidMount() {
    this.loadTodo('all');
  }

  addTodo = async event => {
    const state = 'add_todo';

    this.loadingState({ state });
    try {
      event.preventDefault();

      await axiosInstance.post('todoList', {
        text: this.todoTextRef.current.value,
        isDone: false,
      });
      this.todoTextRef.current.value = '';

      this.successState({ state });

      this.loadTodo('all');
    } catch (error) {
      this.errorState({ state, error });
    }
  };

  toggleCompleteTodo = async todoItem => {
    const state = 'update_todo';
    this.loadingState({ state, id: todoItem.id });
    try {
      const res = await axiosInstance.put(`todoList/${todoItem.id}`, {
        ...todoItem,
        isDone: !todoItem.isDone,
      });

      this.setState(({ todoList }) => {
        const index = todoList.findIndex(x => x.id === todoItem.id);

        return {
          todoList: [
            ...todoList.slice(0, index),
            res.data,
            ...todoList.slice(index + 1),
          ],
        };
      });
      this.successState({ state, id: todoItem.id });
    } catch (error) {
      this.errorState({ state, id: todoItem.id, error });
    }
  };

  deleteTodo = async todoItem => {
    const state = 'delete_todo';
    this.loadingState({ state, id: todoItem.id });
    try {
      await axiosInstance.delete(`todoList/${todoItem.id}`);

      this.setState(({ todoList }) => {
        const index = todoList.findIndex(x => x.id === todoItem.id);

        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
      this.successState({ state, id: todoItem.id });
    } catch (error) {
      this.errorState({ state, id: todoItem.id, error });
    }
  };

  loadingState = ({ id, state }) => {
    this.setState(({ appState }) => ({
      appState: [
        ...appState,
        {
          id,
          state,
          isLoading: true,
          errorMessage: '',
        },
      ],
    }));
  };

  successState = ({ state, id }) => {
    this.setState(({ appState }) => ({
      appState: appState.filter(x => !(x.state === state && x.id === id)),
    }));
  };

  errorState = ({ state, error, id }) => {
    this.setState(({ appState }) => ({
      appState: appState.map(x => {
        if (x.state === state && x.id === id) {
          return { ...x, isLoading: false, errorMessage: error.message };
        }
        return x;
      }),
    }));
  };

  loadTodo = async filterType => {
    const state = 'load_todo';

    this.loadingState({ state });

    try {
      const params = {};

      if (filterType !== 'all') {
        params.isDone = filterType === 'completed';
      }

      const res = await axiosInstance.get('todoList', {
        params,
      });

      this.setState({
        todoList: res.data,
        filterType,
      });
      this.successState({ state });
    } catch (error) {
      this.errorState({ state, error });
    }
  };

  render() {
    const { appState } = this.state;

    const loadTodo = appState.find(x => x.state === 'load_todo');

    const addTodo = appState.find(x => x.state === 'add_todo');

    const deleteTodo = appState.filter(x => x.state === 'delete_todo');

    const updateTodo = appState.filter(x => x.state === 'update_todo');

    if (!loadTodo?.isLoading && loadTodo?.errorMessage) {
      return <h1>{loadTodo?.errorMessage}</h1>;
    }

    return (
      <div className="wrapper">
        <h1 className="text-center py-10">Todo App</h1>
        <TodoForm
          addTodo={this.addTodo}
          ref={this.todoTextRef}
          addTodoState={addTodo}
        />
        {loadTodo?.isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <TodoList
              {...this.state}
              deleteTodo={this.deleteTodo}
              toggleCompleteTodo={this.toggleCompleteTodo}
              deleteTodoState={deleteTodo}
              updateTodoState={updateTodo}
            />
            <TodoFilter filterTodo={this.loadTodo} />
          </>
        )}
      </div>
    );
  }
}
