import styled from "styled-components";

const Answer = styled.h1`
  display: ${props => (props.display ? "flex" : "none")};
`;

export default Answer;
