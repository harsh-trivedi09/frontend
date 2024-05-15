import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [myData, setMyData]=useState([])

  useEffect(()=>{
    axios.get("https://reqres.in/api/users/")
    .then((res)=> setMyData(res.data.data)) 
    .catch((error)=>
    console.log("these are error",error)
    )
    
  },[])

  return (
    <>
      <h1>Axious</h1>
      <div>
         {myData.map((post)=>{

        const{id, email, first_name, avatar} = post;

        return <div className='card' key={id}>

          <h5>{email}</h5>
          
          <img key={avatar} src={avatar} />
          <h5>{first_name}</h5>
          {console.log(post)}
        </div>
      })}
      </div>
     
    </>
  )
}

export default App
