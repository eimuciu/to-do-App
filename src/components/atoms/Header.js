import React from "react";
import styled from "styled-components";

const Header = ({ text }) => (
  <Div>
    <H1>{text}</H1>
  </Div>
);

const Div = styled.div`
  text-align: center;
  width: 100%;
`;

const H1 = styled.h1`
  margin: 0px;
  padding: 5px;
`;

export default Header;
