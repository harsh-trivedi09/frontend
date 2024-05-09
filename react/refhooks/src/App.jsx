import React,{ useRef } from "react"

function App() {
 
let inputref = useRef(null)
function handleinput() {
  inputref.current.value="Test on click input";
  inputref.current.style.color= "red"
}
  return (
    <>
      
      <input type="text"  ref={inputref}/>
      <button onClick={handleinput}>Click to add number</button>
    </>
  )
}

export default App
