import React, { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const incrementHandler = () => {
    console.log('Incrementing...')

    //setCounter(counter + 1)
    setCounter((prevState) => {
      return prevState + 1
    })
  }

  const decrementHandler = () => {
    console.log('Decrementing...')

    //setCounter(counter - 1)
    setCounter((prevState) => {
      return prevState - 1
    })
  }

  console.log('Component rendering: ', counter)

  return (
    <div>
      <form>
        <input type='button' value='Increment' onClick={incrementHandler} />
        &nbsp;&nbsp;&nbsp;
        <input type='button' value='Decrement' onClick={decrementHandler} />
      </form>

      <h1>Counter: {counter}</h1>
    </div>
  )
}

export default App
