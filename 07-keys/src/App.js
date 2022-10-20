import React from 'react'

const employees = [
  {
    empId: 100,
    firstName: 'Sreekanth',
    lastName: 'M E',
  },
  {
    empId: 200,
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    empId: 300,
    firstName: 'John',
    lastName: 'Smith',
  },
  {
    empId: 400,
    firstName: 'Virat',
    lastName: 'Kohli',
  },
  { empId: 500, firstName: 'Rishabh', lastName: 'Pant' },
]

function App() {
  return (
    <ul>
      {employees.map((element) => {
        console.log(element.empId, element)

        return (
          <li key={element.empId}>
            <strong>{element.firstName + ' ' + element.lastName}</strong>
          </li>
        )
      })}
    </ul>
  )
}

export default App
