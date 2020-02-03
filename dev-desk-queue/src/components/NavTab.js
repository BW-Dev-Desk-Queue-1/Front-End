import React from 'react';
import {NavLink} from 'react-browser-router';

const NavTab = () => {
    // Need some form of Home Page, Some Login/Logout Component for students/helpers, a Dashboard, and some Form Component for
    //Submitting a new ticket, will need a way to view all open tickets
    return (
      <div className='nav-container'>
        <NavLink to="/home" activeClassName="selected" className='nav'>
          Home
        </NavLink>
        <NavLink to="/dashboard" activeClassName="selected" className='nav'>
          Dashboard
        </NavLink>
        
      </div>
    );
}
export default NavTab;