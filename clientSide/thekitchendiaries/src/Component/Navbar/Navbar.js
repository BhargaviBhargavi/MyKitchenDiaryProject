import React from "react";
import './Navbar.css';
import { dropDown,  dropMenu, dropdown } from "../Constant/dropDownConstant";
import { Link } from "react-router-dom";




function Navbar(){
    return(
        <div>
            <div className="firstpage">
                <div className="nav">
                    <nav className="navbar">
                        <div className="firstContainer displays">
            
                                <div><img src="Resources/logo.png" alt="" className="image"/></div>
                                    
                                <div className="dropbtn"><Link to="/home" className="link">Home</Link></div>
                                <div class="dropdown">
                                    <button class="dropbtn" ><Link to="/recipe" className="link">Recipes</Link></button>
                                    <div  class="dropdownContent">
                                    {
                                        dropdown.map((item,i)=>(
                                        <a key={i} href={item.link}>{item.recipeType}<b>{item.recipe}</b></a>))
                                        }
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="dropbtn ">Popular</button>
                                    <div class="dropdownContent">
                                    {
                                        dropDown.map((item,i)=>(
                                        <a href={item.link}>{item.recipeType}<b>{item.recipe}</b></a>))
                                    }
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="dropbtn">Main Ingredients</button>
                                    <div class="dropdownContent color">
                                        {
                                            dropMenu.map((item,i)=>(
                                            <a href={item.link}>{item.recipeType}<b>{item.recipe}</b></a>))
                                        }
                                    </div>
                                </div>
                            
                                
                                <div class="dropdown">
                                    <button class="dropbtn">Recipe History</button>
                                    
                                </div>
                                <div class="dropdown">
                                    <button class="dropbtn">Seasonal Food</button>
                                
                                </div>
                                <div className="topics">About Us</div>
                            
                                <img src="Resources/loginLogo.jpeg" alt="" className="loginlogo"/>
                            </div> 
                        
                    </nav>
                </div>
            
            </div>
        </div>
    );
}
export default Navbar;