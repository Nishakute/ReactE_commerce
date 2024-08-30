
import './App.css';
import Navbar from './component/navbar';
import DataTable from './component/DataTable';

function App()
{
  const data = [
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
      email: 'john@gmail.com',
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
    },]
  
  return (
    <>
    
    <div>
    <Navbar></Navbar>
      <DataTable data={data} />
    </div>
    </>
  );
}

export default App;
