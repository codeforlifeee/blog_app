import React from "react";
import "../Dashboard/dashboardcss.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CategoryIcon from '@mui/icons-material/Category';
import QueueIcon from '@mui/icons-material/Queue';
import AddCommentIcon from '@mui/icons-material/AddComment';
import LogoutIcon from '@mui/icons-material/Logout';

const Dashboard = () => {
  

  const logoutHandler=()=>{
    localStorage.clear();
    
  }


  return (
    <div className="container">
      <div className="sideNav">
        <div className="logoContainer">
          <img className='logo' src={require('../../assets/logo.png') } alt="LOGO"/>
          <h1 className='logoheading'>Blog App</h1>
          
        </div>
        <Link to=''style={{backgroundColor:'orange'}}className='link'><DashboardIcon/><span style={{marginLeft:'10px'}}>Dashboard</span></Link>
        <Link to='/admin/dashboard/blog-list'className='link'><EditNoteIcon/><span style={{marginLeft:'10px'}}>Blog List</span></Link>
        <Link  to='/admin/dashboard/add-blog'className='link'><AddBoxIcon/><span style={{marginLeft:'10px'}}>Add Blog</span></Link>
        <Link to='/admin/dashboard/category-list'className='link'><CategoryIcon/><span style={{marginLeft:'10px'}}>Category List</span></Link>
        <Link to='/admin/dashboard/addcategory' className='link'><QueueIcon/><span style={{marginLeft:'10px'}}>Add Category</span></Link>
        <Link to='/admin/dashboard/comment'className='link'><AddCommentIcon/><span style={{marginLeft:'10px'}}>Comment</span></Link>
        <Link to='/admin/login'className='logout-button' onClick={logoutHandler}><LogoutIcon/><span style={{marginLeft:'10px'}}>Logout</span></Link>
      </div>
      <div className="maincontent">
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
