function Display(props) {
  return (
    <div>
      <h1>Input value: {props.count}</h1>

      <h2>H2 --Internal CSS</h2>

      {/*<h3 style="color:magenta;font-size:100px;">H3 --Inline CSS</h3>*/}

      <h3
        style={{
          color: 'magenta',
          fontSize: 30 + 5,
          border: '2px yellow solid',
        }}
      >
        H3 --Inline CSS
      </h3>
    </div>
  )
}

export default Display
