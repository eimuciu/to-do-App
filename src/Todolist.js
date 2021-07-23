import React from "react";
import ItemsList from "./components/ItemsList";
import InputSection from "./components/InputSection";
import Header from "./components/atoms/Header";
import styled from "styled-components";

export function validateInput(values) {
  let errors = {};
  if (values.length === 0) {
    errors.empty = "Text field is empty";
    errors.isValid = false;
  }
  if (Object.keys(errors).length === 0) {
    errors.isValid = true;
  }
  return errors;
}

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: [{ text: "To do...", isChecked: false }],
      errors: {},
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.check = this.check.bind(this);
  }

  changeHandler(event) {
    const { value } = event.target;
    this.setState({ ...this.state, value });
  }

  add() {
    if (!validateInput(this.state.value).isValid) {
      this.setState({ ...this.state, errors: validateInput(this.state.value) });
    } else {
      const itemToAdd = [
        ...this.state.items,
        { text: this.state.value, isChecked: false },
      ];

      this.setState({ ...this.state, items: itemToAdd, value: "", errors: {} });
    }
  }

  check(index) {
    const itemsCopy = this.state.items.map((item, indx) => {
      return indx === index ? { ...item, isChecked: !item.isChecked } : item;
    });
    this.setState({ ...this.state, items: itemsCopy });
  }

  remove(index) {
    const itemsCopy = this.state.items.slice();
    itemsCopy.splice(index, 1);
    this.setState({ ...this.state, items: itemsCopy });
  }

  render() {
    return (
      <Container>
        <Header text="To do list" />
        <h2 style={{ margin: "0px", padding: "5px" }}>
          Add the item to your list
        </h2>
        <InputSection
          onAdd={this.add}
          value={this.state.value}
          onChange={this.changeHandler}
          errors={this.state.errors}
        />
        <ItemsList
          items={this.state.items}
          onRemove={this.remove}
          onCheck={this.check}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 20px;
  text-align: center;
  margin: 40px auto;
  width: 80%;
  background-color: rgb(213, 218, 230);
  border-radius: 5px;
`;

export default Todolist;
