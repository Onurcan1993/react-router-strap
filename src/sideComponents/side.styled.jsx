import styled from "styled-components";
import Logo from "../../public/bg-sidebar-desktop.svg";

export const Container = styled.div`
  height: 100%;
  width: 35%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 480px) {
    width: 100vw;
    flex-direction: row;
    border-radius: 0;
    height: 25vh;
    justify-content: center;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  @media only screen and (max-width: 480px) {
    object-fit: cover;
    object-position: bottom;
  }
`;

export const Step = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  margin: 5px 0;
  @media only screen and (max-width: 480px) {
    flex-direction: row;
    margin: 0;
    width: 15%;
    justify-content: center;
    padding: 0;
    height: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const Circle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid white;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.primary ? "#02295a" : "white")};
  font-weight: bold;
  background-color: ${(props) => (props.primary ? "#adbeff" : null)};
  border: ${(props) => (props.primary ? "none" : null)};

  @media only screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    padding: 15px;
  }
`;

export const StepWrap = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const StepNumber = styled.span`
  color: #9699ab;
  font-size: 15px;
  font-weight: 400;
`;

export const StepTitle = styled.h6`
  color: white;
  margin: 0;
  font-weight: 500;
`;

export const GeneralDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  @media only screen and (max-width: 480px) {
    flex-direction: row;
    gap: 30px;
  }
`;
