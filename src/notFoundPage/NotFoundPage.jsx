import React from "react";
import styled from "styled-components";

const NotPage = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 48px;
  color: black;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NotFoundPage() {
  return <NotPage>404 Error Not Found Page</NotPage>;
}
