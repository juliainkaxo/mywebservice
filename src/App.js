import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = 'http://localhost/mywebservice/index.php';

function App() {
  const [names, setNames] = useState([]);

  useEffect(getData, [])

  function getData() {
    axios.get(URL)
      .then((response) => {
        setNames(response.data);
      }).catch(error => {
        alert(error);
      });
  }

  return (
    <div style={{ padding: 30 }}>
      <h3>Names</h3>
      <ol>
        {names.map(person => (
          <li>{person.lastname}, {person.firstname}, {person.email}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
