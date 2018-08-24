import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import admin from './pictures/student3.png';
import dashIcon from './pictures/dashIcon.png';
import courseIcon from './pictures/courseIcon.png';
import usersIcon from './pictures/usersIcon.png';
import uploadIcon from './pictures/uploadIcon.png';
import categoryIcon from './pictures/categoryIcon.png';
import settingIcon from './pictures/settingIcon.png';
import fileUpload from './pictures/fileUpload.png';
// import uploadVideo2 from './pictures/uploadVideo2.png';  
import uploading from './pictures/uploadVideo.png';
import './adminDash.css';


class AdminUpload extends Component { 
  render() { 
    return ( 
      <div className="adminPage">
        <div className="adminHeading">
            <div className="adminName"><strong><p >Nnenna Admin<br/> Logout</p></strong></div>
            <img src={admin} className="adminPic" alt="admin"/>
        </div>
        <div className="adminNav">
                <Nav vertical>
                <NavItem> 
                    <NavLink href="./adminDash"><img src={dashIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;Dash</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./adminCourse"><img src={courseIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;Course</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="adminUser"><img src={usersIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;User</NavLink>
                </NavItem>
                <NavItem style={{backgroundColor: "rgba(53, 143, 182, 0.61)"}}>
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
            <div className="adminSearch"> 
                <strong><span>Upload videos</span></strong>  
                <input className="search" placeholder="Search"/> 
            </div> 
           <div> 
                <div className="uploadBox"><img src={fileUpload} alt="uploadVideo" /> 
                <button className="chooseFile" style={{borderRadius: "10px"}} >Choose File</button>
   
                </div> 
                <div className="upload"><strong>Uploading<br/><br/></strong></div>
                <div style={{marginLeft: "400px"}}> 
                <div style={{float: "left"}}><img src={uploading} alt="uploading"/></div>
                <div style={{fontSize: "12px", float:"left", paddingLeft:"20px",width: "219px"}}>video 39mb<br/>
                <div className="load"/><div className="notload"/><br/>79% done</div> 
                </div>
           </div>
      
        </div> 
    </div>
    );
  }
}

export default AdminUpload;