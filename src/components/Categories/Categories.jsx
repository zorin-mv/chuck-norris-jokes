import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import classes from "./categories.module.css";

const Categories = ({ categories, clickHandler }) => {
    return (
        <div className={classes.category}>
            <div className={classes.category__title}>
                <h1>Categories</h1>
            </div>
            <ul className={classes.category__list}>
                {categories.map((category, index) => {
                    return (
                        <CategoryItem
                            key={index}
                            clickHandler={clickHandler}
                            categoryName={category}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Categories;
