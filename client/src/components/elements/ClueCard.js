import React from "react";
import { Container, Row, Col } from "react-grid-system";
import StyledButton from "../styled/StyledButton";
import LeftArrow from "../styled/LeftArrow";
import RightArrow from "../styled/RightArrow";
import MenuIcon from "../styled/MenuIcon";
import StyledInfo from "../styled/Info";
import "./ClueCard.css";

const ClueCard = ({
  clue,
  category,
  value,
  airDate,
  answer,
  currentPage,
  totalPages,
  answerVisible,
  toggleActiveGame,
  toggleAnswerVisible,
  pageBack,
  pageForward
}) => {
  return (
    <Container
      fluid
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        paddingLeft: "0px",
        paddingRight: "0px"
      }}
    >
      <Row nogutter style={{ flex: "0 1 auto", height: "20vh" }}>
        <Col
          xs={2}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "100%"
          }}
        >
          <MenuIcon
            className="menu"
            alt="menu"
            size="75px"
            onClick={() => toggleActiveGame(true)}
          />
        </Col>
        <Col
          xs={10}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }}
        >
          <p className="category" style={{ fontSize: "26px" }}>
            {category}
          </p>
        </Col>
      </Row>

      <Row nogutter style={{ flex: "1 1 auto", paddingBottom: "30px" }}>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column"
          }}
        >
          {answerVisible ? (
            <p className="answer">{answer}</p>
          ) : (
            <p className="clue">{clue}</p>
          )}
          <StyledButton
            style={{ fontSize: "26px" }}
            onClick={() => {
              toggleAnswerVisible(answerVisible);
            }}
          >
            {answerVisible ? "BACK TO CLUE" : "REVEAL ANSWER"}
          </StyledButton>
        </Col>
      </Row>

      <Row nogutter style={{ flex: "0 1 auto", height: "20vh" }}>
        <Col
          xs={2}
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%"
          }}
        >
          <LeftArrow
            alt="Page Back"
            disabled={currentPage === "1"}
            size="100px"
            onClick={() => {
              pageBack(currentPage);

              if (answerVisible) {
                toggleAnswerVisible(answerVisible);
              }
            }}
          />
        </Col>
        <Col
          xs={8}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}
        >
          <StyledInfo>
            <p>{`$${value}`}</p>
            <p>{`Aired ${new Date(Date.parse(airDate))}`.slice(0, -42)}</p>
            <p>{"Clue " + currentPage + " of " + totalPages}</p>
          </StyledInfo>
        </Col>
        <Col
          xs={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            height: "100%"
          }}
        >
          <RightArrow
            alt="Page Forward"
            disabled={currentPage === totalPages}
            size="100px"
            onClick={() => {
              pageForward(currentPage, totalPages);

              if (answerVisible) {
                toggleAnswerVisible(answerVisible);
              }
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ClueCard;
