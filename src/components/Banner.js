import banner from "../assets/banner.png";
import "./Banner.css"

function Banner() {
    return(
        <div className="banner">
            <div className="banner-info">
                <h4>Szef kuchni poleca:</h4>
                <h2>Danie dnia</h2>
                <p className="banner-price">39.90 zł</p>
            </div>
            <img className="banner-img" src={banner} alt="banner" />
        </div>
    )
}

export default Banner;