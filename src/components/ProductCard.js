import "./ProductCard.css";
import mealImg from "../assets/meal2.jpg";

function ProductCards(){

    return(
        <div className="card">
            <img className="card-img" src={mealImg} alt="meal" />
            <div className="card-title"><h4>Sałatka Cezar</h4></div>
            <div className="card-description"><p>Kurczak sous-vide, sałata rzymska, pomidorki cherry, kapary, anchois, parmezan, grzanki.sos cezar</p></div>
            <button className="card-button button-filled">Dodaj</button>
        </div>
    )
}


export default ProductCards;