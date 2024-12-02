import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Employee from './companents/Employee'

function App() {
  const [employee, setEmployyes] = useState([])
  const [filter, setFilter] = useState("");

  const alive = {
    alive : true
  }
  const dead = {
    alive : false
  }
  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
    .then(response => response.json())
    .then(data => setEmployyes(data))
    .catch(err => console.log("Err: " + err))
  },[])

  employee.map( data => {
    if(data.id % 2 == 0){
      Object.assign(data,alive)
    }else{
      Object.assign(data,dead)
    }
    console.log(data,'data')
  })

  const filteredEmployees = employee.filter((employee) => {
    if (filter === "alive") return employee.alive === true;
    if (filter === "dead") return employee.alive === false;
    return true; 
  });

  console.log(employee)
  return (
    <div className="App">
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("alive")}>Alive</button>
        <button onClick={() => setFilter("dead")}>Dead</button>
      </div>

      <div className="employee-list">
        {filteredEmployees.map((employee) => (
          <div key={employee.id}>
            <Employee 
              name={employee.name} 
              department={employee.department} 
              role={employee.role} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default App
