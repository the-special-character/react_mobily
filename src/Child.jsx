import React, { useEffect } from 'react';

const Child = () => {
  useEffect(() => {
    const mouseMove = () => {
      console.log('mouseMove');
    };

    document.addEventListener('mousemove', mouseMove);

    // component will unmount
    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return <h1>Child</h1>;
};

export default Child;
