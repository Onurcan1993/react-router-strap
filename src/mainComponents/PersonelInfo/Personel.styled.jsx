import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px;
  @media only screen and (max-width: 480px) {
    width: 80%;
    padding: 20px 10px;
    height: 75%;
    position: absolute;
    top: 20%;
    left: 10%;
    background-color: white;
    border-radius: 10px;
  }
`;

export const PersonelTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 25px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 0px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: #02295a;
`;

export const Explanation = styled.p`
  color: #9699ab;
  font-size: 12px;
  margin-top: 10px;
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #02295a;
  justify-content: flex-start;
  @media only screen and (max-width: 480px) {
    justify-content: space-between;
    font-size: 12px;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px;
  background-color: #02295a;
  color: #f0f6ff;
  width: 25%;
  align-self: self-end;
  margin-top: 70px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #175eb3;
  }
  transition: 0.5s;
  @media only screen and (max-width: 480px) {
    width: 30%;
  }
`;
