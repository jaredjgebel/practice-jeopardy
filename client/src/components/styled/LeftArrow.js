import styled from "styled-components/macro";
import ArrowLeftCircle from "react-feather/dist/icons/arrow-left-circle";
import styles from "../styles/styles";

const LeftArrow = styled(ArrowLeftCircle)`
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

export default LeftArrow;
