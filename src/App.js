import React from 'react';
import { Routes, Route } from "react-router-dom";
import Admin from './components/Admin/Admin/Admin';
import TeachersDetails from './components/Admin/Dashboarditems/teachersdetail/TeachersDetails';
import AddNewTeacher from './components/Admin/Dashboarditems/addnewTeacher/AddNewTeacher';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import UpdateTeacher from './components/Admin/Dashboarditems/updateTeacherDetails/UpdateTeacher';

export default function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Admin/>}/>
      <Route path="/admin/dashboard" element={<Dashboard/>}/>
      <Route path="/admin/teachersdetails" element ={<TeachersDetails/>}/>
      <Route path="/admin/addnewteacher" element ={<AddNewTeacher/>}/>
      <Route path="/admin/updateteacher" element ={<UpdateTeacher/>}/>
    </Routes>      
    </div>
  )
}

