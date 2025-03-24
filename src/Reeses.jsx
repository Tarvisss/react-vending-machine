import React from "react";
import { Link } from "react-router-dom";

const Reeses = () => {
    return (
        <div style={{ color: 'white', textAlign: 'center', padding: '20px', zIndex: 1 }}>
            <img 
                src="src/assets/Screenshot from 2025-03-24 15-25-13.png" 
                alt="Reeses GIF" 
                style={{ width: '400px', height: 'auto' }} 
            />
            <Link to="/"><p style={{fontSize: '2rem'}}> Make a defferent selection</p></Link>
        </div>
    );
}

export default Reeses;
