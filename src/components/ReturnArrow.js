import returnArrow from "../assets/back-arrow.png"
import "./ReturnArrow.css"

function ReturnArrow(props) {
    return(
    <div className="return-arrow">
        <img className="return-arrow-img" src={returnArrow} onClick={props.page}/>
    </div>
    )
}

export default ReturnArrow;