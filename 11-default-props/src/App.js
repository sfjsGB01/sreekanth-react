import React from 'react'

function App({ name }) {
  return <div>Hello {name}</div>
}

export default App

App.defaultProps = {
  name: 'Sreekanth',
}
