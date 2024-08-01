import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios'


function Userdetils() {
  const [users, setuser] = useState([]);
  const [error,setError]=useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response)
        setuser(response.data);
      })
      .catch((error) => {
        setError(error); 
      });
  }, []);
  if (error) return <p>Error fetching data</p>

  

  return (
    <div>
      <h2>USER List</h2>
      <ul className="list-group">
        {users.map(user=>(
            <li key={user.id} className="list-group-item">
                 <Link to={`/user/${user.id}`}>{user.name}</Link> 
            </li>
        ))}
      </ul>
    </div>
  );
}


export default Userdetils;
