import logo from './logo.svg';
import './App.css';
import Resue from './Resusecomponent';

function App() {
  const arry =[
    {name:"akash", contact: "999" , age:20},
    {name:"aman", contact: "888" , age:21},
    {name:"rahul", contact: "222" , age:23},
    {name:"arman", contact: "333" , age:19},
  ]
  return (
    <div className="App">
    <h1>Resuable Component</h1>
    {
      arry.map((i)=>
       <Resue name={i} />      
      )
    }
    </div>
  );
}

export default App;
