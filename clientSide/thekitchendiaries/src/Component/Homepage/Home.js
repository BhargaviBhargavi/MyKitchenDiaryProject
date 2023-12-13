import React, { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'


import { useDispatch } from "react-redux";
import { getSearchRecipeFailure } from '../../Redux/ProductProducer/action'

const Home = () => {
    const [inputValue, setInputvalue] = useState("");
    const [recipeData, setRecipeData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchRecipeData();
    }, []);

    const fetchRecipeData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/recipes");
            setRecipeData(response.data);
            console.log("Recipe Data:", response.data);
        } catch (error) {
            console.error("Error fetching recipe data:", error);
        }
    };

    const searchRecipeData = async () => {
        try {
            if (inputValue === "") {
                fetchRecipeData();
            } else {
                const response = await axios.get(
                    `http://localhost:8080/recipes/search?query=${inputValue}`
                );
                setRecipeData(response.data);
            }
        } catch (error) {
            console.error("Error searching for Recipes:", error);
            dispatch(getSearchRecipeFailure());
        }
    };

    const handleInputChange = (event) => {
        setInputvalue(event.target.value);
    };

    function clearData() {
        setInputvalue("");
    }

    return (
        <div>
            <div className="home">
                <div className="searchHere display">
                    <input
                        type="text"
                        className="searchbar"
                        placeholder="Search here"
                        onChange={handleInputChange}
                        value={inputValue}
                    />
                    <img
                        src="Resources/wrong1.png"
                        alt=""
                        className="search"
                        onClick={clearData}
                    />
                    <img onClick={searchRecipeData} className="searchImg" src="Resources/searchbar1.png" alt=""/>
                </div>
                <div class="imagefor">
                   <div className="text white">
                        <h1>Food is our common ground, a universal experience.</h1>
                        <button className="button">See All</button>
                    </div>
                    
                </div>
                <h2 className="head">EXPLORE MORE</h2>
                <div className="recipe">
                    <div>
                        <img className="images" src="Resources/icecream.png" alt=""/>
                        <div className="name">Dessert & Drinks</div>
                    </div>
                    <div>
                        <img className="img" src="Resources/mysore-pak.jpeg" alt=""/>
                        <div className="names">Sweets</div>
                    </div>
                    
                    <div>
                        <img className="img" src="Resources/Gujiya.jpg" alt=""/>
                        <div className="names">Snacks</div>
                    </div>
                    <div>
                        <img className="img" src="Resources/bombay-potatoes.jpg" alt=""/>
                        <div className="names">Trending</div>
                    </div>
                </div>
                <h2 className="head">DON'T MISS</h2>

                <div className="recipes display">
                    {Array.isArray(recipeData) ? (
                        recipeData.length > 0 ? (
                            recipeData.map((item, index) => (
                                <div key={index} className="ricepe">
                                    <img src={item.recipe_image} className="specialRecipe"
                                        alt={item.recipe_image} />
                                    <div className="foodName">{item.recipe_Name}</div>
                                </div>
                            ))
                        ) : (
                            <p>No Recipe</p>
                        )
                    ) : (
                        <div></div>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
