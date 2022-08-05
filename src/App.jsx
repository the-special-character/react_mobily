import React, { useEffect, useState, useRef } from 'react';
import Child from './Child';

// Mounting

// 1. constructor
// 2. getDerivedStateFromProps
// 3. render
// 4. componentDidMount

// Updating
// 1. getDerivedStateFromProps
// 2. shouldComponentUpdate(memo)
// 3. render
// 4. getSnapshotBeforeUpdate // not possible in hooks
// 5. componentDidUpdate

// unmounting
// 1. componentWillUnmount

// error
// 1. getDerivedStateFromError // not possible in hooks
// 2. componentDidCatch // not possible in hooks

const App = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  const isMounted = useRef(false);

  // component Did Mount
  // Component Did Update
  // Component Will Unmout

  useEffect(() => {
    if (isMounted.current) {
      console.log('Component Did update');
    }
  }, [counter, number]);

  // component Did Mount
  useEffect(() => {
    console.log('Component Did mount');
    isMounted.current = true;
  }, []);

  return (
    <>
      <div className="flex text-6xl">
        <button type="button" onClick={() => setNumber(val => val + 1)}>
          +
        </button>
        <p className="px-6">{`Number: ${number}`}</p>
        <button type="button" onClick={() => setNumber(val => val - 1)}>
          -
        </button>
      </div>
      <div className="flex text-6xl">
        <button type="button" onClick={() => setCounter(val => val + 1)}>
          +
        </button>
        <p className="px-6">{`Counter: ${counter}`}</p>
        <button type="button" onClick={() => setCounter(val => val - 1)}>
          -
        </button>
      </div>
      {counter < 5 && <Child />}
    </>
  );
};

export default App;
