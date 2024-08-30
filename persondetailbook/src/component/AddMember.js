import React from 'react';
import { useState,useEffect } from 'react';
import './Addmember.css';
import { Modal} from 'react-bootstrap';

const AddMember = ({ handleData }) => {
    const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    fName: '',
    lName:'',
    status: '',
    role: '',
    email: '',
    teams: '',
  });

  const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
useEffect(()=>{
    setShow(true);
},[])

const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'teams' ? value.split(',').map(team => team.trim()) : value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleData(formData);
    console.log(46,formData);
    setFormData({ fName: '', lName:'', status: '', role: '', email: '', teams: '' }); // Clear the form
    handleClose(); // Close the modal after submission
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        + Add Member
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fName"
              value={formData.fName}
              onChange={handleChange}
              placeholder="Name"
            
            />
             <input
              type="text"
              name="lName"
              value={formData.lName}
              onChange={handleChange}
              placeholder="LastName"
              
            />
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Role"
              required
            />
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              placeholder="Status"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="teams"
              value={formData.teams}
              onChange={handleChange}
              placeholder="Team"
             
            />
            <button type="submit" className="btn btn-primary">Add Member</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddMember