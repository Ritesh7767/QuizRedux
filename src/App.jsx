import { useState } from 'react'
import RoutingLayout from './Routes/RoutingLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoutingLayout/>
    </>
  )
}

export default App
