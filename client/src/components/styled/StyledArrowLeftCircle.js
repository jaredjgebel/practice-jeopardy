import styled from "styled-components";
import ArrowLeftCircle from "react-feather/dist/icons/arrow-left-circle";

const StyledArrowLeftCircle = styled(ArrowLeftCircle)`
  fill: ${props => (props.disabled ? "white" : "#020788")};
  stroke: ${props => (props.disabled ? "gray" : "white")};
  :hover {
    fill: ${props => (props.disabled ? "gray" : "white")};
    stroke: ${props => (props.disabled ? "gray" : "white")};
  }
`;

export default StyledArrowLeftCircle;
