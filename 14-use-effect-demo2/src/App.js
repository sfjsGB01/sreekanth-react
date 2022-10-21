import React, { useState, useEffect } from 'react'

function App() {
  const [currentTime, setCurrentTime] = useState(null)

  useEffect(() => {
    console.log('UE - Empty dependency array')

    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 10000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    console.log('UE - No dependency array')
  })

  console.log('Rendering component...')
  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  )
}

export default App
