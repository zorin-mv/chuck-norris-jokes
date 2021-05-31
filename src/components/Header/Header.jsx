import React from "react";
import Loader from "../Loader/Loader";
import classes from "./header.module.css";

const Header = ({ logo, loading }) => {
    return (
        <header>
            <div className="container">
                <div className={classes.logo}>
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className={classes.logo__visual}>
                            <img src={logo} alt="logo" />
                        </div>
                    )}
                    <div className={classes.logo__name}>
                        <strong>Chuck Norris</strong>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
