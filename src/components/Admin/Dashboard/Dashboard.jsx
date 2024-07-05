import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutAdmin } from '../../Redux/adminSlice';
import { useNavigate } from 'react-router-dom';
import Styles from './Dashboard.module.css';


export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSignOut = () => {
    dispatch(signOutAdmin())
    navigate('/');
  }
  return (

    <div className={Styles.maincontainer}>
      <h1>Admin Panel</h1>
      <div className={Styles.dashboarditems}>
        <Link to='/admin/teachersdetails'>Teachers</Link>
        <Link to='/admin/addnewteacher'>Add New Teacher</Link>
        <button onClick={handleSignOut} className={Styles.btn}>Sign-Out</button>
      </div>
    </div>


  )
}
