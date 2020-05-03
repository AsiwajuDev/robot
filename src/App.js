import React from "react";

import CardList from "./components/cardList/CardList";
import { robots } from "./data/robot";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CardList robots={robots} />
    </div>
  );
}

export default App;
