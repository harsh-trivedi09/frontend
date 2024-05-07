import logo from './logo.svg';
import './App.css';

function App() {
const arry =[
  {name:"akash", contact: "999" , age:20},
  {name:"aman", contact: "888" , age:21},
  {name:"rahul", contact: "222" , age:23},
  {name:"arman", contact: "333" , age:19},
]


  return (
    <div className="App">
      <h1>This is Map() method in react</h1>
      {
      arry.map((i)=>
       <h3> {i.name} and Age is {i.age}  </h3>    
      )
      }
    </div>
  );
}

export default App;
