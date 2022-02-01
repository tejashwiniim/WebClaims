import React from "react";
import Card from "react-bootstrap/Card";
import FavoriteIcon from '@mui/icons-material/Favorite';
export function FavouritesCard(props) {
  const { name, proc, dx } = props;
  return (
    <Card border=" 1px solid #E5E5E5" style={{ width: "406px", marginRight:20 }}>
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
<FavoriteIcon style={{position:"absolute",marginLeft:360,marginTop:-10, color:"#D9021B", width:20, height:19}}></FavoriteIcon>
       
          <b
          style={{
            marginTop: "20px",
            marginLeft: 5,
            textAlign: "left",
            fontFamily: "Roboto",
            fontSize: "12px",
            fontStyle: "normal",
            // fontWeight: "400",
          }}
        > {name}</b>
<br></br>
        <b
          style={{
            marginTop: "40px",
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
        <a style={{position:"absolute",textDecoration:"none", marginLeft:260,marginTop:25 }} href="#">View Details &gt;&gt; </a>
      </Card.Body>
    </Card>
  );
}
