import "./SearchBar.css"
import searchIcon from "../assets/search.png"
import { useEffect, useState } from "react";
import { allProducts } from "../products";

function SearchBar(props) {
   const [inputText, setInputText] = useState("");
   const [products, setProducts] = useState([]);

   const handleSearchClick = () => {
      setProducts([]);
        for  (const[key, product] of Object.entries(allProducts)) {
            const title = (product.title).toLowerCase();
            const userInput = inputText.toLowerCase();
    
            if (title.includes(userInput) && !products.includes(product) && userInput.length !==0) {
                products.push(product)
                setProducts(products)
                props.foundProducts(products);
            }
        }
   }

    return(
        <div className="searchbar">
            <input className="searchbar-input" type="text" placeholder="Szukaj" onChange={(e) => setInputText(e.target.value)}/>
            <img src={searchIcon} className="search-icon" alt="search" onClick={handleSearchClick} />
        </div>
    )
}

export default SearchBar;