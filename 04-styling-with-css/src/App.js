import React from 'react'

import Form from './Form'
import Display from './Display'

function App() {
  return (
    <div>
      <Form>
        <div>Form</div>
        <input type='text' />
      </Form>

      <Display count={100} show={true} />
    </div>
  )
}

export default App
