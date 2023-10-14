import "./Header.css";
import ReturnArrow from "../components/ReturnArrow"
import { useNavigate } from "react-router-dom";
import trolley from "../assets/trolley.png";
import user from "../assets/user.png";

function Header(){
    const navigate = useNavigate();
    const back = () => navigate("/Home");
    return(
    <div className="header">
        <div className="header-arrow"> 
            <ReturnArrow page={back}></ReturnArrow>
        </div>
        <div className="header-title">
            <h2>Menu</h2>
        </div> 
        <div className="header-icons">
            <img className="icon" src={trolley} />
            <img className="icon" src={user} />
        </div>
    </div>
    )
}

export default Header;