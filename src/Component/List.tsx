// 
import React from "react";

interface ListProps {
  items: string[];
  onItemClick?: (item: string) => void;
  children?: React.ReactNode;
}

const List: React.FC<ListProps> = ({ items, onItemClick, children }) => {
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
      
      {children && <div className="mb-2">{children}</div>}
      
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
