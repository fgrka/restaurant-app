import { motion } from "framer-motion";
import "./Slider.css";
import { useState, useRef, useLayoutEffect } from "react";
import images from "../components/SliderImg";

function Slider(props) {
    const element = useRef(null);
    const [width, setWidth] = useState(0);
    const { updateCategory } = props;

    function handleCategory(category) {
        const chosenCategory = category;
        updateCategory(chosenCategory);
    }

    useLayoutEffect(() => {
        setWidth(element.current.offsetWidth);
    });
    let constraintLeft;
    window.innerWidth < width ? constraintLeft = window.innerWidth - width-65 : constraintLeft = 0;
    
 return(
        <motion.div className="slider">
            <motion.div drag="x" dragConstraints={{ right: 0, left:constraintLeft}} className="slider-inner" ref={element}>
                {images.map(image => {
                    return (
                        <motion.div key ={image[1]} className="slider-img">
                            <img src={image[0]} onClick={() => handleCategory(image[1])} alt="image" />
                            <p className="item-txt">{image[1]} </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    )
}

export default Slider;