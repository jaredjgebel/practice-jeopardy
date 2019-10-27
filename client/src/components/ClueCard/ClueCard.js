import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-grid-system";
import LeftArrow from "../styled/LeftArrow";
import RightArrow from "../styled/RightArrow";
import MenuIcon from "../styled/MenuIcon";
import { FlexCol } from "../styled/FlexCol";
import Clue from "../Clue/Clue";

const ClueCard = ({
  category,
  content,
  answer,
  value,
  airDate,
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
      <Row style={{ height: "75px" }}>
        <FlexCol justifyContent="flex-end">
          <MenuIcon
            className="menu"
            alt="menu"
            size="75px"
            onClick={() => toggleActiveGame(true)}
          />
        </FlexCol>
      </Row>
      <Row nogutter className="top" style={{ minHeight: "72%" }}>
        <FlexCol justifyContent="center" style={{ height: "100%" }}>
          <Clue
            category={category}
            content={content}
            answer={answer}
            answerVisible={answerVisible}
            toggleAnswerVisible={toggleAnswerVisible}
          />
        </FlexCol>
      </Row>

      <Row
        nogutter
        style={{ flex: "0 1 auto", height: "20vh", overflowY: "wrap" }}
      >
        <FlexCol xs={2} alignItems="center">
          <LeftArrow
            alt="Page Back"
            disabled={currentPage === "1"}
            size="75px"
            onClick={() => {
              pageBack(currentPage);

              if (answerVisible) {
                toggleAnswerVisible(answerVisible);
              }
            }}
          />
        </FlexCol>
        <FlexCol xs={8} alignItems="center" justifyContent="center">
          <FlexCol
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <p style={{ margin: "0px 5px" }}>{`$${value}`}</p>
            <p style={{ margin: "0px 5px" }}>
              {`Aired ${new Date(Date.parse(airDate))}`.slice(0, -42)}
            </p>
            <p style={{ margin: "0px 5px" }}>
              {"Clue " + currentPage + " of " + totalPages}
            </p>
          </FlexCol>
        </FlexCol>
        <FlexCol xs={2} alignItems="center" justifyContent="flex-end">
          <RightArrow
            alt="Page Forward"
            disabled={currentPage === totalPages}
            size="75px"
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

ClueCard.propTypes = {
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  airDate: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  totalPages: PropTypes.string.isRequired,
  toggleActiveGame: PropTypes.func.isRequired,
  toggleAnswerVisible: PropTypes.func.isRequired,
  pageBack: PropTypes.func.isRequired,
  pageForward: PropTypes.func.isRequired
};
