import React from "react";
import "./SideNav.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SideNav() {
  return (
    <div className="sidenav">
          <a href="/Claims">Eligibility</a>
          <a href="/Claims">Patients</a>
          <a href="/Claims">Authorizations</a>
          <a href="/Claims">Claims</a>
          <a href="/Claims">Messages</a>
    </div>
  );
}
