import logo from './logo.svg';
import './App.css';
import Child from './child';
function clickresult(data){
  alert(data)
}

function App() {
  return (
    <div className="App">
      <h1>Parent comoponet</h1>
      <Child result={clickresult}/>
    </div>
  );
}

export default App;
