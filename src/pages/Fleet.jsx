import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Fleet.css';
import fleetHeroImg from '../assets/commercial-fleet-washing-oilfield-grande-prairie.jpg';

// --- INLINE SVG COMPONENTS (Standalone) ---

const IconCheckCircle = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const IconShieldCheck = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const IconZap = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.5a3.5 3.5 0 0 1 0-7 3.5 3.5 0 0 1 7 0 3.5 3.5 0 0 1 0 7Z" />
        <path d="M4.5 14.5c.5-5.5 5.5-5.5 6 0" />
        <path d="M13 14.5a3.5 3.5 0 0 1 0-7 3.5 3.5 0 0 1 7 0 3.5 3.5 0 0 1 0 7Z" />
        <path d="M13.5 14.5c.5-5.5 5.5-5.5 6 0" />
        <path d="m22 22-3-3" />
        <path d="M22 13h-4" />
        <path d="M14 13h-4" />
        <path d="M6 13H2" />
    </svg>
);

const IconMapPin = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const IconFileCheck = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="m9 15 2 2 4-4" />
    </svg>
);

const IconHardHat = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2Z" />
        <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
        <path d="M4 15a8 8 0 1 1 16 0" />
    </svg>
);

const IconTruck = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18h9V10l-3-3h-6" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
    </svg>
);

const IconFileText = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
    </svg>
);

const IconCalendarClock = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
        <circle cx="18" cy="15" r="5" />
        <path d="M18 13v2l1 1" />
    </svg>
);

const Fleet = () => {
    return (
        <div className="fleet-page">

            <Helmet>
                <title>Commercial Fleet Washing &amp; Detailing Grande Prairie | Glazed Auto</title>
                <meta name="description" content="Mobile fleet washing and detailing for oilfield and commercial trucks in Grande Prairie and the Peace Region. WCB cleared, GPS verified, night-shift capable. Get a custom fleet proposal." />
                <link rel="canonical" href="https://glazeddetails.ca/fleet" />
            </Helmet>

            {/* 1. Hero Section */}
            {/* 1. Hero Section */}
            <section className="fleet-hero min-h-[80vh] flex items-center pt-24 pb-16 relative overflow-hidden">
                {/* Background Image with Darkened Layers */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#050505]/40 z-10" />
                    <img
                        src={fleetHeroImg}
                        alt="Commercial fleet truck washing service in Grande Prairie oilfield"
                        className="w-full h-full object-cover lg:opacity-40"
                    />
                </div>

                <div className="container-tight px-6 relative z-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4C1D95]/20 border border-[#4C1D95]/30 rounded-full mb-6 text-[#8B5CF6]">
                            <IconHardHat size={14} />
                            <span className="text-[10px] uppercase tracking-widest font-black">Oilfield Grade Service</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter mb-6 leading-none">
                            RELIABLE FLEET <br />
                            <span className="text-[#8B5CF6]">MAINTENANCE.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[#D4D4D8] mb-12 font-medium leading-relaxed">
                            Minimize downtime with on-site mobile wash units equipped for the Peace Region’s toughest environments. WCB Cleared. GPS Tracked. Fully Insured.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <a href="#proposals" className="btn-primary px-12 py-5 text-lg w-full sm:w-auto">
                                REQUEST FLEET PROPOSAL
                            </a>
                            <a href="tel:7806556748" className="btn-outline px-12 py-5 text-lg w-full sm:w-auto">
                                CALL DISPATCH
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Trust Bar */}
            <section className="trust-bar py-8">
                <div className="container-tight px-6 flex flex-wrap justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <IconShieldCheck className="text-[#8B5CF6]" size={18} />
                        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                            2M Liability Insurance
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconFileCheck className="text-[#8B5CF6]" size={18} />
                        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                            WCB Cleared
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconCheckCircle size={18} className="text-[#8B5CF6]" />
                        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                            SITE SAFETY CERTIFIED
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconMapPin className="text-[#8B5CF6]" size={18} />
                        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                            GPS Logged Arrivals
                        </span>
                    </div>
                </div>
            </section>

            {/* 3. Fleet Service Tiers */}
            <section className="py-24 md:py-32 bg-[#050505]">
                <div className="container-tight px-6">
                    <div className="section-header text-center mb-16">
                        <div className="inline-block">
                            <h2 className="text-4xl md:text-6xl italic mb-4">No-Nonsense Cleanup.</h2>
                            <div className="h-1 w-full bg-[#8B5CF6]" />
                        </div>
                    </div>

                    {/* Fleet Pricing Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                        {/* CARD 1: Crew Change (Was Quick Turn) */}
                        {/* Moved to $85 price point per Casey's request */}
                        <div className="bg-[#121212] border border-gray-800 p-8 rounded-xl hover:border-[#8B5CF6] transition-colors group">
                            <div className="text-[#8B5CF6] mb-4">
                                {/* Truck Icon */}
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><path d="M14 17h1" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></svg>
                            </div>
                            <h3 className="text-xl font-bold italic text-white uppercase mb-1">Crew Change</h3>
                            <p className="text-gray-500 text-xs mb-6 uppercase tracking-wider">Volume Maintenance</p>

                            <div className="mb-6">
                                <span className="text-3xl font-bold text-white">$85</span>
                                <span className="text-gray-400 text-sm ml-1">/ unit *</span>
                                <p className="text-[#8B5CF6] text-xs font-bold mt-1 uppercase tracking-wide">
                                    (Minimum 10 Units)
                                </p>
                            </div>

                            <ul className="space-y-3 text-sm text-gray-400 mb-8">
                                <li className="flex items-center gap-2"><span className="text-[#8B5CF6]">✓</span> Basic Interior Wipe Down</li>
                                <li className="flex items-center gap-2"><span className="text-[#8B5CF6]">✓</span> Exterior Wash</li>
                                <li className="flex items-center gap-2"><span className="text-[#8B5CF6]">✓</span> Floor Mat Clean</li>
                                <li className="flex items-center gap-2"><span className="text-[#8B5CF6]">✓</span> Window Cleaning</li>
                            </ul>
                            <Link to="/contact" className="block w-full py-3 border border-[#8B5CF6] text-white text-center font-bold uppercase text-sm hover:bg-[#8B5CF6] hover:text-white transition-all">
                                Get Started
                            </Link>
                        </div>

                        {/* CARD 2: Premium Revivify (Was Crew Change Reset) */}
                        {/* This is the deeper clean option */}
                        <div className="bg-[#121212] border border-gray-800 p-8 rounded-xl hover:border-[#8B5CF6] transition-colors group relative overflow-hidden">
                            {/* Optional 'Recommended' Badge */}
                            <div className="absolute top-0 right-0 bg-[#8B5CF6] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                                Deep Clean
                            </div>

                            <div className="text-[#8B5CF6] mb-4">
                                {/* Sparkle Icon */}
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold italic text-white uppercase mb-1">Premium Revivify</h3>
                            <p className="text-gray-500 text-xs mb-6 uppercase tracking-wider">Full Reset Service</p>

                            <div className="mb-6">
                                <span className="text-3xl font-bold text-white">Custom</span>
                                <span className="text-gray-400 text-sm ml-1">Quote</span>
                                <p className="text-gray-500 text-xs mt-1">
                                    Based on vehicle condition
                                </p>
                            </div>

                            <ul className="space-y-3 text-sm text-gray-400 mb-8">
                                <li className="flex items-center gap-2"><span className="text-[#8B5CF6]">✓</span> Deep Interior Shampoo</li>
                                <li className="flex items-center gap-2"><span className="text-[#8B5CF6]">✓</span> High-Pressure Exterior</li>
                                <li className="flex items-center gap-2"><span className="text-[#8B5CF6]">✓</span> Engine Bay Rinse</li>
                                <li className="flex items-center gap-2"><span className="text-[#8B5CF6]">✓</span> Stain Removal</li>
                            </ul>
                            <Link to="/contact" className="block w-full py-3 bg-[#8B5CF6] text-white text-center font-bold uppercase text-sm hover:bg-[#7c3aed] transition-all">
                                Request Quote
                            </Link>
                        </div>

                        {/* CARD 3: Heavy Duty (Unchanged) */}
                        <div className="bg-[#121212] border border-gray-800 p-8 rounded-xl hover:border-[#8B5CF6] transition-colors group">
                            <div className="text-[#8B5CF6] mb-4">
                                {/* Hard Hat/Industrial Icon */}
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10" /><path d="M6 18h12" /><path d="M6 14h12" /></svg>
                            </div>
                            <h3 className="text-xl font-bold italic text-white uppercase mb-1">Heavy Duty</h3>
                            <p className="text-gray-500 text-xs mb-6 uppercase tracking-wider">Industrial & Oilfield</p>

                            <div className="mb-6">
                                <span className="text-3xl font-bold text-white">Custom</span>
                                <span className="text-gray-400 text-sm ml-1">Quote</span>
                                <p className="text-gray-500 text-xs mt-1">
                                    Specialized removal (Mud, Tar, Grease)
                                </p>
                            </div>

                            <ul className="space-y-3 text-sm text-gray-400 mb-8">
                                <li className="flex items-center gap-2"><span className="text-[#8B5CF6]">✓</span> Industrial Mud Packing</li>
                                <li className="flex items-center gap-2"><span className="text-[#8B5CF6]">✓</span> Heavy Degreasing</li>
                                <li className="flex items-center gap-2"><span className="text-[#8B5CF6]">✓</span> Tank Polishing</li>
                                <li className="flex items-center gap-2"><span className="text-[#8B5CF6]">✓</span> Hazardous Cleanup</li>
                            </ul>
                            <Link to="/contact" className="block w-full py-3 border border-gray-700 text-white text-center font-bold uppercase text-sm hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all">
                                Discuss Project
                            </Link>
                        </div>

                    </div>

                    {/* New Disclaimer below the grid */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-500 text-xs italic">
                            * Starting at $85/unit pricing applies to fleet contracts with a minimum of 10 units. <br />
                            Final pricing varies based on vehicle size, condition, and frequency of service.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. The Manager's Advantage */}
            <section className="py-24 md:py-32 bg-[#0c0c0c] border-y border-gray-900">
                <div className="container-tight px-6">
                    <div className="text-center mb-20">
                        <p className="text-[#8B5CF6] font-bold uppercase tracking-[0.2em] text-xs mb-4">B2B Core Strength</p>
                        <h2 className="text-4xl md:text-6xl italic font-black">THE MANAGER'S ADVANTAGE.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-900">
                        <div className="advantage-card">
                            <IconFileText size={32} className="text-[#8B5CF6] mb-6" />
                            <h3 className="text-xl mb-4 italic">Automated Billing</h3>
                            <p className="text-sm text-[#D4D4D8] leading-relaxed">
                                Consolidated monthly invoicing. Net-30 terms available for approved accounts. Keep your accounting team happy.
                            </p>
                        </div>
                        <div className="advantage-card border-x border-gray-900">
                            <IconMapPin size={32} className="text-[#8B5CF6] mb-6" />
                            <h3 className="text-xl mb-4 italic">GPS Verification</h3>
                            <p className="text-sm text-[#D4D4D8] leading-relaxed">
                                Know exactly when we arrived and left for every single unit. Pay for work completed, never for waiting.
                            </p>
                        </div>
                        <div className="advantage-card">
                            <IconCalendarClock size={32} className="text-[#8B5CF6] mb-6" />
                            <h3 className="text-xl mb-4 italic">Night Shift Capable</h3>
                            <p className="text-sm text-[#D4D4D8] leading-relaxed">
                                We clean while your fleet is parked. Zero downtime during your operating hours. Your drivers start with a clean cab every shift.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Proposal CTA */}
            <section id="proposals" className="proposal-section py-24 md:py-48">
                <div className="container-tight px-6">
                    <div className="proposal-card">
                        <p className="text-[#8B5CF6] font-bold uppercase tracking-[0.2em] text-xs mb-6">Scaleable Fleet Solutions</p>
                        <h2 className="text-4xl md:text-7xl font-black italic mb-10 leading-tight">GET A CUSTOM<br />FLEET PROFILE.</h2>
                        <p className="max-w-xl mx-auto text-[#D4D4D8] text-lg mb-12">
                            Stop managing individual bookings. Get a customized service contract built specifically for your fleet size and requirements.
                        </p>
                        <a href="mailto:contracts@glazedauto.com?subject=Fleet%20Proposal%20Request" className="btn-primary px-16 py-6 text-xl mb-6">
                            REQUEST PROPOSAL
                        </a>
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-4">
                            Direct Dispatch: <a href="tel:7806556748" className="text-white hover:text-[#8B5CF6] transition-colors">780-655-6748</a>
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Fleet;
