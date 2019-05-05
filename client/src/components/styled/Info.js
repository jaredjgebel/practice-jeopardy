import React, { Component } from "react";
import styled from "styled-components";
import Info from "react-feather/dist/icons/info";
import styles from "../styles/styles";

const StyledIcon = styled(Info)`
  fill: ${styles.enabled.fill};
  stroke: ${styles.enabled.stroke};
  padding: 10px 20px;
  min-height: 100px;
  min-width: 100px;

  font-size: 14px;
  line-height: 18px;
  text-align: center;
  align-self: center;

  :hover {
    fill: ${styles.enabledHover.fill};
    stroke: ${styles.enabledHover.stroke};
  }
`;

const InfoText = styled.div`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  font-style: italic;
  font-size: 20px;
  padding: "10px 10px";
`;

class StyledInfo extends Component {
  constructor() {
    super();

    this.state = { visible: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick(prevState) {
    this.setState({ visible: !prevState });
  }

  render() {
    const { visible } = this.state;
    const { children } = this.props;

    return (
      <>
        <StyledIcon size="75px" onClick={() => this.onClick(visible)} />
        <InfoText visible={visible}>{children}</InfoText>
      </>
    );
  }
}

export default StyledInfo;
