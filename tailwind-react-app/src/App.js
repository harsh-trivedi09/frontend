import Group from "./Components/Group";
import Navbar from "./Components/NavBar";
import React, { useState } from 'react';
import Groupname from "./Components/Groupname";


export default function App() {
  let [data,setdata]=useState(0)

  function addCount(){
    setdata(data+1)
  }
  function lessCount(){
    if (data > 0) {
      setdata(data -1);
  }
  }

  return (
    <>
      <Navbar addCount={addCount} lessCount={lessCount} data={data}/>
      <Groupname addCount={addCount} lessCount={lessCount} data={data} />
      <Group addCount={addCount} lessCount={lessCount} data={data}/>
      
    </>
  );
}
