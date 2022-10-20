import React, { useState, useRef } from 'react'

function App() {
  const [cText, setCText] = useState('India')

  const ucTextNode = useRef(null)

  const cTextChangeHandler = (event) => {
    const t = event.target.value

    setCText(t)
  }

  const submitForm = (event) => {
    event.preventDefault()

    const submitValues = {
      controlledText: cText,
      uncontrolledText: ucTextNode.current.value,
    }

    console.log('Form values submitted: ', submitValues)
  }

  return (
    <div>
      <form>
        <h2>Controlled form demo</h2>

        <input type='text' value={cText} onChange={cTextChangeHandler} />

        <hr />

        <h2>Uncontrolled form demo</h2>
        <input type='text' ref={ucTextNode} defaultValue='Sri Lanka' />

        <hr />
        <button onClick={submitForm}>Submit Form</button>
      </form>
    </div>
  )
}

export default App
