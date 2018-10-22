import { configure } from "@storybook/react";

function loadStories() {
  require("../src/stories/index");
  require("../src/components/elements/TextCanvas");
  // You can require as many stories as you need.
}

configure(loadStories, module);
