import React from 'react';
import './App.css';
import HomePage from './components/homePage/homePage';
import TableOfContents from './components/tableOfContents/tableOfContents';

function App() {
  return (
    <div className="App">
      <HomePage />
      <TableOfContents />
    </div>
  );
}

export default App;