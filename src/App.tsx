import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Main></Main>
    </React.Fragment>
  );
}

export default App;
