import "./Header.css";
import ReturnArrow from "../components/ReturnArrow"
import { useNavigate } from "react-router-dom";
import trolley from "../assets/trolley.png";
import user from "../assets/user.png";
import favourite from "../assets/favourite.png"

function Header(){
    const navigate = useNavigate();
    const back = () => navigate("/Home");
    return(
    <div className="header">
        <div className="header-container"> 
            <div className="header-arrow"> 
                <ReturnArrow page={back}></ReturnArrow>
            </div>
            <div className="header-title">
            
            </div> 
            <div className="header-icons">
            <div className="icon-container">
                    <img className="icon fav" src={favourite} />
                </div>
                <div className="icon-container">
                   <img className="icon user" src={user} />
                </div>
                <div className="icon-container">
                    <img className="icon trolley" src={trolley} />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;