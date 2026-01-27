import React from 'react';
import { Link } from 'react-router-dom';
import GlazedLogo from '../assets/Glazed-Logo.png';
import './layout/Footer.css';

// Payment Icons
import visa from '../assets/visa.svg';
import mastercard from '../assets/mastercard.svg';
import amex from '../assets/americanexpress.svg';
import applepay from '../assets/applepay.svg';
import googlepay from '../assets/googlepay.svg';
import interac from '../assets/interac.svg';
import afterpay from '../assets/afterpay.svg';
import discover from '../assets/discover.svg';
import jcb from '../assets/jcb.svg';

// --- INLINE SVG COMPONENTS (Standalone) ---

const IconInstagram = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const IconFacebook = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const IconPhone = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const IconMapPin = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const IconMail = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-tight px-6">

                {/* --- LOGO ROW (Moved Above the Grid) --- */}
                {/* This ensures the columns below align perfectly at the top */}
                <div className="footer-logo-row" style={{ marginBottom: '2rem' }}>
                    <img
                        src={GlazedLogo}
                        alt="Glazed Automotive Logo"
                        className="footer-logo-img"
                        style={{ maxWidth: '180px', height: 'auto' }}
                    />
                </div>

                <div className="footer-content">
                    {/* Column 1: Brand Text & Socials */}
                    <div className="footer-brand">

                        {/* Brand Text - Gap set to 0px to match Desktop Header */}
                        <div className="footer-brand-text" style={{ display: 'flex', alignItems: 'center', gap: '0px', marginBottom: '15px' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: '900', fontStyle: 'italic', color: 'var(--color-electric)', letterSpacing: '-0.02em' }}>
                                GLAZED
                            </span>
                            <span style={{ fontSize: '1.5rem', fontWeight: '900', fontStyle: 'italic', color: 'var(--color-white)', letterSpacing: '-0.02em' }}>
                                AUTOMOTIVE DETAILS
                            </span>
                        </div>

                        <p className="footer-desc">
                            Premium mobile detailing for Grande Prairie and the Peace Region. We bring the shop to you.
                        </p>

                        <div className="footer-socials">
                            <a href="https://www.instagram.com/glazedautomotivedetails" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                <IconInstagram size={22} />
                            </a>
                            <a href="https://www.facebook.com/glazedautomotivedetails" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                                <IconFacebook size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services / Expertise */}
                    <div className="footer-links-group">
                        <h4>EXPERTISE</h4>
                        <ul>
                            <li><Link to="/services">Interior & Exterior</Link></li>
                            <li><Link to="/ceramic">Ceramic Coatings</Link></li>
                            <li><Link to="/fleet">Fleet Services</Link></li>
                            <li><Link to="/ceramic">Paint Correction</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div className="footer-links-group">
                        <h4>COMPANY</h4>
                        <ul>
                            <li><Link to="/contact">Book Now</Link></li>
                            <li><Link to="/contact">Get a Quote</Link></li>
                            <li><a href="sms:7806556748">Text Us</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="footer-links-group">
                        <h4>CONTACT</h4>
                        <div className="contact-item">
                            <IconPhone className="contact-icon" size={16} />
                            <a href="tel:7806556748">780-655-6748</a>
                        </div>
                        <div className="contact-item">
                            <IconMapPin className="contact-icon" size={16} />
                            <span>Grande Prairie, AB</span>
                        </div>
                        <div className="contact-item">
                            <IconMail className="contact-icon" size={16} />
                            <a href="mailto:glazedautomotivedetails@gmail.com">glazedautomotivedetails@gmail.com</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Glazed Automotive Details. All Rights Reserved.</p>

                    {/* Payment Icons */}
                    <div className="payment-icons-container">
                        <img src={visa} alt="Visa" className="payment-icon" />
                        <img src={mastercard} alt="Mastercard" className="payment-icon" />
                        <img src={amex} alt="American Express" className="payment-icon" />
                        <img src={interac} alt="Interac" className="payment-icon" />
                        <img src={applepay} alt="Apple Pay" className="payment-icon" />
                        <img src={googlepay} alt="Google Pay" className="payment-icon" />
                        <img src={afterpay} alt="Afterpay" className="payment-icon" />
                        <img src={discover} alt="Discover" className="payment-icon" />
                        <img src={jcb} alt="JCB" className="payment-icon" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;