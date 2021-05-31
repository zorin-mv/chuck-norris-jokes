import React from "react";
import classes from "./category-item.module.css";

const CategoryItem = ({ categoryName, clickHandler }) => {
    return (
        <li
            onClick={(e) => clickHandler(e.target.textContent)}
            className={classes.category__item}
        >
            {categoryName}
        </li>
    );
};

export default CategoryItem;
