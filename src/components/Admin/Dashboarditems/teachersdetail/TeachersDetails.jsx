import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './TeachersDetails.module.css';
import { useNavigate } from 'react-router-dom';


export default function TeachersDetails() {
  const [teachersInfo, setTeachersInfo] = useState([]);

  const navigate = useNavigate();

  const handleRemoveTeacher = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5038/api/deleteteacher/${id}`);
      console.log(response.data);
      fetchTeachersData();
    } catch (error) {
      console.error('Failed to delete teacher', error);
    }
  };

  const handleUpdateTeacher = () => {
    navigate('/admin/updateteacher')
  }


  useEffect(() => {
    fetchTeachersData();
  }, []);

  const fetchTeachersData = async () => {
    try {
      const response = await axios.get('http://localhost:5038/api/getteachersdata');
      setTeachersInfo(response.data);
    } catch (error) {
      console.error('Failed to fetch teachers data', error);
      alert('Data fetch unsuccessful');
    }
  };

  return (
    <div className={Styles.maincontainer}>
      <table className={Styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Qualification</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Contact</th>
            <th>Age</th>
            <th>Action</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {teachersInfo.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.name}</td>
              <td>{teacher.qualification}</td>
              <td>{teacher.email}</td>
              <td>{teacher.experience}</td>
              <td>{teacher.salary}</td>
              <td>{teacher.contact}</td>
              <td>{teacher.age}</td>
              <td>
                <button onClick={() => handleRemoveTeacher(teacher._id)} className={Styles.btn}>Remove Teacher</button>
              </td>
              <td>
                <button onClick={handleUpdateTeacher} className={Styles.btn}>Edit Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}