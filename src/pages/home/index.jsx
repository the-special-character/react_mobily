import React from 'react';
import { ThemeContext } from '../../context/themeContext';

const Home = () => (
  <div>
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <div>
          <h1>{`Your current theme is ${theme}`}</h1>
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            Change Theme
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  </div>
);

export default Home;
