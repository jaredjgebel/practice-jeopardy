import styled from "styled-components";
import PropTypes from "prop-types";
import { Col } from "react-grid-system";

export const FlexCol = styled(Col)`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  flex-wrap: ${props => props.flexWrap};
  align-content: ${props => props.alignContent};
  padding-right: 0px;
  padding-left: 0px;
`;

FlexCol.defaultProps = {
  flexDirection: "row"
};

FlexCol.propTypes = {
  direction: PropTypes.oneOf([
    "row",
    "column",
    "row-reverse",
    "column-reverse"
  ]),
  alignItems: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline"
  ]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  flexWrap: PropTypes.oneOf(["no-wrap", "wrap", "wrap-reverse"]),
  alignContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "space-between",
    "space-around"
  ])
};
