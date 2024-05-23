import { useState } from 'react'

import Todos from './components/Todo'
import AddTodo from './components/Addtodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>leran redux</h1>
      <AddTodo/>
      <Todos/>
      
    </>
  )
}

export default App
