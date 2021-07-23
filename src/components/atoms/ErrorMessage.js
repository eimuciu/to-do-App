import React from "react";
import styled from "styled-components";

const ErrorMessage = ({ children }) => (
  <Container>
    <Span>{children}</Span>
  </Container>
);

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  position: absolute;
  width: 100px;
  z-index: 1;
  left: 0px;
  background-color: #e85833;
  border-radius: 5px;
  color: white;
`;

export default ErrorMessage;
