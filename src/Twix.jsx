import React from "react";
import { Link } from "react-router-dom";
const Twix = () => {
    return (
            <div style={{ color: 'white', textAlign: 'center', padding: '20px', zIndex: 1 }}>
            <img 
                src="src/assets/twix.gif" 
                alt="Reeses GIF" 
                style={{ width: '400px', height: 'auto' }} 
            />
            <Link to="/"><p style={{fontSize: '2rem'}}> Make a defferent selection</p></Link>
        </div>
        
    )
}
export default Twix;