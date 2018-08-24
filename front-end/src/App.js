import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './home.js'; 
import ContactUs from './contactUs';
import SignIn from './signIn';
import SignUp from './signUp';
import Categories from './categories';
import Course from './course';
import AdminDash from './adminDash';
import AdminCourse from './adminCourse';
import AdminUser from './adminUser';
import AdminUpload from './adminUpload';
import AdminCategory from './adminCategory';
import AdminSetting from './adminSetting';
import Profile from './profile';
// import CustomNavbar from './customNavBar';
// import Footer from './footer';

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
          <div> 
          
            <Switch> 
                <Route exact path="/" component={Home} />
                <Route path="/categories" component={Categories} />
                <Route path="/course" component={Course} />
                <Route path="/contactUs" component={ContactUs} />
                <Route path="/signIn" component={SignIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/adminDash" component={AdminDash} />
                <Route path="/adminCourse" component={AdminCourse} />
                <Route path="/adminUser" component={AdminUser} />
                <Route path="/adminUpload" component={AdminUpload} />
                <Route path="/adminCategory" component={AdminCategory} />
                <Route path="/adminSetting" component={AdminSetting} />
                <Route path="/profile" component={Profile} />
              </Switch> 

         </div> 
         
      </BrowserRouter>
      
    );
  }
}

export default App;
