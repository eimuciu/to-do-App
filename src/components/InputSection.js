import React from "react";
import styled from "styled-components";
import Button from "./atoms/Button";
import Input from "./atoms/Input";
import ErrorMessage from "./atoms/ErrorMessage";

const InputSection = ({ onAdd, value, onChange, errors }) => (
  <Container>
    <Div>
      <ToDoInput type="text" value={value} onInput={onChange} />
      <ErrorMessage>{errors.empty}</ErrorMessage>
    </Div>
    <AddButton onClick={onAdd} text="Add" />
  </Container>
);

const Container = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  width: 80%;
  margin: 0 auto;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  width: 50%;
  height: 10%;
  transition: flex-grow 1s ease;
  @media (max-width: 768px) {
    flex-grow: 1;
  }
`;

const AddButton = styled(Button)`
  border-radius: 5px;
  font-size: 20px;
  height: 40px;
  padding: 0px 25px;
  transition: font-size 1s ease, padding 1s ease;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0px 15px;
  }
`;

var ToDoInput = styled(Input)`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  font-size: 1.1rem;
  margin: 5px;
  text-align: center;
`;

export default InputSection;
