import "./SearchBar.css"
import searchIcon from "../assets/search.png"

function SearchBar() {
    return(
        <div className="searchbar">
            <input className="searchbar-input" type="text" placeholder="Szukaj"/>
            <img src={searchIcon} className="search-icon" alt="search" />
        </div>
    )
}

export default SearchBar;