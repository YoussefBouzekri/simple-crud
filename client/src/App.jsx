import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState("")
  const [position, setPosition] = useState("")
  const [salary, setSalary] = useState(0)
  return (
    <div className="App">
      <div className="information">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)}  />
        <label htmlFor="age">Age: </label>
        <input type="number" name="age" onChange={(e) => setAge(e.target.value)}/>
        <label htmlFor="country">Country: </label>
        <input type="text" name="country" onChange={(e) => setCountry(e.target.value)}/>
        <label htmlFor="position">Position: </label>
        <input type="text" name="position" onChange={(e) => setPosition(e.target.value)}/>
        <label htmlFor="salary">Salary: </label>
        <input type="number" name="salary" onChange={(e) => setSalary(e.target.value)}/>
        <button>add empolyee</button>
      </div>
    </div>
  );
}

export default App;
