export default function getEmployeesReducer(prevState, action) {
  let newState

  switch (action?.type) {
    case 'CALLING_API':
      newState = { ...prevState, employees: [], loading: true, error: '' }
      break

    case 'API_CALL_SUCCESS':
      newState = {
        ...prevState,
        employees: action?.employees,
        loading: false,
        error: '',
      }
      break

    case 'API_CALL_FAILURE':
      newState = {
        ...prevState,
        employees: [],
        loading: false,
        error: action?.error,
      }
      break

    default:
      newState = prevState
      break
  }

  return newState
}

/**
 * INITIAL STATE:
 *  {
        employees: [],
        loading: false,
        error: '',
    }
 */

/**
 * ACTIONS:
 *
 * 1. CALLING_API
 *  {type:"CALLING_API"}
 *
 * 2. API_CALL_SUCCESS
 *  {type:"API_CALL_SUCCESS",employees:[....data]}
 *
 * 3. API_CALL_FAILURE
 *  {type:"API_CALL_FAILURE",error:"message...."}
 *
 */
