import React, { PureComponent } from 'react';
// import shallowCompare from 'react-addons-shallow-compare'; // ES6

export default class Child extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState);
  //     // if (this.props !== nextProps || this.state !== nextState) {
  //     //   return true;
  //     // }
  //     // return false;
  //   }

  state = {
    counter: 0,
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove);

    this.interval = setInterval(() => {
      this.setState(({ counter }) => ({ counter: counter + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMove);
    clearInterval(this.interval);
  }

  mouseMove = () => {
    console.log('mouse move');
  };

  render() {
    console.log('render child component');
    const { counter } = this.state;
    if (counter > 10) throw new Error('something wrong');

    return (
      <div>
        <h2>Child Component</h2>
        <p>{counter}</p>
      </div>
    );
  }
}
