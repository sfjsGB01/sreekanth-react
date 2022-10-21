import React from 'react'

import PropTypes from 'prop-types'

function App({ name }) {
  return <div>Hello {name}</div>
}

export default App

App.defaultProps = {
  name: 'Sreekanth',
}

App.propTypes = {
  name: PropTypes.oneOf(['Sreekanth', 'Jyotiranjan']),
}
