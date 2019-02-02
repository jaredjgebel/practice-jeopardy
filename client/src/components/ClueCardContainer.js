import React, { Component } from "react";
import ClueCard from "./elements/ClueCard";
import { getRandomClues } from "../data/fetch-data";

/*
Indexing for clues
   Back button
      Visible/ if index > 0
      
   Front button 
      Visible unless index = clues.length - 1
   state: { activeClue: 0 }

*/

class ClueCardContainer extends Component {
  constructor() {
    super();
    this.state = { visible: false };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const clues = getRandomClues();
    this.setState({ clues });
  }

  onClick() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return <ClueCard />;
  }
}

export default ClueCardContainer;
