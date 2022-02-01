import React from "react";
import Card from "react-bootstrap/Card";

export function CreateClaimsCard(props) {
  const { title } = props;
  return (
    <Card
      border=" 1px solid #DDDDDD"
      style={{ width: "406px", marginRight: 20 }}
    >
      <Card.Header
        style={{
          height: 30,
          textAlign: "left",
          fontFamily: "Roboto",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          backgroundColor: "#E7E7E7",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        {title}
      </Card.Header>
      <Card.Body style={{height:170}}>
        
      </Card.Body>
    </Card>
  
  );
}
