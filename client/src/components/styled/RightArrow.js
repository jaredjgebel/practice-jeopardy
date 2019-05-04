import styled from "styled-components";
import ArrowRightCircle from "react-feather/dist/icons/arrow-right-circle";
import styles from "../styles/styles";

const RightArrow = styled(ArrowRightCircle)`
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

export default RightArrow;
