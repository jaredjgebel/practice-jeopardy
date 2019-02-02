import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { ThemeProvider } from "styled-components";
// import Button from "../components/Button";
import TextCanvas from "../components/elements/TextCanvas";
import ClueCard from "../components/elements/ClueCard";

storiesOf("JeopardyGrid", module).add("ClueCard", () => (
  <ClueCard
    clue="THIS ISLAND NATION PRODUCES 700 MILLIONS TONS OF PAPAYAS ANNUALLY"
    value="200"
    category="CHUTES AND LADDERS"
    airDate="12-19-1988"
    answer="MEXICO"
  />
));

// storiesOf("Button", module)
//   .add("Button/Text", () => (
//     <Button onClick={action("clicked")}>Hello Button</Button>
//   ))
//   .add("Button/Emoji", () => (
//     <Button onClick={action("clicked")}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ))
//   .addDecorator(story => <div style={{ textAlign: "center" }}>{story()}</div>)
//   .add("with primary colors", () => <Button primary={true}>Hey</Button>);
