import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { makeStyles } from "@material-ui/styles";
import "../../style/claims/Claims.css";

const steps = [
  { id: 1, label: "Step 1", below: "Services & Diagnosis" },
  { id: 2, label: "Step 2", below: "Providers" },
  { id: 3, label: "Step 3", below: "Patient" }, 
  { id: 4, label: "Step 4", below: "Attachments" },
  { id: 5, label: "Step 5", below: "Review" },
  { id: 6, label: "Step 6", below: "Submission" },
];

export default function Claims() {
  const useStyles = makeStyles(() => ({
    root: {
      "& .MuiStepIcon-active": { color: "red" },
      "& .MuiStepIcon-completed": { color: "green" },
   
    }
  }));

  const c = useStyles();
  return (
    <div className="grid-container">
      <div className="item2">
        <text
          style={{
            marginTop: "18px",
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "14px",
            fontStyle: "normal",
            marginLeft: "20px",
          }}
        >
          Viewing claims for:
        </text>
        <text
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "14px",
            fontStyle: "normal",
            marginLeft: "15px",
          }}
        >
          Tin:
        </text>
        <text
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "14px",
            fontStyle: "normal",
            marginLeft: "326px",
          }}
        >
          Plan Type:
        </text>
      </div>

      <div className="item5">
        <text
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "18px",
            fontStyle: "normal",
            marginLeft: "16px",
          }}
        >
          Service & Diagnosis
        </text>
      </div>

      <div className="item8">
        <text
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "30px",
            fontStyle: "normal",
            marginLeft: "16px",
          }}
        >
          {" "}
          Create a Professional Claim{" "}
        </text>
        <Box  marginTop="30px" sx={{ width: "100%" }}>
          <Stepper className={c.root} activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label.id}>
                <StepLabel>{label.label}</StepLabel>

                <text
                  style={{
                    "position": "absolute",
                    "width": "53px",
                    "left": "16px",
                    "font-family": "Roboto",
                    "font-style": "normal",
                    "font-weight": "normal",
                    "font-size": "12px",
                    "line-height": "14px",
                    "text-align": "center",
                  }}
                >
                  {label.below}
                </text>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    </div>
  );
}
