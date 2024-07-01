import React, { useState } from "react";
import { Container, GeneralDiv, Image } from "./side.styled";
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
      <Image src={backLogo} />
      <GeneralDiv>
        {steps.map((item, index) => (
          <Steps
            primary={index + 1 === state ? true : false}
            key={index}
            number={index + 1}
            name={item}
          />
        ))}
      </GeneralDiv>
    </Container>
  );
}
