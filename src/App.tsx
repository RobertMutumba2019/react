import React from "react";
import List from "./Component/List";

const App = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  const handleItemClick = (item: string) => {
    alert(`You clicked on: ${item}`);
  };

  return (
    <div className="container mt-3">
      <List items={fruits} onItemClick={handleItemClick} />
    </div>
  );
};

export default App;
