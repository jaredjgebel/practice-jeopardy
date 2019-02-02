import React, { Component } from "react";
import Button from "./elements/Button";
import Answer from "./styled/Answer";

class ButtonContainer extends Component {
  constructor() {
    super();
    this.state = { visible: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { answer } = this.props;

    return (
      <div>
        <Button
          primary={false}
          display={this.state.visible}
          onClick={this.onClick}
        >
          {this.state.visible ? "BACK TO CLUE" : "REVEAL ANSWER"}
        </Button>
        <Answer display={this.state.visible}>{answer}</Answer>
      </div>
    );
  }
}

export default ButtonContainer;
