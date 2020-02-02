import React from 'react';
import {NavLink} from 'react-browser-router';

const NavTab = () => {
    return (
      <div>
        <NavLink to="/" activeClassName="selected">
          Home
        </NavLink>
        <NavLink to="/notHome" activeClassName="selected">
          notHome
        </NavLink>
        <NavLink to="/notHome" activeClassName="selected">
          notHome
        </NavLink>
        <NavLink to="/notHome" activeClassName="selected">
          notHome
        </NavLink>
      </div>
    );
}
export default NavTab;