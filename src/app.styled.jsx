import styled from "styled-components";

export const primary = {
  colors: {
    marineBlue: "#02295a",
    purplishBlue: "#473dff",
    pastelBlue: "#adbeff",
    lightBlue: "#bfe2fd",
    strawberryRed: "#ed3548",
  },
};

const neutral = {
  colors: {
    coolGray: "#9699ab",
    lightGray: "#d6d9e6",
    magnolia: "#f0f6ff",
    alabaster: "#fafbff",
    white: "#ffffff",
  },
};

export const Container = styled.div`
  width: 70vw;
  height: 70vh;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 100vw;
    flex-direction: column;
    height: 100vh;
    padding: 0;
    border-radius: 0;
    position: relative;
    background-color: #d6d9e6;
  }
`;
