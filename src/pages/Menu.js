import "../styles/Menu.css"
import { useState } from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import PageTransition from "../components/PageTransition";
import MenuProductsContainer from "../components/MenuProductsContainer";

function Menu() {

    const [category, setCategory] = useState("Dania");
    const [products, setProducts] = useState([]);
    const [cleanResults, setCleanResults] = useState(false);
    
    const updateCategoryfromSlider = (category) => {
        setCategory(category);
        setCleanResults(true)
    }

    const productsToShow = (products) => {
        setProducts(products);
        setCleanResults(false)
    }


    return (
        <PageTransition>
            <div className="menu">
                <Header></Header>
                <div className="menu-outer">
                    <div className="menu-inner">
                        <Banner></Banner>
                        <SearchBar foundProducts={productsToShow}></SearchBar>
                        <div className="menu-slider-container">
                            <h4>Kategorie</h4>
                        <Slider updateCategory={updateCategoryfromSlider} ></Slider> 
                        <MenuProductsContainer chosenCategory={category} foundProducts={products} cleanResults={cleanResults}>
                        </MenuProductsContainer>
                    </div> 
                </div>
            </div>
            </div>
        </PageTransition>
    );
}

export default Menu;