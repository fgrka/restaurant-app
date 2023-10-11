import "../styles/Menu.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import sliderImages from "../components/SliderImg";
import Slider from "../components/Slider";
import ReturnArrow from "../components/ReturnArrow"

export function Menu() {
    const navigate = useNavigate();
    const back = () => navigate("/Home");

    return (
        <div className="menu">
            <div className="menu-header">
            </div>
            <div className="menu-outer">
                <div className="menu-inner">
                    <div className="menu-title">
                            <ReturnArrow page={back}></ReturnArrow>
                        <h1>Menu</h1>
                    </div>  
                    <div className="menu-searchbar">
                            <input type="text" placeholder="Szukaj"/>
                        </div>
                        <div className="menu-slider-container">
                            <Slider images={sliderImages}></Slider> 
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Menu;