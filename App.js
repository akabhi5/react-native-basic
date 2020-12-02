import React from 'react';
import {NativeRouter as Router, Route} from 'react-router-native';
import Home from './Home';
import Post from './Post';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Post} />
    </Router>
  );
};

export default App;
