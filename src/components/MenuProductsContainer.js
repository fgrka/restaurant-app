import { products } from "../products";
import ProductCard from "../components/ProductCard";

function MenuProductsContainer(props) {
    const category = props.chosenCategory;
    const foundProducts = props.foundProducts;

 
    if (foundProducts.length !==0 && props.cleanResults == false) {
        return(
            <div className="card-container" > 
            {foundProducts.map(((product, delayTime) =>
                <ProductCard key={product.id} product = {product} delay = {delayTime/5} ></ProductCard>
            ))}
            </div>
    )}
    return(
            <div className="card-container" > 
            {products[category].map(((product, delayTime) =>
                <ProductCard key={product.id} product = {product} delay = {delayTime/5} ></ProductCard>
            ))}
            </div>
    )
}

export default MenuProductsContainer;