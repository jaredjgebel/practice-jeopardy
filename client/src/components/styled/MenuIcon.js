import styled from "styled-components";
import Menu from "react-feather/dist/icons/menu";
import styles from "../styles/styles";

const MenuIcon = styled(Menu)`
  stroke: ${styles.enabled.stroke};
  fill: ${styles.enabled.fill};
`;

export default MenuIcon;
