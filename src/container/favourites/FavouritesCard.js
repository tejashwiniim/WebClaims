import React from "react";
import Card from "react-bootstrap/Card";

export function FavouritesCard(props) {
  const { name, proc, dx } = props;
  return (
    <Card border=" 1px solid #E5E5E5" style={{ width: "406px" }}>
     
         
      <Card.Body
        style={{
          height: 130,
          textAlign: "left",
          fontFamily: "Roboto",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          backgroundColor: "white",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
  
       
          <b
          style={{
            marginTop: 40,
            marginLeft: 5,
            textAlign: "left",
            fontFamily: "Roboto",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "400",
          }}
        > Name: {name}</b>
    <br></br>
       
        <b
          style={{
            marginTop: 40,
            marginLeft: 5,
            textAlign: "left",
            fontFamily: "Roboto",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "400",
          }}
        >
          Proc: {proc}
        </b>
        <br></br>
        <b
          style={{
            marginTop: 45,
            marginLeft: 5,
            textAlign: "left",

            fontFamily: "Roboto",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "400",
          }}
        >
          Dx: {dx}
        </b>
        <br></br>
        <a href="#">View Details &gt;&gt; </a>
      </Card.Body>
    </Card>
  );
}
