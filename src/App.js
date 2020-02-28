import React from "react";
import "./styles.css";
import Masonry from "react-masonry-css";

export default function App() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  var items = [
    { id: 1, name: "My First Item" },
    { id: 2, name: "Another item" },
    { id: 3, name: "Third Item" },
    { id: 4, name: "Here is the Fourth" },
    { id: 5, name: "High Five" }
  ];

  // Convert array to JSX items
  items = items.map(function(item) {
    return (
      <div className={`item-${item.id}`} key={item.id}>
        {item.name}
      </div>
    );
  });

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items}
    </Masonry>
  );
}
