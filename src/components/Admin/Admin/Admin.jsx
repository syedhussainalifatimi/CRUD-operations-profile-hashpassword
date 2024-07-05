import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './Admin.module.css'
import { signInAdmin } from '../../Redux/adminSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState([]);
  const signInInfo = useSelector((state) => state.adminDetails.adminInfo);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get('http://localhost:5038/api/admindata');
        setAdminData(response.data);
      } catch (error) {
        console.error('Failed to fetch admin data', error);
        alert('Data fetch unsuccessful');
      }
    };
    fetchAdminData();
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();

    if (adminData.length > 0) {
      const adminemail = adminData[0].email;
      const adminpassword = adminData[0].password;

      if (adminemail === email && adminpassword === password) {
        dispatch(signInAdmin());
      }
    }
  };

  useEffect(() => {
    if (signInInfo.signin) {
      navigate('/admin/dashboard');
    }
  }, [signInInfo, navigate]);

  return (
    <div className={Styles.maincontainer}>
      <div className={Styles.heading}>
        <h1>Welcome to Admin Panel</h1>
        <h5>Sign In As Admin Using Email and Password</h5>
      </div>
      <div className={Styles.inputform}>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className={Styles.inputfield}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className={Styles.inputfield}
          />
          <button type="submit" className={Styles.btn}>Sign In</button>
        </form>
      </div>
    </div>
  );
}
