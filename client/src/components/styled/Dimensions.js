import React from "react";
import styled, { css } from "styled-components";

const DimensionWrapper = styled.div`
  display: flex;
  justify-content: inherit;
  ${props =>
    props.minHeightx &&
    css`
      min-height: ${props.minHeightx};
    `}
`;

const Dimensions = ({ children, ...props }) => (
  <DimensionWrapper {...props}>{children}</DimensionWrapper>
);

export default Dimensions;
