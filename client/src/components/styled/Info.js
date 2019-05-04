import styled from "styled-components";
import Info from "react-feather/dist/icons/info";
import styles from "../styles/styles";

const StyledInfo = styled(Info)`
  fill: ${styles.enabled.fill};
  stroke: ${styles.enabled.stroke};
  padding: 10px;
`;

export default StyledInfo;
