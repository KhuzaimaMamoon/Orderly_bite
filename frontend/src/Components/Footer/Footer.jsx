import React from 'react';
import "./Footer.css";
import { assets } from "../../assets/assets.js";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="Orderly Bite Logo" />
                    <p>Orderly Bite brings delicious meals from top restaurants straight to your doorstep.
                        Fast delivery, fresh flavors — enjoy every bite with us!</p>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61575273227438" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src={assets.facebook_icon} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/orderlybite/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src={assets.instagram_icon} alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src={assets.linkedin_icon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+92 344 6973555</li>
                        <li>orderlybite@gmail.com</li>
                    </ul>
                </div>
            </div>

            <hr />
            <p className="footer-copyright">
                Copyright 2025 &copy; orderlybite.com - All Rights Reserved
            </p>
        </div>
    );
};

export default Footer;
