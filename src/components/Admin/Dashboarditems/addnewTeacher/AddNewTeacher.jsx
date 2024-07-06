import React, { useState } from 'react';
import axios from 'axios';
import Styles from './AddNewTeacher.module.css';


export default function AddNewTeacher() {
  const [teacherData, setTeacherData] = useState({
    name: '',
    qualification: '',
    email: '',
    experience: '',
    salary: '',
    contact: '',
    age: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({
      ...teacherData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5038/api/addnewteacher', teacherData);
      console.log(response.data); // Assuming the server returns a success message
      alert('New teacher added successfully');
      setTeacherData({
        name: '',
        qualification: '',
        email: '',
        experience: '',
        salary: '',
        contact: '',
        age: ''
      });
    } catch (error) {
      console.error('Failed to add new teacher', error);
      alert('Failed to add new teacher');
    }
  };


  return (
    <div className={Styles.maincontainer}>
      <h2>Add New Teacher</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={teacherData.name}
          onChange={handleChange}
          required
          className={Styles.inputfield}
        />

        <label>Qualification:</label>
        <input
          type="text"
          name="qualification"
          value={teacherData.qualification}
          onChange={handleChange}
          required
          className={Styles.inputfield}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={teacherData.email}
          onChange={handleChange}
          required
          className={Styles.inputfield}
        />

        <label>Experience:</label>
        <input
          type="text"
          name="experience"
          value={teacherData.experience}
          onChange={handleChange}
          required
          className={Styles.inputfield}
        />

        <label>Salary:</label>
        <input
          type="text"
          name="salary"
          value={teacherData.salary}
          onChange={handleChange}
          required
          className={Styles.inputfield}
        />

        <label>Contact:</label>
        <input
          type="text"
          name="contact"
          value={teacherData.contact}
          onChange={handleChange}
          required
          className={Styles.inputfield}
        />

        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={teacherData.age}
          onChange={handleChange}
          required
          className={Styles.inputfield}
        />

        <button type="submit" className={Styles.btn}>Add Teacher</button>
      </form>
    </div>
  );
}
