import React from "react";
import { Link } from "react-router-dom";

const MilkyWay = () => {
    return (
        <div>
            <div style={{ color: 'white', textAlign: 'center', padding: '20px', zIndex: 1 }}>
            <img 
                src="src/assets/dawi-eating.gif" 
                alt="" 
                style={{ height: '300' }} 
            />
            <Link to="/"><p style={{fontSize: '2rem'}}> Make a defferent selection</p></Link>
        </div>
        </div>
    )
}
export default MilkyWay;