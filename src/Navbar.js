import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div>
     
      <div className="sidenav">
      
        <NavLink exact to="/Claims">
          Eligibility
        </NavLink>
        <NavLink exact to="/Claims">
          Patient
        </NavLink>
        <NavLink exact to="/Claims">
          Authorizations
        </NavLink>
        <NavLink exact to="/Claims">
          Claims
        </NavLink>
        <NavLink exact to="/Claims">
          Messages
        </NavLink>
      </div>
    
    </div>
  );
}
