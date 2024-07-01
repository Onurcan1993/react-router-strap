import React, { useState } from "react";
import { Container } from "./side.styled";
import Steps from "./Steps";
import backLogo from "../../public/bg-sidebar-desktop.svg";

export default function Side({ state }) {
  const [steps, setSteps] = useState([
    "YOUR INFO",
    "SELECT PLAN",
    "ADD-ONS",
    "SUMMARY",
  ]);

  return (
    <Container>
      <img src={backLogo} style={{ width: "50px", height: "50px" }}></img>
      {steps.map((item, index) => (
        <Steps
          primary={index + 1 === state ? true : false}
          key={index}
          number={index + 1}
          name={item}
        />
      ))}
    </Container>
  );
}
