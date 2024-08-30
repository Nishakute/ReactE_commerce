
import './App.css';
import Navbar from './component/navbar';
import DataTable from './component/DataTable';
import AddMember from './component/AddMember';
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App()
{
  const [data,setData] = useState([
    {
      fName: 'John',
      lName: 'Doe',
      DOB: '2000/12/03',
      Gender: 'male',
      nationality: 'Indian',
      contactNumber: '1234567890',
      email: 'john@gmail.com',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg/1200px-John_Doe%2C_born_John_Nommensen_Duchac.jpg',
      isActive: true,
      role: 'Product Manager',
      teams: ['Design', 'Product', 'Marketing']
    },
    {
      fName: 'Smith',
      lName: 'Tom',
      DOB: '2000/12/03',
      Gender: 'male',
      nationality: 'Indian',
      contactNumber: '1234567890',
      email: 'john1@gmail.com',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg/1200px-John_Doe%2C_born_John_Nommensen_Duchac.jpg',
      isActive: true,
      role: 'Product Manager',
      teams: ['Design', 'Product', 'Marketing', 'Fullstack Developer']
    },
    {
      fName: 'Emily',
      lName: 'Clark',
      DOB: '1995/07/20',
      Gender: 'female',
      nationality: 'American',
      contactNumber: '9876543210',
      email: 'emily.clark@example.com',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      isActive: true,
      role: 'Software Engineer',
      teams: ['Development', 'QA']
    },]);
    const handleData=((value)=>{
      setData([...data,value]);
    })

    const handleDelete = (email) => {
      setData(data.filter(data => data.email!== email));
    };
  return (
    <>
    
   
    <Navbar handleData={handleData}></Navbar>
    <DataTable data={data} handleDelete={handleDelete}/>
    {/* <DataTable handleDelete={handleDelete} /> */}
    <Routes>
    <Route path='/addmemeber' element={<AddMember/>}></Route>



    </Routes>

   
    </>
  );
}

export default App;
