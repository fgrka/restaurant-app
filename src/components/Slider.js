import { motion } from "framer-motion";
import "./Slider.css";
import { useState, useRef, useLayoutEffect } from "react";

function Slider(props) {
    const element = useRef(null);
    const [width, setWidth] = useState(0);


    useLayoutEffect(() => {
        setWidth(element.current.offsetWidth);
    });
    let constraintLeft;
    console.log(window.innerWidth);
    console.log(width);
    
    if (window.innerWidth  < width) {
        constraintLeft = window.innerWidth - width-65;
    }
    else 
        constraintLeft=0;
    return(
        <motion.div className="slider">
            <motion.div drag="x" dragConstraints={{ right: 0, left:constraintLeft}} className="slider-inner" ref={element}>
                {props.images.map(image => {
                    return (
                        <motion.div className="slider-img">
                            <img src={image[0]} alt="image" />
                            <p className="item-txt">{image[1]} </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    )
}

export default Slider;