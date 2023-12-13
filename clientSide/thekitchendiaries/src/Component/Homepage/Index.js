import React, { useEffect, useState } from "react";
import axios from "axios";
import './Homepage.css'
import { heading } from "../Constant/homeConstant";


import { useDispatch } from "react-redux";
import { getSearchRecipeFailure } from '../../Redux/ProductProducer/action'

const Homepage = () => {
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
                <div class="homeImage display">
                    <img src="Resources/indian-dhal.jpg" alt="" className="imageforhome" />
                    <div className="textpart">
                        {heading.map((item) => (
                            <div key={item.text}>
                                <h2>{item.text}</h2>
                                <p className="color">{item.para}</p>
                            </div>
                        ))}
                        <button className="button">View All</button>
                    </div>
                </div>
                <h2 class="head">Recipes</h2>

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

export default Homepage;
