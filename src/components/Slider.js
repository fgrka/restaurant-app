import { motion } from "framer-motion";

function Slider(props) {
    return(
        <motion.div className="menu-slider">
            <motion.div drag="x" dragConstraints={{ right: 0, left: -180 }} className="menu-slider-inner">
                {props.images.map(image => {
                    return (
                        <motion.div className="menu-slider-img">
                            <img src={image} alt="image" />
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    )
}

export default Slider;