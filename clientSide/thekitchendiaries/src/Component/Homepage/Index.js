import React, { useEffect, useState } from "react";
import './Homepage.css'
import { heading } from "../Constant/homeConstant";

import { useDispatch, useSelector } from "react-redux";
import { getAllRecipe } from '../../Redux/ProductProducer/action'
function Homepage() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch()
    const recipeData = useSelector(state => state.recipe.recipeData)

    console.log(recipeData)

    useEffect(() => {
        dispatch(getAllRecipe())
    }, [])
    const handleChange=(event)=>{
        setSearch(event.target.value);
    }
    function clearData() {
        setSearch("");

    }
    return (
        <div>


            <div className="home">
                <div className="searchHere display">
                    <input type="text" className="searchbar" placeholder="Search here" onChange={handleChange} value={search}/>
                    <img src="Resources/wrong1.png" alt="" className="search" onClick={clearData} />
                </div>
                <div class="homeImage display">
                    <img src="Resources/indian-dhal.jpg" alt="" className="imageforhome" />
                    <div className="textpart">

                        {
                            heading.map((item) => (
                                <div>
                                    <h2>{item.text}</h2>
                                    <p className="color">{item.para}</p>
                                </div>
                            ))
                        }
                        <button className="button">View All</button>
                    </div>
                </div>

                <h2 class="head">Recipes</h2>
                <div className="recipes display">
                    {

                        recipeData.filter((item) => {
                            if (item.recipe_Name.toLowerCase().includes(search.toLowerCase())) {
                                return item;
                            }
                        }).map((item, i) => (
                            <div key={i} className="ricepe">
                                <img src={item.recipe_image} className="specialRecipe" />
                                <div className="foodName">{item.recipe_Name}</div>
                            </div>
                        ))

                    }
                </div>

            </div>

        </div>
    )
};
export default Homepage