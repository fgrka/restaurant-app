import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";
import discountImg from "../assets/icon-discount.png";
import orderImg from "../assets/icon-order.png";
import payImg from "../assets/icon-pay.png";
import menuImg from "../assets/icon-menu.png";
import PageTransition from "../components/PageTransition";
 
function Welcome() {
    const navigate = useNavigate();
    const handleClick = () => navigate("/Home");

    return(
        <PageTransition>
            <div className="welcome"> 
                    <div className="welcome-title">
                        <h1>Witaj!</h1>
                    </div>
                <div className="welcome-info-container">
                    <div className="welcome-info">
                        <img className="welcome-img" src={menuImg} alt="menu"/>
                        <div className="welcome-info-txt">
                            <h3>Menu</h3>
                            <p> Przejrzyj nasze menu i wybierz dania.</p>
                        </div>
                    </div>
                    <div className="welcome-info">
                        <img className="welcome-img" src={orderImg} alt="menu"/>
                        <div className="welcome-info-txt">
                            <h3>Zamówienie</h3>
                            <p>Złóż zamówienie poprzez aplikację, lub poproś o podejście kelnera</p>
                        </div>
                    </div>
                    <div className="welcome-info">
                        <img className="welcome-img" src={payImg} alt="menu"/>
                        <div className="welcome-info-txt">
                            <h3>Płatność</h3>
                            <p> Opłać zamówienie przez aplikację lub wybierz płatność gotówką</p>
                        </div>
                    </div>
                    <div className="welcome-info">
                        <img className="welcome-img" src={discountImg} alt="menu"/>
                        <div className="welcome-info-txt">
                            <h3>Promocje i zniżki</h3>
                            <p> Załóż konto i otrzymuj dedykowane promocje i zniżki.</p>
                        </div>
                    </div>
                </div>
                <div className="welcome-btn-container"> 
                    <button className="button-filled" onClick={handleClick}>Zaczynamy</button>
                </div>
            </div>
        </PageTransition>
    );
}

export default Welcome;