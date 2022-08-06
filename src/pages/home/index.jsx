import React from 'react';
import { AuthContext } from '../../context/authContext';

const Home = () => (
  <div>
    <AuthContext.Consumer>
      {({ logout }) => (
        <button type="button" onClick={logout}>
          Logout
        </button>
      )}
    </AuthContext.Consumer>
  </div>
);

export default Home;
