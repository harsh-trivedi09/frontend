import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const[data, setdata]=useState("Click on This button to change the State")
  function clicking(){
    setdata("Thanks the State is changed")
    
    
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={clicking}>click on it </button>
    </div>
  );
}

export default App;
