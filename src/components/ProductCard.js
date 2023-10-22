import "./ProductCard.css";
// import mealImg from props.product.image;

function ProductCard(props){

    return(
        <div className="card">
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