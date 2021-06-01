import React from "react";
import ICategoryItemProps from "../../types/category-item-props-interface";
import classes from "./category-item.module.css";

const CategoryItem: React.FC<ICategoryItemProps> = ({
    categoryName,
    clickHandler,
}) => {
    return (
        <li
            onClick={(e) =>
                clickHandler((e.target as Element).textContent || "")
            }
            className={classes.categoryItem}
        >
            {categoryName}
        </li>
    );
};

export default CategoryItem;
