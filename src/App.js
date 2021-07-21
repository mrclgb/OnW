import './App.css';
import React from 'react';
import Header from './components/Header';
import InputCity from './components/InputCity';

function App() {   
  return (
    <div className="App">
      <Header />
      <div className="container">
        <InputCity />
      </div>
    </div>
  );
}

export default App;
