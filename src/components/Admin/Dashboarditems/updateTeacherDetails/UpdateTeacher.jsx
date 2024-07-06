import React, { useState } from 'react';
import axios from 'axios';
import Styles from './UpdateTeacher.module.css';

export default function UpdateTeacher() {
  const [teacherEmail, setTeacherEmail] = useState('');
  const [updatedQualification, setUpdatedQualification] = useState('');
  const [updatedSalary, setUpdatedSalary] = useState('');
  const [updatedContact, setUpdatedContact] = useState('');
  const [updatedExperience, setUpdatedExperience] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:5038/api/updateteacher/${teacherEmail}`, {
        qualification: updatedQualification,
        experience: updatedExperience,
        salary: updatedSalary,
        contact: updatedContact
      });

      console.log(response.data); // Log the response from the server

      // Reset form fields after successful update
      setTeacherEmail('');
      setUpdatedQualification('');
      setUpdatedSalary('');
      setUpdatedContact('');
      setUpdatedExperience('');

      // Optionally, display a success message or perform any other actions after update
    } catch (error) {
      console.error('Failed to update teacher:', error);
      // Handle error scenarios, such as displaying an error message to the user
    }
  };

  return (
    <div>
      <div className={Styles.maincontainer}>
        <h2>Update Teacher</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={teacherEmail}
            onChange={(e) => { setTeacherEmail(e.target.value); }}
            required
            className={Styles.inputfield}
          />
          <label>Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={updatedQualification}
            onChange={(e) => { setUpdatedQualification(e.target.value); }}
            required
            className={Styles.inputfield}
          />

          <label>Experience:</label>
          <input
            type="text"
            name="experience"
            value={updatedExperience}
            onChange={(e) => { setUpdatedExperience(e.target.value); }}
            required
            className={Styles.inputfield}
          />

          <label>Salary:</label>
          <input
            type="text"
            name="salary"
            value={updatedSalary}
            onChange={(e) => { setUpdatedSalary(e.target.value); }}
            required
            className={Styles.inputfield}
          />

          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={updatedContact}
            onChange={(e) => { setUpdatedContact(e.target.value); }}
            required
            className={Styles.inputfield}
          />

          <button type="submit" className={Styles.btn}>Update Teacher</button>
        </form>
      </div>
    </div>
  );
}
