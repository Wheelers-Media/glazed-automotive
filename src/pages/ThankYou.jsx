import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

// --- INLINE SVG COMPONENT ---
const IconCheckCircle = ({ size = 64 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const ThankYou = () => {
    return (
        <div className="thank-you-page">
            <div className="thank-you-content">
                <div className="success-icon">
                    <IconCheckCircle size={80} />
                </div>

                <h1 className="thank-you-title italic">REQUEST RECEIVED.</h1>

                <p className="thank-you-subhead">
                    We have received your booking details. Casey or the team will confirm your appointment via text shortly.
                </p>

                <div className="thank-you-actions">
                    <Link to="/" className="btn-primary px-12 py-5 text-lg">
                        BACK TO HOME
                    </Link>

                    <a
                        href="https://communityvotes.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nominate-link"
                    >
                        Nominate us for CommunityVotes →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
