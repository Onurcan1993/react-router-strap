import { Step, Circle, StepNumber, StepTitle, StepWrap } from "./side.styled";

export default function Steps({ primary, number, name }) {
  return (
    <Step>
      <Circle primary={primary}>{number}</Circle>
      <StepWrap>
        <StepNumber>Step {number}</StepNumber>
        <StepTitle>{name}</StepTitle>
      </StepWrap>
    </Step>
  );
}
