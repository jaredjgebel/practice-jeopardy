import styled from "styled-components";
import ArrowLeftCircle from "react-feather/dist/icons/arrow-left-circle";
import styles from "../styles/styles";

const LeftArrow = styled(ArrowLeftCircle)`
  fill: ${props =>
    props.disabled ? styles.disabled.fill : styles.enabled.fill};
  stroke: ${props =>
    props.disabled ? styles.disabled.stroke : styles.enabled.stroke};
  :hover {
    fill: ${props =>
      props.disabled ? styles.disabledHover.fill : styles.enabledHover.fill};
    stroke: ${props =>
      props.disabled
        ? styles.disabledHover.stroke
        : styles.enabledHover.stroke};
  }
`;

export default LeftArrow;
