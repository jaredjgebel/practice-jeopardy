import styled from "styled-components";
import ArrowRightCircle from "react-feather/dist/icons/arrow-right-circle";
import styles from "../styles/styles";

const RightArrow = styled(ArrowRightCircle)`
  fill: ${({ disabled }) =>
    disabled ? styles.disabled.fill : styles.enabled.fill};
  stroke: ${({ disabled }) =>
    disabled ? styles.disabled.stroke : styles.enabled.stroke};

  :hover {
    fill: ${({ disabled }) =>
      disabled ? styles.disabledHover.fill : styles.enabledHover.fill};
    stroke: ${({ disabled }) =>
      disabled ? styles.disabledHover.stroke : styles.enabledHover.stroke};
  }
`;

export default RightArrow;
