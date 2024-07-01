import styled from "styled-components";

export const Wrapped = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 480px) {
    background-color: #d6d9e6;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 80%;
  height: 70%;
  @media only screen and (max-width: 480px) {
    background-color: white;
    border-radius: 10px;
  }
`;

export const Thanks = styled.h1`
  color: #02295a;
`;

export const Image = styled.img``;

export const ThankText = styled.p`
  color: #9699ab;
  font-size: 14px;
  width: 70%;
  text-align: center;
  line-height: 20px;
`;
