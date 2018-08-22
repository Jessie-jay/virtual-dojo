import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import admin from './pictures/student3.png';
import video1 from './pictures/video1.png';
import video2 from './pictures/video2.png';
import video3 from './pictures/video3.png';
import video4 from './pictures/video4.png';
import video5 from './pictures/video5.png';
import video6 from './pictures/video6.png';
import { Container, Row, Col } from 'reactstrap';
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
                <NavItem style={{backgroundColor: "rgba(53, 143, 182, 0.61)"}}>
                    <NavLink href="./adminCourse"><img src={courseIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;Course</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="adminUser"><img src={usersIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;User</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="adminUpload"><img src={uploadIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;Upload</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="adminCategories"><img src={categoryIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;Create Categories</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><img src={settingIcon} className="icons" alt="Icon"/>&nbsp;&nbsp;Setting</NavLink>
                </NavItem>
                </Nav>
        </div>
        <div className="adminBody">
            <div className="adminSearch" >
                <strong><span>Admin Dash</span></strong> 
                <input className="search" placeholder="Search Training"/>
            </div>
            <Container> 
          <Row style={{width: "100%"}}>
          <Col sm={{ size: '3', offset: 1 }} className="video">
              <img src={video1} alt="content" className="content"/>
              <strong><p className="contentWrite">Exceptional Writing</p></strong>
              
          </Col>
          <Col sm={{ size: '3', offset: 1 }} className="video">
              <img src={video2} alt="content" className="content"/>
              <strong><p className="contentWrite">Artificial Intelligence</p></strong>
             
          </Col>
          <Col sm={{ size: '3', offset: 1 }} className="video">
              <img src={video3} alt="content" className="content"/> 
              <strong><p className="contentWrite">Project Management</p></strong>
              
          </Col>
        </Row>
        <Row style={{width: "100%"}}>
          <Col sm={{ size: '3', offset: 1 }} className="video">
              <img src={video4} alt="content" className="content"/> 
              <strong><p className="contentWrite">Business Law</p></strong>
           
          </Col>
          <Col sm={{ size: '3', offset: 1 }} className="video">
             <img src={video5} alt="content" className="content"/> 
             <strong><p className="contentWrite">Product Design</p></strong>
             
          </Col>
          <Col sm={{ size: '3', offset: 1 }} className="video">
               <img src={video6} alt="content" className="content"/> 
               <strong><p className="contentWrite">Software Development</p></strong>
              
          </Col>
        </Row>
        
      </Container>
            
        </div> 
    </div>
    );
  }
}

export default AdminCourse;