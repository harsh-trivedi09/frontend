import { useState } from "react";


export default function Counter() {

const [data,setdata]=useState(0);

function handleclick(){
    setdata(data+1)
}

    return(
        <><h1>Number = {data}</h1>
          <button onClick={handleclick}>Click to chnage the digit</button>
        </>
    )
}