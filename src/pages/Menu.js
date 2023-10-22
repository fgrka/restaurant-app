import "../styles/Menu.css"
import { useState } from "react";
import { products } from "../products";
import Slider from "../components/Slider";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";

function Menu() {

    const [category, setCategory] = useState("Dania");
    
    const updateCategoryfromSlider = (category) => {
        setCategory(category);
    }

    return (
        <div className="menu">
            <Header></Header>
            <div className="menu-outer">
                <div className="menu-inner">
                    <Banner></Banner>
                    <SearchBar></SearchBar>
                    <div className="menu-slider-container">
                        <h4>Kategorie</h4>
                        <Slider updateCategory={updateCategoryfromSlider} ></Slider> 
                    </div>
                    <div className="card-container"> 
                    {products[category].map((product =>
                        <ProductCard key={product.id} product = {product}></ProductCard>
                  
                    ))}
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Menu;