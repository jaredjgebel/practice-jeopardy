import styled from "styled-components/macro";
import Menu from "react-feather/dist/icons/menu";
import styles from "../styles/styles";

const MenuIcon = styled(Menu)`
  stroke: ${styles.enabled.stroke};
  align-self: center;
`;

export default MenuIcon;
