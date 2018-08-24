import React, { Component } from 'react';
import './profile.css';

class Profile extends Component { 
    render() { 
      return (
          <div>
              <div className="adminSearch"> 
                 <input className="search" placeholder="search courses" style={{width: "400px"}}/> 
            </div>
            <div className="profile">
                <div className="row1">
                    <div className="photo"></div>
                    <div className="details"></div>
                </div>
                <div className="row2">
                    <div className="row2a"></div>
                    <div className="row2b"></div>
                </div>
            </div>
        </div>
      )
    }
}

export default Profile;