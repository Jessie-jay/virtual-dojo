import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import admin from './pictures/student3.png';
import dashIcon from './pictures/dashIcon.png';
import courseIcon from './pictures/courseIcon.png';
import usersIcon from './pictures/usersIcon.png';
import uploadIcon from './pictures/uploadIcon.png';
import categoryIcon from './pictures/categoryIcon.png';
import settingIcon from './pictures/settingIcon.png';
import './adminDash.css';


class AdminCategory extends Component { 
  render() {
    return (
      <div className="adminPage">
        <div className="adminHeading">
            <div className="adminName"><strong><p >Nnenna Admin<br/> Logout</p></strong></div>
            <img src={admin} className="adminPic" alt="admin"/>
        </div>
        <div className="adminNav">
                <Nav vertical>
                <NavItem > 
                    <NavLink href="./adminDash"><img src={dashIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;Dash</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./adminCourse"><img src={courseIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;Course</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="adminUser"><img src={usersIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;User</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="adminUpload"><img src={uploadIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;Upload</NavLink>
                </NavItem>
                <NavItem style={{backgroundColor: "rgba(53, 143, 182, 0.61)"}}>
                    <NavLink href="adminCategory"><img src={categoryIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;Create Categories</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="adminSetting"><img src={settingIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;Setting</NavLink>
                </NavItem>
                </Nav>
        </div>
        <div className="adminBody">
            <div className="adminSearch" >
                <strong><span>Admin Dash</span></strong> 
                <input className="search" placeholder="Search Training"/>
            </div>
           
        </div> 
    </div>
    );
  }
}

export default AdminCategory;