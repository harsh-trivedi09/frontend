import { useCallback, useState } from "react"

export default function App() {

const[length,setlength]=useState(8)
const[numberallowed,setnumberallowed]=useState(false)
const[charallowed,setcharallowed]=useState(true)
const[password,setpassword]=useState("")

const passwordgentrator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberallowed) str+= "1234567890"
  if(charallowed) str+= "!@#$%^&*()"

  for (let i = 1; i <= rray.length; i++){
    let char= Math.floor(Math.random()* str.length +1)
    pass =str.charAt(char)
    
  }
  setpassword(pass)

},[length, numberallowed,charallowed,setpassword])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white">Password Genrator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-3">
        <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3" 
        placeholder="password"
        readOnly       />
      </div>
      <button>Copy</button>
    </div>
    
  )
}
