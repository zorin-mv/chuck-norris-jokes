import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import axios from "axios";
import Categories from "./components/Categories/Categories";
import Joke from "./components/Joke/Joke";

import "./App.css";


const App = () => {
    const [jokes, setJokes] = useState("");
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const baseUrl = "https://api.chucknorris.io/jokes";

    useEffect(() => {
        getRandomJokes();
        getListCategories();
    }, []);

    const getJokeFromCategory = async(category) => {
        if (category === "random") {
            getRandomJokes();
            return;
        }

		const { data } = await axios.get(`${baseUrl}/random?category=${category}`)
		setJokes(data)
    };

    const getRandomJokes = async() => {
		const { data } = await axios.get(`${baseUrl}/random`);
		setJokes(data);
		setLoading(false)
    }

    const getListCategories = async() => {
		const { data } = await axios.get(`${baseUrl}/categories`)
		setCategories(data)
    }

    return (
        <div className="wrapper">
            <Header 
				loading={loading} 
				logo={jokes.icon_url} 
			/>
            <main>
                <div className="container">
                    <Categories
                        clickHandler={getJokeFromCategory}
                        categories={categories}
                    />
                    <Joke 
						loading={loading} 
						jokeText={jokes.value} 
					/>
                </div>
            </main>
        </div>
    );
};

export default App;
