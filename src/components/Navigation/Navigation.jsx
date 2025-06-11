import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
        Home
      </NavLink>
      <NavLink to="/teachers" className={({ isActive }) => isActive ? 'active' : ''}>
        Teachers
      </NavLink>
      <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
        Log in
      </NavLink>
      <NavLink to="/auth" className={({ isActive }) => isActive ? 'active' : ''}>
        Authorization
      </NavLink>
    </nav>
  );
};

export default Navigation;