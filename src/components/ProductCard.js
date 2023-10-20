import "./ProductCard.css";
import mealImg from "../assets/meal2.jpg";


function ProductCard(props){

    return(
        <div className="card">
            <img className="card-img" src={mealImg} alt="meal" />
            <div className="card-title"><h4>{props.product.title}</h4></div>
            <div className="card-description"><p>{props.product.description}</p></div>
            <div className="card-price"><h4>{props.product.price} zł</h4></div>
            <button className="card-button button-filled">Dodaj</button>
        </div>
    )
}


export default ProductCard;