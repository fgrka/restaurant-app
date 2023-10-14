import "../styles/Menu.css"
import { useEffect, useState } from "react";
import sliderImages from "../components/SliderImg";
import Slider from "../components/Slider";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProductCards from "../components/ProductCard";

export function Menu() {



    return (
        <div className="menu">
            <Header></Header>
            <div className="menu-outer">
                <div className="menu-inner">
                        <SearchBar></SearchBar>
                        <div className="menu-slider-container">
                            <Slider images={sliderImages}></Slider> 
                        </div>
                        <div className="card-container"> 
                            <ProductCards></ProductCards>
                            <ProductCards></ProductCards>
                            <ProductCards></ProductCards>
                            <ProductCards></ProductCards>
                        </div>
                </div> 
            </div>
        </div>
    );
}

export default Menu;