import React from "react";
import "./Dashboard.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from "@mui/material/Typography";
import { InputLabel } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    spacing: 4,
    width: "180px",
    height: 40,
  },
  selectEmpty: {
    spacing: 2,
  },
  select: {
    height: "40px",
    width: "180px",
    border: "1px solid #D8D8D8",
    boxSizing: "border-box",
    borderRadius: 5,
  },
  inputLabel: {
    fontSize: "12px",
    alignSelf: "center",
    fontFamily: "Roboto",
    fontStyle: "normal",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="grid-container">
      <div className="item2">
        <Typography
          variant="h2"
          fontSize="12px"
          fontStyle="normal"
          marginLeft="19px"
          marginTop="12px"
          fontFamily="Roboto"
          fontWeight="400"
        >
          Viewing Claims for: Tin:
        </Typography>

        <FormControl
          style={{
            backgroundColor: "white",
            width: "180px",
            marginLeft: 134,
            marginTop: 15,
          }}
        >
          <InputLabel
            className={classes.inputLabel}
            ref={inputLabel}
            id="demo-simple-select-label"
          >
            123456789
          </InputLabel>
          <Select
            className={classes.select}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            labelWidth={labelWidth}
            border="none"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          style={{
            backgroundColor: "white",
            width: "180px",
            marginLeft: 19,
            marginTop: 15,
          }}
        >
          <InputLabel
            className={classes.inputLabel}
            id="demo-simple-select-label"
          >
            Oklahama Complete
          </InputLabel>
          <Select
            className={classes.select}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            labelWidth={labelWidth}
            borderColor="white"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Typography
        style={{
          position: "absolute",
          width: "206px",
          "font-family": "Roboto",
          "font-size": "18px",
          "font-style": "normal",
          "font-weight": "normal",
          "letter-spacing": "0em",
          "text-align": "left",
          marginTop: "132px",
          marginLeft: "220px",
          height: "36px",
          backgroundColor: "white",
        }}
      >
        Claims
      </Typography>
      <CardGroup style={{ marginTop: "190px" }}>
        <Row>
          <Col xl={4}>
            <Card
              border=" 1px solid #DDDDDD"
              style={{ width: "406px", marginLeft: "220px" }}
            >
              <Card.Header
                style={{
                  "font-family": "Roboto",
                  "font-size": "14px",
                  "font-style": "normal",
                  "font-weight": "400",
                  "line-height": "16px",
                  backgroundColor: "#E0EBF0",
                }}
              >
                Create Claims
              </Card.Header>
              <ListGroup
                style={{
                  "font-family": "Roboto",
                  "font-size": "12px",
                  "font-style": "normal",
                  "font-weight": "400",
                  "line-height": "14px",
                  "letter-spacing": "0px",
                  "text-align": "left",
                  backgroundColor: "#E0EBF0",
                }}
                variant="flush"
              >
                <ListGroup.Item
                  style={{
                    height: "35px",
                  }}
                >
                  <Link to="/Claims" style={{ color: "#267298" }}>
                    CMS 1500 / Professional
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    height: "35px",
                  }}
                >
                  <Link to="/Claims" style={{ color: "#267298" }}>
                    CMS UB-04 / Institutional
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    height: "35px",
                  }}
                >
                  <Link to="/Claims" style={{ color: "#267298" }}>
                    Recurring Claim
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    height: "35px",
                  }}
                >
                  <Link to="/Claims" style={{ color: "#267298" }}>
                    Upload EDI
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xl={4}>
            <Card
              style={{
                position: "absolute",
                width: "406px",
                marginLeft: 410,
                height: "175px",
              }}
            >
              <Card.Header
                style={{
                  "font-family": "Roboto",
                  "font-size": "14px",
                  "font-style": "normal",
                  "font-weight": "400",
                  "line-height": "16px",
                  backgroundColor: "#E0EBF0",
                }}
              >
                Search Claims
              </Card.Header>
              <Card.Body>
                <TextField
                  style={{
                    width: "346px",
                    height: "40px",
                    fontSize: "12px",
                  }}
                  id="outlined-basic"
                  label="Enter Claim Number or Member Information"
                  variant="outlined"
                />
                <Button
                  type="submit"
                  style={{
                    width: "106px",
                    height: "40px",
                    backgroundColor: "#005986",
                    color: "white",
                    marginTop: "30px",
                    marginLeft: 140,
                  }}
                  sx={{ borderRadius: 28 }}
                >
                  Search
                </Button>
                <Typography
                  style={{
                    position: "absolute",
                    marginLeft: 293,
                    "font-family": "Roboto",
                    "font-style": "normal",
                    "font-weight": "normal",
                    "font-size": "12px",
                    "line-height": "14px",
                    "text-align": "right",
                    color: "#267298",
                  }}
                >
                  Advanced Search
                </Typography>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card
              style={{
                position: "absolute",
                width: "406px",
                marginLeft: 600,
                height: "175px",
              }}
            >
              <Card.Header
                style={{
                  "font-family": "Roboto",
                  "font-size": "14px",
                  "font-style": "normal",
                  "font-weight": "400",
                  "line-height": "16px",
                  backgroundColor: "#E0EBF0",
                }}
              >
                Manage Finances
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item
                  style={{
                    height: "70px",
                  }}
                >
                  <Typography
                    style={{
                      position: "absolute",
                      marginLeft: "10px",
                      marginTop: "22px",
                      "font-family": "Roboto",
                      "font-style": "normal",
                      "font-weight": "normal",
                      "font-size": "12px",
                      "line-height": "14px",
                      "text-align": "right",
                      color: "#267298",
                    }}
                  >
                    Paid Claims
                  </Typography>
                  <TextField
                    style={{
                      marginLeft: 85,
                      height: 2,
                      marginRight: 120,
                    }}
                    id="outlined-basic"
                    label="55"
                    variant="outlined"
                  />
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    height: "70px",
                  }}
                >
                  <Typography
                    style={{
                      position: "absolute",
                      marginLeft: "10px",
                      marginTop: "9px",
                      "font-family": "Roboto",
                      "font-style": "normal",
                      "font-weight": "normal",
                      "font-size": "12px",
                      "line-height": "14px",
                      "text-align": "right",
                      color: "#267298",
                    }}
                  >
                    Payment History / Check #s
                  </Typography>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </CardGroup>
      <Typography
        variant="h6"
        style={{
          position: "absolute",
          "font-family": "Roboto",
          "font-size": "18px",
          "font-style": "normal",
          "font-weight": "normal",
          "letter-spacing": "0em",
          "text-align": "left",
          marginTop: 420,
          marginLeft: 220,
        }}
      >
        Claims Overview
      </Typography>
      <CardGroup
        style={{ position: "absolute", marginTop: 541, marginLeft: 220 }}
      >
        <Row>
          <Col sm={2}>
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

                  borderTop: "4px solid #FAB00A",
                }}
              >
                REJECTED CLAIMS
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
                  08
                </b>
              </Card.Header>
            </Card>
          </Col>
          <Col xl={2}>
            <Card style={{ width: "236px", marginLeft: 80 }}>
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
                  borderTop: "4px solid red",
                }}
              >
                DENIED CLAIMS
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
                  08
                </b>
              </Card.Header>
            </Card>
          </Col>
          <Col xl={2}>
            <Card style={{ width: "236px", marginLeft: 160 }}>
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
                  borderTop: "4px solid #A65FD8",
                }}
              >
                DISPUTED CLAIMS
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
                  08
                </b>
              </Card.Header>
            </Card>
          </Col>
          <Col xl={2}>
            <Card style={{ width: "236px", marginLeft: 240 }}>
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
                  borderTop: "4px solid #FDD813",
                }}
              >
                PENDING CLAIMS
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
                  08
                </b>
              </Card.Header>
            </Card>
          </Col>
          <Col xl={2}>
            <Card style={{ width: "236px", marginLeft: 320 }}>
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
                  borderTop: "4px solid #1D76ED",
                }}
              >
                DRAFT CLAIMS
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
                  08
                </b>
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </CardGroup>
      <Typography
        style={{
          position: "absolute",
          width: "206px",
          "font-family": "Roboto",
          "font-size": "18px",
          "font-style": "normal",
          "font-weight": "normal",
          "letter-spacing": "0em",
          "text-align": "left",
          marginTop: 712,
          marginLeft: 220,
          " height": "36px",
          backgroundColor: "white",
        }}
      >
        Favourites
      </Typography>
      <CardGroup style={{ marginTop: 760, position: "absolute" }}>
        <Row>
          <Col xl={2}>
            <Card style={{ width: 303, marginLeft: 220 }}>
              <Card.Body
                style={{
                  backgroundColor: "white",
                  height: 110,
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))",
                  borderRadius: "5px",
                }}
              >
                Name: <b> Favourite name here</b>
                <br></br>Proc: <br></br>
                Dx:
              </Card.Body>
            </Card>
          </Col>
          <Col xl={2}>
            <Card style={{ width: "303px", marginLeft: 330 }}>
              <Card.Body
                style={{
                  backgroundColor: "white",
                  height: 110,
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))",
                  borderRadius: "5px",
                }}
              >
                Name:<b> Favourite name here</b>
                <br></br>Proc: <br></br>
                Dx:
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3}>
            <Card style={{ width: "303px", marginLeft: 440 }}>
              <Card.Body
                style={{
                  backgroundColor: "white",
                  height: 110,
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))",
                  borderRadius: "5px",
                }}
              >
                Name: <b> Favourite name here</b>
                <br></br>Proc: <br></br>
                Dx:
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </div>
  );
}
