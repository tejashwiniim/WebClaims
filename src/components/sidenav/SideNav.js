import React from "react";
import "./SideNav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';

import { NavLink } from "react-router-dom";
export default function SideNav() {

  return (
    <div className="sidenav">
       <a  href="/Claims">
        <FactCheckOutlinedIcon></FactCheckOutlinedIcon> Eligibility
      </a>
      <a  href="/Claims">
        <PeopleAltOutlinedIcon
          style={{ color: "white" }}
        ></PeopleAltOutlinedIcon>{" "}
        Patients
      </a>
      <a  href="/Claims">
        <TaskOutlinedIcon></TaskOutlinedIcon> Authorizations
      </a>
      <a  href="/Claims">
      <RequestQuoteOutlinedIcon></RequestQuoteOutlinedIcon> Claims
      </a>
      <a  href="/Claims">
        <EmailOutlinedIcon></EmailOutlinedIcon> Messages
      </a> 

      {/* <NavLink exact to="/Claims">
      <FactCheckOutlinedIcon></FactCheckOutlinedIcon>   Eligibility
        </NavLink>
        <NavLink exact to="/Claims">
        <PeopleAltOutlinedIcon
          style={{ color: "white" }}
        ></PeopleAltOutlinedIcon>    Patient
        </NavLink>
        <NavLink exact to="/Claims">
        <TaskOutlinedIcon></TaskOutlinedIcon>  Authorizations
        </NavLink>
        <NavLink exact to="/Claims">
        <RequestQuoteOutlinedIcon></RequestQuoteOutlinedIcon>  Claims
        </NavLink>
        <NavLink exact to="/Claims">
        <EmailOutlinedIcon></EmailOutlinedIcon>   Messages
        </NavLink> */}
    </div>
  );
}
