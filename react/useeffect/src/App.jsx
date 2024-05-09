import { useState ,useEffect } from 'react'



function App() {
  const [data,setdata]=useState(1);
  
  function click(){
    setdata(data+1)
  }

useEffect(
  ()=>{
    console.log("useeffect is ussed")
  },[data]
)
  return (
    <>
        <h1 className="text-3xl font-bold underline">
      useEffect ({data})
    </h1>
    <button onClick={click}>Click ME</button>
    </>
  )
}

export default App
