import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
// import Button from "../components/Button";
import TextCanvas from "../components/elements/TextCanvas";

const theme = {
  backgroundColor: "#020788"
};

storiesOf("TextCanvas", module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add("TextCanvas", () => (
    <TextCanvas>
      <p>THIS IS (practice) JEOPARDY!</p>
    </TextCanvas>
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
