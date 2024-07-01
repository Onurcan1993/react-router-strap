import React, { useState } from "react";
import { Container } from "./side.styled";
import Steps from "./Steps";

export default function Side({ state }) {
  const [steps, setSteps] = useState([
    "YOUR INFO",
    "SELECT PLAN",
    "ADD-ONS",
    "SUMMARY",
  ]);

  return (
    <Container>
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
