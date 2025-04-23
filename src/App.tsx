import React from "react";
import List from "./Component/List";

const App = () => {
  const people = ["Alice", "Bob", "Charlie"];

  return (
    <div className="container mt-4">
      <List
        items={people}
        onItemClick={(name) => alert(`Clicked on: ${name}`)}
      >
        <p className="text-muted">Click on a name to interact with it:</p>
      </List>
    </div>
  );
};

export default App;
