import React from "react";
import IHeaderProps from "../../types/header-props-interface";
import Loader from "../Loader/Loader";
import classes from "./header.module.css";

const Header: React.FC<IHeaderProps> = ({ logo, loading }) => {
    return (
        <header>
            <div className="container">
                <div className={classes.logo}>
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className={classes.logoVisual}>
                            <img src={logo} alt="logo" />
                        </div>
                    )}
                    <div className={classes.logoName}>
                        <strong>Chuck Norris</strong>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
