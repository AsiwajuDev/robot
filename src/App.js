import React, { Component } from "react";

import CardList from "./components/cardList/CardList";
import SearchBox from "./components/searchBox/SearchBox";

import { robots } from "./data/robot";

const state = {
  robots: robots,
  searchField: "",
};

class App extends Component {
  render() {
    return (
      <div className="tc">
        <h2>RoboFriends</h2>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
