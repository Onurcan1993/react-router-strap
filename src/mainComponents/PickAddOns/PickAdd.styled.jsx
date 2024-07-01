import styled from "styled-components";

export const AddPlan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const AddPlanSubDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.active1 || props.active2 || props.active3 ? "#473dff" : "#9699ab"};
  cursor: pointer;
  background-color: ${(props) =>
    props.active1 || props.active2 || props.active3 ? "#f0f6ff" : "white"};
`;

export const CheckAndTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const AddPersonelTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const AddTitle = styled.h6`
  color: #02295a;
`;

export const AddExplanation = styled.p`
  font-size: 9px;
  color: #9699ab;
  margin-top: 5px;
`;

export const PlanPrice = styled.span`
  font-size: 10px;
  color: #473dff;
`;

export const NextOrPrevios = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
  @media only screen and (max-width: 480px) {
    margin-top: 40px;
    background-color: white;
    width: 100vw;
    padding: 20px;
    height: 10vh;
  }
`;

export const BackText = styled.p`
  color: #9699ab;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    color: #02295a;
  }
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    text-align: center;
    height: 30%;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px;
  background-color: #02295a;
  color: #f0f6ff;
  width: 25%;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #175eb3;
  }
  transition: 0.5s;
  @media only screen and (max-width: 480px) {
    width: 30%;
    font-size: 12px;
  }
`;
