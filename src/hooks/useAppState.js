import { useState } from 'react';

const useAppState = () => {
  const [appState, setAppState] = useState([]);

  const loadingState = ({ id, state }) => {
    setAppState(val => [
      ...val,
      {
        id,
        state,
        isLoading: true,
        errorMessage: '',
      },
    ]);
  };

  const successState = ({ state, id }) => {
    setAppState(val => val.filter(x => !(x.state === state && x.id === id)));
  };

  const errorState = ({ state, error, id }) => {
    setAppState(val =>
      val.map(x => {
        if (x.state === state && x.id === id) {
          return { ...x, isLoading: false, errorMessage: error.message };
        }
        return x;
      }),
    );
  };

  return {
    appState,
    loadingState,
    successState,
    errorState,
  };
};

export default useAppState;
