import React, {useState}from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css"

const Card = () => {
    const [candy, setCandy] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(candy) {
            navigate(`${candy}`)
        }
    };

    const handleChange = (event) => {
        setCandy(event.target.value)
    };

    return (
        <div className="selection">
            <h1>Pease make a selection</h1>
           <form onSubmit={handleSubmit}>
            <select  
                name="candy"
                value={FormData.name}
                onChange={handleChange}
                >
                    <option value=""></option>
                    <option value="Reeses">Reeses</option>
                    <option value="MilkyWay">MilkyWay</option>
                    <option value="Twix">Twix</option>
                </select>
                <button>Enjoy</button>

            </form> 
        </div>
    )
}
export default Card;