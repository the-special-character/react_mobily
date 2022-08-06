import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import useAppState from '../hooks/useAppState';
import axiosInstance from '../utils/axiosInstance';
import './style.css';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const { appState, loadingState, successState, errorState } = useAppState();

  const todoTextRef = useRef();

  const loadTodo = useCallback(async ft => {
    const state = 'load_todo';

    loadingState({ state });

    try {
      const params = {};

      if (ft !== 'all') {
        params.isDone = ft === 'completed';
      }

      const res = await axiosInstance.get('todoList', {
        params,
      });

      setTodoList(res.data);
      setFilterType(ft);

      successState({ state });
    } catch (error) {
      errorState({ state, error });
    }
  }, []);

  const addTodo = useCallback(async event => {
    event.preventDefault();
    const state = 'add_todo';
    loadingState({ state });
    try {
      await axiosInstance.post('todoList', {
        text: todoTextRef.current.value,
        isDone: false,
      });
      todoTextRef.current.value = '';

      successState({ state });

      loadTodo('all');
    } catch (error) {
      errorState({ state, error });
    }
  }, []);

  const deleteTodo = useCallback(async todoItem => {
    const state = 'delete_todo';
    loadingState({ state, id: todoItem.id });
    try {
      await axiosInstance.delete(`todoList/${todoItem.id}`);

      setTodoList(val => {
        const index = val.findIndex(x => x.id === todoItem.id);
        return [...val.slice(0, index), ...val.slice(index + 1)];
      });

      successState({ state, id: todoItem.id });
    } catch (error) {
      errorState({ state, id: todoItem.id, error });
    }
  }, []);

  const toggleCompleteTodo = useCallback(async todoItem => {
    const state = 'update_todo';
    loadingState({ state, id: todoItem.id });
    try {
      const res = await axiosInstance.put(`todoList/${todoItem.id}`, {
        ...todoItem,
        isDone: !todoItem.isDone,
      });

      setTodoList(val => {
        const index = val.findIndex(x => x.id === todoItem.id);
        return [...val.slice(0, index), res.data, ...val.slice(index + 1)];
      });

      successState({ state, id: todoItem.id });
    } catch (error) {
      errorState({ state, id: todoItem.id, error });
    }
  }, []);

  useEffect(() => {
    loadTodo('all');
  }, []);

  const loadTodoState = useMemo(
    () => appState.find(x => x.state === 'load_todo'),
    [appState],
  );

  const addTodoState = useMemo(
    () => appState.find(x => x.state === 'add_todo'),
    [appState],
  );

  const deleteTodoState = useMemo(
    () => appState.filter(x => x.state === 'delete_todo'),
    [appState],
  );

  const updateTodoState = useMemo(
    () => appState.filter(x => x.state === 'update_todo'),
    [appState],
  );

  if (!loadTodoState?.isLoading && loadTodoState?.errorMessage) {
    return <h1>{loadTodoState?.errorMessage}</h1>;
  }

  return (
    <div className="wrapper">
      <h1 className="text-center py-10">Todo App</h1>
      <TodoForm
        addTodo={addTodo}
        ref={todoTextRef}
        addTodoState={addTodoState}
      />
      {loadTodo?.isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <TodoList
            todoList={todoList}
            deleteTodo={deleteTodo}
            toggleCompleteTodo={toggleCompleteTodo}
            deleteTodoState={deleteTodoState}
            updateTodoState={updateTodoState}
          />
          <TodoFilter filterTodo={loadTodo} filterType={filterType} />
        </>
      )}
    </div>
  );
};

export default Todo;

// export default class Todo extends Component {
//   constructor(props) {
//     super(props);
//     this.todoTextRef = createRef();
//     this.state = {
//       todoList: [],
//       filterType: 'all',
//       appState: [],
//     };
//   }

//   componentDidMount() {
//     this.loadTodo('all');
//   }

//   addTodo = async event => {
//     const state = 'add_todo';

//     this.loadingState({ state });
//     try {
//       event.preventDefault();

//       await axiosInstance.post('todoList', {
//         text: this.todoTextRef.current.value,
//         isDone: false,
//       });
//       this.todoTextRef.current.value = '';

//       this.successState({ state });

//       this.loadTodo('all');
//     } catch (error) {
//       this.errorState({ state, error });
//     }
//   };

//   toggleCompleteTodo = async todoItem => {
//     const state = 'update_todo';
//     this.loadingState({ state, id: todoItem.id });
//     try {
//       const res = await axiosInstance.put(`todoList/${todoItem.id}`, {
//         ...todoItem,
//         isDone: !todoItem.isDone,
//       });

//       this.setState(({ todoList }) => {
//         const index = todoList.findIndex(x => x.id === todoItem.id);

//         return {
//           todoList: [
//             ...todoList.slice(0, index),
//             res.data,
//             ...todoList.slice(index + 1),
//           ],
//         };
//       });
//       this.successState({ state, id: todoItem.id });
//     } catch (error) {
//       this.errorState({ state, id: todoItem.id, error });
//     }
//   };

//   deleteTodo = async todoItem => {
//     const state = 'delete_todo';
//     this.loadingState({ state, id: todoItem.id });
//     try {
//       await axiosInstance.delete(`todoList/${todoItem.id}`);

//       this.setState(({ todoList }) => {
//         const index = todoList.findIndex(x => x.id === todoItem.id);

//         return {
//           todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
//         };
//       });
//       this.successState({ state, id: todoItem.id });
//     } catch (error) {
//       this.errorState({ state, id: todoItem.id, error });
//     }
//   };

//   loadingState = ({ id, state }) => {
//     this.setState(({ appState }) => ({
//       appState: [
//         ...appState,
//         {
//           id,
//           state,
//           isLoading: true,
//           errorMessage: '',
//         },
//       ],
//     }));
//   };

//   successState = ({ state, id }) => {
//     this.setState(({ appState }) => ({
//       appState: appState.filter(x => !(x.state === state && x.id === id)),
//     }));
//   };

//   errorState = ({ state, error, id }) => {
//     this.setState(({ appState }) => ({
//       appState: appState.map(x => {
//         if (x.state === state && x.id === id) {
//           return { ...x, isLoading: false, errorMessage: error.message };
//         }
//         return x;
//       }),
//     }));
//   };

//   loadTodo = async filterType => {
//     const state = 'load_todo';

//     this.loadingState({ state });

//     try {
//       const params = {};

//       if (filterType !== 'all') {
//         params.isDone = filterType === 'completed';
//       }

//       const res = await axiosInstance.get('todoList', {
//         params,
//       });

//       this.setState({
//         todoList: res.data,
//         filterType,
//       });
//       this.successState({ state });
//     } catch (error) {
//       this.errorState({ state, error });
//     }
//   };

//   render() {
//     const { appState } = this.state;

//     const loadTodo = appState.find(x => x.state === 'load_todo');

//     const addTodo = appState.find(x => x.state === 'add_todo');

//     const deleteTodo = appState.filter(x => x.state === 'delete_todo');

//     const updateTodo = appState.filter(x => x.state === 'update_todo');

//     if (!loadTodo?.isLoading && loadTodo?.errorMessage) {
//       return <h1>{loadTodo?.errorMessage}</h1>;
//     }

//     return (
//       <div className="wrapper">
//         <h1 className="text-center py-10">Todo App</h1>
//         <TodoForm
//           addTodo={this.addTodo}
//           ref={this.todoTextRef}
//           addTodoState={addTodo}
//         />
//         {loadTodo?.isLoading ? (
//           <h2>Loading...</h2>
//         ) : (
//           <>
//             <TodoList
//               {...this.state}
//               deleteTodo={this.deleteTodo}
//               toggleCompleteTodo={this.toggleCompleteTodo}
//               deleteTodoState={deleteTodo}
//               updateTodoState={updateTodo}
//             />
//             <TodoFilter filterTodo={this.loadTodo} />
//           </>
//         )}
//       </div>
//     );
//   }
// }
