import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import image from "../assets/plate.png";
import google from "../assets/facebookbw.png";
import gmail from "../assets/googlebw.png";

function Home() {
    const navigate = useNavigate();
    const login = () => navigate("/Login");
    const register = () => navigate("/Register");
    const menu = () => navigate("/Menu");
    
    return(
        <div className="home">
            <div className="home-description"> <strong>Zaloguj się</strong>, aby otrzymywać personalizowane promocje, <br></br> lub <strong>kontynuuj bez logowania</strong> </div>
            <div className="home-logo-container">
                <div className="home-logo-img"  />
            </div>
            <div className="home-card"> 
                <div className="home-btn-container">
                    <button className="home-btn-signin button-filled" onClick={login}>Zaloguj się</button>
                    <button className="home-btn-signup button-empty" onClick={register}> Załóż konto</button>
                    <button className="home-btn-notlogged button-empty" onClick={menu}>Kontynuuj bez logowania</button>
                </div>
                <div className="home-card-info">
                    <hr />
                    <img className="img-facebook" src={google} alt="google"/>
                    <img className="img-google" src={gmail} alt="gmail"/>
                    <p className="home-card-info-reg">Klikając "Zaloguj się" akceptujesz <a href="#">REGULAMIN</a></p>
                </div>
            </div>
        </div>
    );
}

export default Home;