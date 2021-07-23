import React from "react";
import styled from "styled-components";

const ErrorMessage = ({ children }) => (
  <Container>
    <Span>{children}</Span>
  </Container>
);

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Span = styled.span`
  background-color: #e85833;
  border-radius: 5px;
  color: white;
  width: 50%;
`;

export default ErrorMessage;
