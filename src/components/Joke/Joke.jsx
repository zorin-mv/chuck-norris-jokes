import React from "react";

import jokeImg from "../../assets/img/joke-img.png";
import Loader from "../Loader/Loader";
import classes from "./joke.module.css";

const Joke = ({ jokeText, loading }) => {
    return (
        <div className={classes.joke}>
            <div className={classes.joke__visual}>
                <img src={jokeImg} alt="Chuck Norris" />
            </div>
            <div className={classes.joke__text}>
                {loading && <Loader />}
                <p>{jokeText}</p>
            </div>
        </div>
    );
};

export default Joke;