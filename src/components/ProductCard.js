import { useEffect } from "react";
import "./ProductCard.css";
// import mealImg from props.product.image;
import { motion, useAnimate } from "framer-motion";

function ProductCard(props){
const [scope, animate] = useAnimate();

useEffect(()=> {
    const handleAnimation = async() => {
        await animate(scope.current, {opacity:0}, {delay:0.2}, {duration: 0});
        await animate(scope.current, { opacity:1 }, { duration:1});
    }
    handleAnimation();
});



    return(
        <div ref={scope} style={{opacity: 0}} className="card">
            <img className="card-img" src={props.product.image} alt="meal" />
            <div className="card-description">
            <div className="card-title">
                <h4>{props.product.title}</h4></div>
                <p>{props.product.description}</p>
            </div>
            <div className="card-price"><p>{props.product.price} zł</p></div>
            <button className="card-button button-filled">Dodaj</button>
        </div>
    )
}


export default ProductCard;