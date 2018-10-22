import React from "react";
import styled from "styled-components";

const TextArea = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: ${props => props.theme.backgroundColor};
  font-size: 50px;
  color: white;
  height: 20rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

TextArea.defaultProps = {
  theme: {
    backgroundColor: "whitesmoke"
  }
};

const TextCanvas = ({ children }) => <TextArea>{children}</TextArea>;

export default TextCanvas;
