import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10&not=us').then(response => {
      console.log(response.data.results)
      setEmployees([...response.data.results])
    })
  }, [])
  return (
    <div className="App">
      <h2>Employees Directiory</h2>
      <table>
        <thead>
          <tr>
            <th># </th>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>

          </tr>
        </thead>
        {employees.map((employee, i) => {
        let birthday = new Date(employee.dob.date)
        return (

          <tr key={employee.email}>
            <td>{i + 1}</td>
            <td> <img src={employee.picture.medium} alt="" />
            </td>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{birthday.getMonth()}/{birthday.getDate()}/{birthday.getYear()}</td>


          </tr>

        )}
        )}
      </table>
    </div>
  );
}

export default App;


// cell: "0453-353-513"
// dob: {date: "1959-08-23T08:53:28.857Z", age: 62}
// email: "mark.miles@example.com"
// gender: "male"
// id: {name: "TFN", value: "585099906"}
// location: {street: {…}, city: "Mackay", state: "South Australia", country: "Australia", postcode: 9213, …}
// login: {uuid: "a9fb9881-a0f3-479a-b7ee-b42bb1784b74", username: "tinytiger719", password: "january", salt: "Qc8nCJOm", md5: "7d7b9581eecefb8334f498f77562ecff", …}
// name: {title: "Mr", first: "Mark", last: "Miles"}
// nat: "AU"
// phone: "07-1452-7429"
// picture:
// large: "https://randomuser.me/api/portraits/men/73.jpg"
// medium: "https://randomuser.me/api/portraits/med/men/73.jpg"
// thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg"
// __proto__: Object
