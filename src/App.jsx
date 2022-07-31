import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Child from './Child';

// Mounting

// 1. constructor
// 2. getDerivedStateFromProps
// 3. render
// 4. componentDidMount

// Updating
// 1. getDerivedStateFromProps
// 2. shouldComponentUpdate
// 3. render
// 4. getSnapshotBeforeUpdate
// 5. componentDidUpdate

// unmounting
// 1. componentWillUnmount

// error
// 1. getDerivedStateFromError
// 2. componentDidCatch

class App extends PureComponent {
  // base on prop value if you want to define state
  // analytics purpose
  //  call only once
  constructor(props) {
    console.log('constructor');
    super(props);

    this.state = {
      counter: 0,
      user: null,
      //   greet: `Hello ${props.name}`,
    };

    this.h1Ref = createRef();

    console.log(document.getElementById('header'));

    // write a logic to capture information
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    console.log(document.getElementById('header'));
    if (!state.greet) {
      return {
        greet: `Hello ${props.name}`,
      };
    }
    return null;
  }

  //   to manupulate dom
  //
  async componentDidMount() {
    console.log(document.getElementById('header'));
    this.h1Ref.current.style = 'color: red';

    const res = await fetch('http://localhost:3000/user');
    const json = await res.json();

    console.log(json);
    this.setState({ user: json });

    // server call
    // set state
  }

  getSnapshotBeforeUpdate() {
    return 'hello from getSnapshotBeforeUpdate';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  componentDidCatch(error, info) {
    console.log(info);
  }

  increment = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  decrement = () => {
    this.setState(({ counter }) => ({ counter: counter - 1 }));
  };

  changeGreet = () => {
    this.setState((state, { name }) => ({ greet: `namste ${name}` }));
  };

  render() {
    console.log('render');
    const { counter, greet, user, error } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <>
        <h1 ref={this.h1Ref}>{greet}</h1>
        {user && (
          <>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.gender}</p>
          </>
        )}

        {(counter < 5 || counter > 10) && <Child />}

        <button type="button" onClick={this.changeGreet}>
          Change Greet Method
        </button>

        <button type="button" onClick={this.increment}>
          +
        </button>
        {counter}
        <button type="button" onClick={this.decrement}>
          -
        </button>
      </>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;
