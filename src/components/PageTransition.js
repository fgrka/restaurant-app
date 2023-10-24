import { delay, motion } from "framer-motion";

const PageTransition = ({children}) => {
return(
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{delay:0.2}} exit={{ opacity: 0}} >
    {children}
    </motion.div>
)

};

export default PageTransition;