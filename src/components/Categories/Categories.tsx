import React from "react";
import ICategoriesProps from "../../types/categories-props-interface";
import CategoryItem from "../CategoryItem/CategoryItem";
import classes from "./categories.module.css";

const Categories: React.FC<ICategoriesProps> = ({
    categories,
    clickHandler,
}) => {
    return (
        <div className={classes.category}>
            <div className={classes.categoryTitle}>
                <h1>Categories</h1>
            </div>
            <ul className={classes.categoryList}>
                {categories.map((category: string, index: number) => {
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
