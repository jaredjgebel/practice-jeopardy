import React from "react";
import { Container, Row, Col } from "react-grid-system";
import StyledButton from "../styled/StyledButton";
import LeftArrow from "../styled/LeftArrow";
import RightArrow from "../styled/RightArrow";
import MenuIcon from "../styled/MenuIcon";
import StyledInfo from "../styled/Info";
import { FlexCol } from "../styled/FlexCol";
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
      <Row nogutter style={{ flex: "1 1 auto", paddingBottom: "30px" }}>
        <FlexCol
          className="card"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="column"
        >
          {/* <div className="card"> */}
          <span className="category">{category}</span>
          {answerVisible ? (
            <p className="answer">{answer}</p>
          ) : (
            <p className="clue">{clue}</p>
          )}
          <div className="button">
            <StyledButton
              onClick={() => {
                toggleAnswerVisible(answerVisible);
              }}
            >
              {answerVisible ? "BACK TO CLUE" : "REVEAL ANSWER"}
            </StyledButton>
          </div>
          {/* </div> */}
        </FlexCol>
      </Row>

      <Row nogutter style={{ flex: "0 1 auto", height: "20vh" }}>
        <FlexCol
          xs={2}
          alignItems="center"
          style={{
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
        </FlexCol>
        <FlexCol
          xs={8}
          alignItems="center"
          justifyContent="center"
          style={{
            height: "100%"
          }}
        >
          <MenuIcon
            className="menu"
            alt="menu"
            size="75px"
            onClick={() => toggleActiveGame(true)}
          />
          <StyledInfo>
            <p>{`$${value}`}</p>
            <p>{`Aired ${new Date(Date.parse(airDate))}`.slice(0, -42)}</p>
            <p>{"Clue " + currentPage + " of " + totalPages}</p>
          </StyledInfo>
        </FlexCol>
        <FlexCol
          xs={2}
          alignItems="center"
          justifyContent="flex-end"
          style={{
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
        </FlexCol>
      </Row>
    </Container>
  );
};

export default ClueCard;
