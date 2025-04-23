import React from "react";

interface ListProps {
  items: string[];
  onItemClick?: (item: string) => void;
}

const List: React.FC<ListProps> = ({ items, onItemClick }) => {
  const handleClick = (item: string) => {
    if (onItemClick) {
      onItemClick(item);
    } else {
      console.log(`Clicked on: ${item}`);
    }
  };

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => handleClick(item)}
            style={{ cursor: "pointer" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
