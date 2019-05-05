import styled from "styled-components";
import Menu from "react-feather/dist/icons/menu";
import styles from "../styles/styles";

const MenuIcon = styled(Menu)`
  stroke: ${styles.enabled.stroke};
  fill: ${styles.enabled.fill};
  min-height: 100px;
  min-width: 100px;
  align-self: center;
`;

export default MenuIcon;
