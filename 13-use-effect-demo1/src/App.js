import React from 'react'

function App() {
  const [counter, setCounter] = React.useState(null)

  React.useEffect(() => {
    setCounter(0)
  }, [])

  React.useEffect(() => {
    document.title = `Counter: ${counter}`
  }, [counter])

  const incrementHandler = () => {
    setCounter((prevState) => {
      return prevState + 1
    })
  }

  return (
    <div>
      <input type='button' value='Increment' onClick={incrementHandler} />
    </div>
  )
}

export default App
