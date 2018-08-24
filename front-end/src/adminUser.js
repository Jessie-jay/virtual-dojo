import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import admin from './pictures/student3.png';
import user1 from './pictures/user1.png';
import user2 from './pictures/user2.png';
import user3 from './pictures/user3.png';
import user4 from './pictures/user4.png';
import offline from './pictures/offline.png';
import online from './pictures/online.png'; 
import dashIcon from './pictures/dashIcon.png';
import courseIcon from './pictures/courseIcon.png';
import usersIcon from './pictures/usersIcon.png';
import uploadIcon from './pictures/uploadIcon.png';
import categoryIcon from './pictures/categoryIcon.png';
import settingIcon from './pictures/settingIcon.png';
import './adminDash.css';


class AdminCourse extends Component { 
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
                <NavItem style={{backgroundColor: "rgba(53, 143, 182, 0.61)"}}>
                    <NavLink href="adminUser"><img src={usersIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;User</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="adminUpload"><img src={uploadIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;Upload</NavLink>
                </NavItem>
                <NavItem>
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
                <input className="search" placeholder="Search"/>
            </div>
            <div className="table">
                <div className="tableHeading">
                    <div><strong>Image</strong></div>
                    <div><strong>Username</strong></div>
                    <div><strong>E-mail</strong></div>
                    <div><strong>Courses enrolled</strong></div> 
                    <div><strong>Status</strong></div>
                </div> 
                <div className="tableData">
                    <div><img src={user1} alt="user1"/></div>
                    <div>Mary Obi</div>
                    <div>maryobi013@yahoo.com</div>
                    <div>Real Estate</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<img src={online} className="circle" alt="offline"/>&nbsp;Online</div>

                    <div><img src={user2} alt="user1"/></div>
                    <div>Tobi Adebayo</div>
                    <div>adetobi@gmail.com</div>
                    <div>Web Development<br/>English Language</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<img src={offline} className="circle" alt="offline"/>&nbsp;Offline</div> 

                     <div><img src={user3} alt="user1"/></div>
                    <div>Esther Uzo</div>
                    <div>estheruzo@gmail.com</div>
                    <div>Product Design<br/>Artificial Intelligence</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<img src={online} className="circle" alt="offline"/>&nbsp;Online</div>

                     <div><img src={user4} alt="user1"/></div>
                    <div>Micheal Okpara</div>
                    <div>micky2013@yahoo.com</div>
                    <div>Project Management<br/>Mathemetics</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<img src={online} className="circle" alt="offline"/>&nbsp;Online</div>
                </div>
            </div>
        </div> 
    </div>
    );
  }
}

export default AdminCourse;