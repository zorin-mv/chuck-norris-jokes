import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import axios, { AxiosResponse } from "axios";
import Categories from "./components/Categories/Categories";
import Joke from "./components/Joke/Joke";
import IJokes from "./types/jokes-interface";

import "./App.css";

const App: React.FC = () => {
    const [jokes, setJokes] = useState<IJokes | null>(null);
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const baseUrl: string = "https://api.chucknorris.io/jokes";

    useEffect(() => {
        getRandomJokes();
        getListCategories();
    }, []);

    const getJokeFromCategory = async (category: string): Promise<void> => {
        if (category === "random") {
            getRandomJokes();
        } else {
            const { data }: AxiosResponse<IJokes> = await axios.get(
                `${baseUrl}/random?category=${category}`
            );

            setJokes(data);
        }
    };

    const getRandomJokes = async (): Promise<void> => {
        const { data }: AxiosResponse<IJokes> = await axios.get(
            `${baseUrl}/random`
        );
        setJokes(data);
        setLoading(false);
    };

    const getListCategories = async (): Promise<void> => {
        const { data }: AxiosResponse<string[]> = await axios.get(
            `${baseUrl}/categories`
        );
        setCategories([...data, "random"]);
    };

    return (
        <div className="wrapper">
            <Header loading={loading} logo={jokes?.icon_url || ""} />
            <main>
                <div className="container">
                    <Categories
                        clickHandler={getJokeFromCategory}
                        categories={categories}
                    />
                    <Joke loading={loading} jokeText={jokes?.value || ""} />
                </div>
            </main>
        </div>
    );
};

export default App;
