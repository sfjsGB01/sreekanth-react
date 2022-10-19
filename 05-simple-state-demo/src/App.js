import React from 'react'

function App() {
  const [randomNumber, setRandomNumber] = React.useState(500)

  console.log('---randomNumber', randomNumber)

  const buttonClicked = () => {
    const rn = Math.random()

    setRandomNumber(rn)
  }

  return (
    <div>
      <form>
        <input
          type='button'
          value='Generate Random Number'
          onClick={buttonClicked}
        />
      </form>

      <h1>Random Number: {randomNumber}</h1>
    </div>
  )
}

export default App
