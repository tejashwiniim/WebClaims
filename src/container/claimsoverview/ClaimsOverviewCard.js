import React from 'react';
import Card from "react-bootstrap/Card";

export function ClaimsOverviewCard(props) {
    const {title, value, borderTopColor} = props;
    return (
        <Card border=" 1px solid #DDDDDD" style={{ width: "236px" }}>
              <Card.Header
                style={{
                  height: 110,
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  backgroundColor: "white",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                  borderTop: `4px solid ${borderTopColor}`,
                }}
              >
                {title}
                <br></br>
                <b
                  style={{
                    marginTop: 40,
                    marginLeft: 5,
                    textAlign: "center",

                    fontFamily: "Roboto",
                    fontSize: "40px",
                    fontStyle: "normal",
                    fontWeight: "400",
                  }}
                >
                  {value}
                </b>
                <br></br>
                <a href='#'>View &gt;&gt; </a>
              </Card.Header>
            </Card>
    )
}