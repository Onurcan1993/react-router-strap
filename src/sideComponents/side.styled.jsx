import styled from "styled-components";
import Logo from "../../public/vite.svg";

export const Container = styled.div`
  background-image: "url('${Logo}')";
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 100%;
  width: 35%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100vw;
    flex-direction: row;
    border-radius: 0;
    background-position: right 50% bottom 17%;
    height: 25vh;
    justify-content: center;
  }
`;

export const Step = styled.div`
  width: 80%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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

export const StepTitle = styled.h3`
  color: white;
  margin: 0;
  font-weight: 500;
`;
