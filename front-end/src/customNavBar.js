import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { InputGroup, Button, Input } from 'reactstrap';
import './customNavBar.css'; 
import {Link} from 'react-router-dom';
import logo from './pictures/logo2.png';


export default class CustomNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="body">
     <Nav pills>
         
        <img src={logo} className="logo" alt="logo"/>
        <InputGroup style={{ width: "504px",paddingLeft: "140px"}}> 
                
                <Input style={{backgroundColor: "rgba(255, 255, 255, 0.7)", marginLeft:"5px"}} 
                placeholder= "search courses"/> 
                
          </InputGroup> 

                <NavItem style={{marginTop:'8px', marginLeft: "78px"}}> 
                    <Link to="/categories">Categories</Link>
                  </NavItem>
               <NavItem>
                    <NavLink href="#">Contact us</NavLink>
                  </NavItem>
                  <NavItem  style={{marginTop:'8px'}}> 
                    <Link to="/signIn">Sign In</Link>
                  </NavItem>
                  
                <Button outline color="primary" style={{ backgroundColor: 'white', position: "absolute",
                  top: "7px", right: "120px", borderWidth: '1.5px', borderRadius:"10px"}}><Link to="/signUp">Sign Up</Link>
                 </Button> 
                 
              </Nav>
             
                
      </div>
    );
  }
}



