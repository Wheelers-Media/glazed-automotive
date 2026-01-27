import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Ceramic', path: '/ceramic' },
        { name: 'Fleet', path: '/fleet' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
                    <span className="logo-primary" style={{ fontSize: '1.5rem', fontWeight: '900', fontStyle: 'italic', color: 'var(--color-electric)' }}>
                        GLAZED
                    </span>
                    <span className="logo-secondary" style={{ fontSize: '1.5rem', fontWeight: '900', fontStyle: 'italic', color: 'var(--color-white)' }}>
                        AUTOMOTIVE DETAILS
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="desktop-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={isActive(link.path) ? 'active' : ''}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn btn-primary btn-sm">
                        BOOK NOW
                    </Link>
                </div>

                {/* Hamburger */}
                <button
                    className={`hamburger ${isOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Mobile Overlay */}
                <div className={`mobile-overlay ${isOpen ? 'open' : ''}`}>
                    <div className="overlay-content">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`overlay-link ${isActive(link.path) ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="overlay-actions">
                            <Link to="/contact" className="btn btn-primary full-width" onClick={closeMenu}>
                                BOOK NOW
                            </Link>
                            <div className="overlay-contact-info">
                                <p>CALL OR TEXT ANYTIME</p>
                                <a href="tel:7806556748" className="phone-link">780-655-6748</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
