import React from "react";
import styled from "styled-components/macro";

const TextArea = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: ${props => props.theme.backgroundColor};
  font-size: 50px;
  color: white;
  min-height: ${props => props.theme.height};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .text {
    max-width: calc(100% - 20vh);
    text-align: center;
  }
`;

TextArea.defaultProps = {
  theme: {
    backgroundColor: "whitesmoke",
    height: "20rem"
  }
};

const TextCanvas = ({ children }) => (
  <TextArea>
    <div className="text">{children}</div>
  </TextArea>
);

export default TextCanvas;
