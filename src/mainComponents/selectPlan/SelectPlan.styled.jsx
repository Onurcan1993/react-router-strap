import styled from "styled-components";

export const Plan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70%;
`;

export const PlanBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: 70vh;
  }
`;

export const Arcade = styled.div`
  width: 50%;
  border: 1px solid ${(props) => (props.primary === 1 ? "#473dff" : "#d6d9e6")};
  background-color: ${(props) => (props.primary === 1 ? "#fafbff" : "white")};
  height: 100%;
  border-radius: 8px;
  padding: 15px 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid #473dff;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 33%;
    padding: 10px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }
`;

export const Advanced = styled.div`
  width: 50%;
  border: 1px solid ${(props) => (props.primary === 2 ? "#473dff" : "#d6d9e6")};
  background-color: ${(props) => (props.primary === 2 ? "#fafbff" : "white")};
  height: 100%;
  border-radius: 8px;
  padding: 15px 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid #473dff;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 33%;
    padding: 10px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }
`;

export const Pro = styled.div`
  width: 50%;
  border: 1px solid ${(props) => (props.primary === 3 ? "#473dff" : "#d6d9e6")};
  background-color: ${(props) => (props.primary === 3 ? "#fafbff" : "white")};
  height: 100%;
  border-radius: 8px;
  padding: 15px 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid #473dff;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 35%;
    padding: 10px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }
`;

export const Image = styled.img`
  @media only screen and (max-width: 480px) {
    width: 35px;
  }
`;

export const H3 = styled.h5`
  color: #02295a;
  margin-top: 40px;
  @media only screen and (max-width: 480px) {
    margin: 0;
    font-size: 15px;
  }
`;

export const Price = styled.span`
  color: #9699ab;
  font-size: 12px;
`;

export const MounthOrYear = styled.div`
  width: 100%;
  height: 30px;
  background-color: #f0f6ff;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  @media only screen and (max-width: 480px) {
    height: 50px;
    margin: 10px;
  }
`;

export const LeftText = styled.p`
  font-size: 11px;
  color: ${(props) => (props.active ? "#9699ab" : "#02295a")};
  margin-right: 15px;
  font-weight: bold;
  align-self: center;
  text-align: center;
  height: 5px;
`;

export const RightText = styled.p`
  font-size: 11px;
  color: ${(props) => (!props.active ? "#9699ab" : "#02295a")};
  margin-left: 15px;
  font-weight: bold;
  text-align: center;
  height: 5px;
`;

export const Click = styled.div`
  width: 7%;
  background-color: #02295a;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: ${(props) => (props.active ? "flex-end" : "flex-start")};
  height: 35%;
  cursor: pointer;
  -moz-border-radius: 15px; //for mozilla support
  -webkit-border-radius: 15px; //for chrome support
  border-radius: 15px;
  @media only screen and (max-width: 480px) {
    width: 10%;
  }
`;

export const Btn = styled.div`
  width: 30%;
  height: 70%;
  background-color: white;
  margin: 0 5px;
  border-radius: 50%;
`;

export const Free = styled.p`
  color: #02295a;
  font-size: 9px;
  margin-top: 10px;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    margin: 0 0 0 5px;
  }
`;

export const NextOrPrevios = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
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
  font-size: 14px;
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
  width: 20%;
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
