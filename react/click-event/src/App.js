import logo from './logo.svg';
import './App.css';

function App() {

  function clickOutput(){
    alert("button is clicked event")
  }
  return (
    <div className="App">
      <button onClick={clickOutput}>This is a button</button>
    </div>
  );
}

export default App;
