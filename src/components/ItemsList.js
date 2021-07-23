import React from "react";
import styled from "styled-components";
import Button from "./atoms/Button";
import Input from "./atoms/Input";

const ItemsList = ({ items, onCheck, onRemove }) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Container key={item}>
          <ToDoItem>
            {item.isChecked ? (
              <p>
                <strike>{item.text}</strike>
              </p>
            ) : (
              <p>{item.text}</p>
            )}
          </ToDoItem>
          <Div>
            <TickBox
              type="checkbox"
              checked={item.isChecked}
              onClick={() => onCheck(index)}
            />
          </Div>
          <Div>
            <RemoveButton onClick={() => onRemove(index)} text="x" />
          </Div>
        </Container>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(248, 229, 2233);
  padding: 10px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  min-height: 20vh;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: auto;
`;

const Div = styled.div`
  width: 25px;
  height: 25px;
  overflow-y: hidden;
  padding: 2px;
`;

const ToDoItem = styled.div`
  font-weight: bold;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  font-size: 1.1rem;
  border-radius: 0px;
`;

const RemoveButton = styled(Button)`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const TickBox = styled(Input)`
  height: 100%;
  width: 100%;
  cursor: pointer;
  margin: 0px;
`;

export default ItemsList;
