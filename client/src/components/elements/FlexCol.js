import styled from "styled-components/macro";
import { Col } from "react-grid-system";

export const FlexCol = styled(Col)`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  padding-right: 0px;
  padding-left: 0px;
`;
