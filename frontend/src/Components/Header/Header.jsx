import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <h2>Order your favourite food here</h2>
                <p>
                    Pick from a wide menu full of tasty dishes made with the best ingredients
                    and great cooking skills. Our goal is to satisfy your cravings and make your
                    dining experience better, one delicious meal at a time.
                </p>
                <Link to="/menu"><button>View Menu</button></Link>
            </div>
        </div>
    );
};

export default Header;
