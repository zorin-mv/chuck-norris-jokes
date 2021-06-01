import React from "react";
import IJokeProps from "../../types/joke-props-interface";
import Loader from "../Loader/Loader";

import jokeImg from "../../assets/img/joke-img.png";
import classes from "./joke.module.css";

const Joke: React.FC<IJokeProps> = ({ jokeText, loading }) => {
    return (
        <div className={classes.joke}>
            <div className={classes.jokeVisual}>
                <img src={jokeImg} alt="Chuck Norris" />
            </div>
            <div className={classes.jokeText}>
                {loading && <Loader />}
                <p>{jokeText}</p>
            </div>
        </div>
    );
};

export default Joke;
