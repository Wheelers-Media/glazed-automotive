import React from 'react';
import { Link } from 'react-router-dom';
import './MobileStickyBar.css';

const MobileStickyBar = () => {
    return (
        <div className="mobile-sticky-bar">
            {/* Call */}
            <a href="tel:7806556748" className="sticky-btn">CALL</a>
            {/* Text */}
            <a href="sms:7806556748" className="sticky-btn">TEXT</a>
            {/* Book */}
            <Link to="/contact" className="sticky-btn btn-book">BOOK NOW</Link>
        </div>
    );
};

export default MobileStickyBar;
