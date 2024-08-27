import React from "react";
import "./CategoryItem.css";

function CategoryItem(props) {
  return (
    <div className="categoryItems">
      <img src={props.image} width={64} height={64} />
      <h4>{props.title}</h4>
    </div>
  );
}

export default CategoryItem;
