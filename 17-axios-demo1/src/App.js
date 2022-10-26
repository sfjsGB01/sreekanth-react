import React from 'react'
import axios from './util/axiosConfig'

function App() {
  const [employees, setEmployees] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const fNameRef = React.useRef()
  const lNameRef = React.useRef()
  const cityRef = React.useRef()

  React.useEffect(() => {
    getEmployees()
  }, [])

  const getEmployees = () => {
    setLoading(true)
    axios
      .get('/employees')
      .then((result) => {
        setEmployees(result?.data)
      })
      .catch((error) => {
        console.log('Error: ', error?.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const submitForm = (e) => {
    e.preventDefault()

    if (
      fNameRef.current.value === '' ||
      lNameRef.current.value === '' ||
      cityRef.current.value === ''
    ) {
      alert('All fields are required!')

      return
    }

    axios
      .post('/employees', {
        firstName: fNameRef.current.value,
        lastName: lNameRef.current.value,
        city: cityRef.current.value,
      })
      .then(function (response) {
        getEmployees()

        fNameRef.current.value = ''
        lNameRef.current.value = ''
        cityRef.current.value = ''
      })
      .catch(function (error) {
        console.log('Error: ', error?.message)
      })
  }

  const deleteEmployee = (e, empId) => {
    e.preventDefault()

    axios
      .delete(`/employees/${empId}`)
      .then(function (response) {
        getEmployees()
      })
      .catch(function (error) {
        console.log('Error: ', error?.message)
      })
  }

  return (
    <div>
      <h1>Employees</h1>

      <form>
        <input type='text' placeholder='First Name' ref={fNameRef} />
        <br /> <br />
        <input type='text' placeholder='Last Name' ref={lNameRef} />
        <br /> <br />
        <input type='text' placeholder='City' ref={cityRef} />
        <br /> <br />
        <button onClick={submitForm}>Add Employee</button>
        <hr />
        {loading ? (
          <div style={{ color: 'green' }}>Loading...</div>
        ) : (
          <table border='1'>
            <tbody>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>Actions</th>
              </tr>

              {employees.map((employee) => {
                return (
                  <tr key={employee?.id}>
                    <td>{employee?.id}</td>
                    <td>{employee?.firstName}</td>
                    <td>{employee?.lastName}</td>
                    <td>{employee?.city}</td>
                    <td>
                      <button
                        onClick={(e) => {
                          deleteEmployee(e, employee?.id)
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </form>
    </div>
  )
}

export default App
