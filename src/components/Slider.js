import { motion } from "framer-motion";
import "./Slider.css";
import { useState, useRef, useLayoutEffect } from "react";
import images from "../components/SliderImg";

function Slider(props) {
    const element = useRef(null);
    const [width, setWidth] = useState(0);
    const [activeButton, setButtonActive] = useState(images[0]);
    const activeColor = {backgroundColor:"var(--col-slider-item-active)"};
    const defaultColor = {backgroundColor:"var(--col-slider-item-not-active)"};

    function handleCategory(image, id) {
        const chosenCategory = image[1];
        props.updateCategory(chosenCategory)
        setButtonActive(images[id]);
    }


    useLayoutEffect(() => {
        setWidth(element.current.offsetWidth);
    });
    let constraintLeft;
    window.innerWidth < width ? constraintLeft = window.innerWidth - width-65 : constraintLeft = 0;
    
 return(
        <motion.div className="slider">
            <motion.div drag="x" dragConstraints={{ right: 0, left:constraintLeft}} className="slider-inner" ref={element}>
                {images.map((image, id) => {
                    const isActive = activeButton === images[id];
                    const backgroundColor = isActive ? activeColor : defaultColor;
                    return (
                        <motion.div key = {image[1]} className="slider-img" style={backgroundColor}>
                            <img src={image[0]} onClick = {() => {handleCategory(image, id)}} alt="image" />
                            <p className="item-txt">{image[1]} </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    )
}

export default Slider;