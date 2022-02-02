import React from "react";
import { ClaimsButton } from "../../components/button/ClaimsButton";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from "@mui/material/Typography";
import { Row, Col } from "react-bootstrap";
import { TextField } from "@mui/material";
import "./CreateClaims.css";
export function CreateClaims() {
  return (
    <div className="create-claims">
      <p>Claims</p>
      <CardGroup>
        <Row>
          <Col xl={4}>
            <Card className="card-style">
              <Card.Header className="cardheader"> Create Claims</Card.Header>
              <Card.Body>
                <a href="/Claims" style={{ color: "#267298" }}>
                  CMS 1500 / Professional
                </a>

                <a href="/Claims" style={{ color: "#267298" }}>
                  CMS UB-04 / Institutional
                </a>

                <a href="/Claims" style={{ color: "#267298" }}>
                  Recurring Claim
                </a>

                <a href="/Claims" style={{ color: "#267298" }}>
                  Upload EDI
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card className="card-style">
              <Card.Header className="cardheader">Search Claims</Card.Header>
              <Card.Body>
                <TextField
                  style={{
                    width: "300px",
                    height: "40px",
                    fontSize: "12px",
                  }}
                  id="outlined-basic"
                  label="Enter Claim Number or Member Information"
                  variant="outlined"
                />
                <ClaimsButton
                  style={{ marginLeft: "-200px", marginTop: "70px" }}
                >
                  SEARCH
                </ClaimsButton>
                <a
                  href="/Claims"
                  style={{
                    position: "absolute",

                    "font-family": "Roboto",
                    "font-style": "normal",
                    "font-weight": "normal",
                    "font-size": "12px",
                    "line-height": "14px",
                    "text-align": "right",
                    color: "#267298",
                    marginTop: 80,
                    marginLeft: 200,
                  }}
                >
                  Advanced Search
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card className="card-style">
              <Card.Header className="cardheader">Manage Claims</Card.Header>
              <Card.Body>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "12px",
                    color: "#3E93E6",
                    
                  }}
                >
                  Paid Claims
                </Typography>
                <TextField
                  label="55"
                  id="outlined-basic"
                  variant="outlined"
                  style={{ width: 75, minHeight: 10 , marginLeft:"80px", marginTop:"-20px"}}
                ></TextField>
                <a style={{
                    marginTop:20
                }} href="/Claims">Payment History / Check #s</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </div>
  );
}
