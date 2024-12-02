import { useEffect, useState } from 'react'
import Employee from './companents/Employee'
import './App.css'

function App() {
  const [employees, setEmployyes] = useState([])

  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
    .then(response => response.json())
    .then(data => setEmployyes(data))
    .catch(err => console.log("Err: " + err))
  },[])
  console.log(employees,"fif")
  return (
    <div className="employee-list">
       { employees.map((user) => (
         <Employee
            key={user.id}
            name={user.name}
            department={user.department}
            role={user.role}
         />
       )) }
     </div>
  )
}

export default App
