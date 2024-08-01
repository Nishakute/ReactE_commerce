import { useState, useEffect } from "react";
import React from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


function UserProfile(){

  const [user,setuser] = useState();
  const {id} = useParams();
  console.log(id)
  const [error,seterror]=useState();
  

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setuser(response.data);
        console.log(response.data);
      })
      .catch(error => {
        seterror(error);
      });
  },[]);


  if (error) return <p>Error fetching data</p>;
  


  return (
    <div>
     <h2>User Profile</h2>
    
     <div className="card-body">
     <h5 className="card-title">{user.name}</h5>
     <p className="card-text"><strong>Email:</strong> {user.email}</p>
     <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
     </div>

    </div>
  );
}
export default UserProfile;
