import React from 'react';
import { Link } from 'react-router-dom';
import './Ceramic.css';
// Import the video file from the assets folder
import ceramicVideo from '../assets/ceramic.mp4';
import ceramicHeroImg from '../assets/ceramic-hero.jpg';

// --- INLINE SVG COMPONENTS ---

const IconShield = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
);

const IconDroplets = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16.3c2.2 0 4-1.8 4-4 0-1.2-.5-2.2-1.3-2.9l-2.7-2.7-2.7 2.7c-.8.7-1.3 1.7-1.3 2.9 0 2.2 1.8 4 4 4Z" />
        <path d="M17 19.3c2.2 0 4-1.8 4-4 0-1.2-.5-2.2-1.3-2.9l-2.7-2.7-2.7 2.7c-.8.7-1.3 1.7-1.3 2.9 0 2.2 1.8 4 4 4Z" />
    </svg>
);

const IconSparkles = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
);

const IconSun = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M6.34 17.66l-1.41 1.41" />
        <path d="M19.07 4.93l-1.41 1.41" />
    </svg>
);

const IconCheckCircle = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const IconArrowDown = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
    </svg>
);

const Ceramic = () => {
    return (
        <div className="ceramic-page">

            {/* 1. Hero Section */}
            <section className="ceramic-hero min-h-[90vh] flex items-center justify-center pt-24 pb-16 relative">
                <div className="gloss-overlay" />
                {/* Background Image Placeholder with Darkened Layers */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#050505]/80 z-10" />
                    <img
                        src={ceramicHeroImg}
                        alt="Glossy Paint"
                        className="w-full h-full object-cover lg:grayscale lg:opacity-40"
                    />
                </div>

                <div className="container-tight relative z-20 text-center px-6">
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 leading-none">
                        PERMANENT GLOSS.<br />
                        <span className="text-[#8B5CF6]">ULTIMATE PROTECTION.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-[#D4D4D8] mb-12 font-medium">
                        The Peace Region’s premier ceramic coating application. Stop waxing your vehicle.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#pricing" className="btn-primary px-12 py-5 text-lg">
                            VIEW PACKAGES
                        </a>
                        <Link to="/contact?service=ceramic" className="btn-outline px-12 py-5 text-lg">
                            BOOK CONSULTATION
                        </Link>
                    </div>
                    <div className="mt-16 animate-bounce text-[#8B5CF6]">
                        <IconArrowDown size={32} />
                    </div>
                </div>
            </section>

            {/* 2. The Science Section */}
            <section className="py-24 md:py-32 bg-[#050505]">
                <div className="container-tight px-6">
                    <div className="section-header text-center">
                        <div className="inline-block">
                            <h2 className="text-4xl md:text-6xl italic leading-tight">The Science of <span className="text-[#8B5CF6]">Invisible Armor.</span></h2>
                            <div className="h-1 w-full bg-[#8B5CF6] mt-6" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="feature-card text-center">
                            <div className="text-[#8B5CF6] flex justify-center mb-6">
                                <IconShield size={48} />
                            </div>
                            <h3 className="text-2xl mb-4 italic">9H Hardness</h3>
                            <p className="text-[#D4D4D8] leading-relaxed">
                                Resists light scratches and swirl marks better than standard clear coat. A permanent layer of protection.
                            </p>
                        </div>

                        <div className="feature-card text-center">
                            <div className="text-[#8B5CF6] flex justify-center mb-6">
                                <IconDroplets size={48} />
                            </div>
                            <h3 className="text-2xl mb-4 italic">Extreme Hydrophobic</h3>
                            <p className="text-[#D4D4D8] leading-relaxed">
                                Water, mud, and road grime slide right off. Self-cleaning properties make maintenance washes effortless.
                            </p>
                        </div>

                        <div className="feature-card text-center">
                            <div className="text-[#8B5CF6] flex justify-center mb-6">
                                <IconSparkles size={48} />
                            </div>
                            <h3 className="text-2xl mb-4 italic">UV & Oxidation Block</h3>
                            <p className="text-[#D4D4D8] leading-relaxed">
                                Prevents paint fading, yellowing, and oxidation from Alberta's intense sun exposure and environmental fallout.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Process Section */}
            <section className="py-24 md:py-32 bg-[#050505] border-y border-gray-900">
                <div className="container-tight px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="w-full md:w-1/2">
                            <p className="text-[#8B5CF6] font-bold uppercase tracking-[0.2em] text-xs mb-4">True Value is in the Prep</p>
                            <h2 className="text-4xl md:text-5xl mb-8 italic">90% OF THE RESULT IS IN <span className="text-[#8B5CF6]">THE GRIND.</span></h2>
                            <p className="text-[#D4D4D8] text-lg leading-relaxed mb-8">
                                A ceramic coating is only as good as the surface beneath it. We don't just "apply" a coating; we restore the paint to a factory-plus finish before locking it in forever.
                            </p>
                            <div className="aspect-video bg-[#121212] border border-gray-800 overflow-hidden relative">
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src={ceramicVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Optional: Dark overlay if you want text on top of it later */}
                                {/* <div className="absolute inset-0 bg-black/30"></div> */}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 space-y-4">
                            {[
                                { title: "Chemical Decontamination", desc: "Dissolving embedded iron particles and road tar that washing can't touch." },
                                { title: "Mechanical Decontamination", desc: "Clay bar treatment to remove remaining surface impurities for a surgical clean." },
                                { title: "Paint Correction", desc: "The most critical step. We machine polish to remove defects, not just fill them." },
                                { title: "Surface Prep / Panel Wipe", desc: "A recursive alcohol wipe-down to ensure the surface is 100% naked for bonding." },
                                { title: "Precision Application", desc: "Hand-applied layer by layer, then leveled and cured under inspection lights." }
                            ].map((step, idx) => (
                                <div key={idx} className="process-step flex">
                                    <div className="step-num">{idx + 1}</div>
                                    <div>
                                        <h4 className="text-xl mb-2 italic text-white">{step.title}</h4>
                                        <p className="text-sm text-[#D4D4D8] leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Pricing Tiers */}
            <section id="pricing" className="py-24 md:py-48 bg-[#050505]">
                <div className="container-tight px-6 text-center">
                    <div className="inline-block">
                        <h2 className="text-5xl md:text-7xl italic font-black mb-4">CHOOSE YOUR <span className="text-[#8B5CF6]">SHIELD.</span></h2>
                        <div className="h-1 w-full bg-[#8B5CF6] " />
                    </div>
                </div>

                <div className="container-tight px-6" style={{ paddingTop: '40px' }}>
                    <div className="pricing-grid">
                        {/* Level 1 */}
                        <div className="tier-card">
                            <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-8">Level 01</p>
                            <h3 className="text-3xl italic mb-4">THE ENHANCER</h3>
                            <div className="text-5xl font-black italic text-white mb-8">$975</div>
                            <ul className="space-y-4 text-sm text-[#D4D4D8] flex-grow mb-12">
                                <li className="flex items-center gap-3"><IconCheckCircle size={16} className="text-[#8B5CF6]" /> 1-Year Ceramic Coating</li>
                                <li className="flex items-center gap-3"><IconCheckCircle size={16} className="text-[#8B5CF6]" /> 1-Step Gloss Polish</li>
                                <li className="flex items-center gap-3"><IconCheckCircle size={16} className="text-[#8B5CF6]" /> Enhanced Hydrophobicity</li>
                                <li className="flex items-center gap-3 text-gray-600 italic">Ideal for: Lease returns or budget protection</li>
                            </ul>
                            <Link to="/contact?service=ceramic_enhancer" className="btn-outline w-full py-4 uppercase">SELECT PACKAGE</Link>
                        </div>

                        {/* Level 2 */}
                        <div className="tier-card featured">
                            <div className="featured-badge">MOST POPULAR</div>
                            <p className="text-xs uppercase tracking-widest font-bold text-[#8B5CF6] mb-8">Level 02</p>
                            <h3 className="text-3xl italic mb-4">THE GUARDIAN</h3>
                            <div className="text-5xl font-black italic text-white mb-8">$1,450</div>
                            <ul className="space-y-4 text-sm text-[#D4D4D8] flex-grow mb-12">
                                <li className="flex items-center gap-3"><IconCheckCircle size={16} className="text-[#8B5CF6]" /> 3-Year Ceramic Coating</li>
                                <li className="flex items-center gap-3"><IconCheckCircle size={16} className="text-[#8B5CF6]" /> 1-Step Correction (~60% Removal)</li>
                                <li className="flex items-center gap-3"><IconCheckCircle size={16} className="text-[#8B5CF6]" /> Paint + Plastic Trim Coated</li>
                                <li className="flex items-center gap-3"><IconCheckCircle size={16} className="text-[#8B5CF6]" /> Door Jams & Wheel Faces Included</li>
                            </ul>
                            <Link to="/contact?service=ceramic_guardian" className="btn-primary w-full py-4 uppercase">SELECT PACKAGE</Link>
                        </div>

                        {/* Level 3 */}
                        <div className="tier-card">
                            <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-8">Level 03</p>
                            <h3 className="text-3xl italic mb-4">THE FORTRESS</h3>
                            <div className="text-5xl font-black italic text-white mb-8">$2,100</div>
                            <ul className="space-y-4 text-sm text-[#D4D4D8] flex-grow mb-12">
                                <li className="flex items-center gap-3"><IconCheckCircle size={16} className="text-[#8B5CF6]" /> 5+ Year Elite Protection</li>
                                <li className="flex items-center gap-3"><IconCheckCircle size={16} className="text-[#8B5CF6]" /> 2-Step Correction (~90% Removal)</li>
                                <li className="flex items-center gap-3"><IconCheckCircle size={16} className="text-[#8B5CF6]" /> Paint, Trim, Wheels, & Glass</li>
                                <li className="flex items-center gap-3"><IconCheckCircle size={16} className="text-[#8B5CF6]" /> Interior Leather/Fabric Shield</li>
                            </ul>
                            <Link to="/contact?service=ceramic_fortress" className="btn-outline w-full py-4 uppercase">SELECT PACKAGE</Link>
                        </div>
                    </div>

                    {/* Pricing Disclaimer - Moves it safely out of the cards */}
                    <div className="mt-12 text-center">
                        <p className="text-sm text-gray-500 italic">
                            * Prices are starting baselines based on sedan size. Final quote requires in-person inspection.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. FAQ Section */}
            <section className="py-24 md:py-32 bg-[#050505] border-t border-gray-900">
                <div className="container-tight px-6">
                    <div className="section-header text-left">
                        <div className="inline-block">
                            <h2 className="text-3xl md:text-5xl italic mb-4">Common Inquiries.</h2>
                            <div className="h-1 w-full bg-[#8B5CF6] mb-12" />
                        </div>
                    </div>
                    <div className="max-w-4xl">
                        {[
                            { q: "How long does the application process take?", a: "To allow for thorough decontamination, paint correction, and the 24-hour curing time required, we typically need your vehicle for 2 to 3 days depending on the package." },
                            { q: "Can I still go through a car wash?", a: "Once coated, we strictly recommend touchless washes only. Brush-based automated washes will induce swirl marks, degrade the coating, and void your service warranty." },
                            { q: "Is there a warranty on these coatings?", a: "Yes. Our Guardian (Silver) and Fortress (Gold) packages come with performance warranties provided the vehicle is maintained according to our provided aftercare guide." }
                        ].map((faq, idx) => (
                            <div key={idx} className="faq-item">
                                <div className="faq-question text-[#8B5CF6]">{faq.q}</div>
                                <p className="faq-answer">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#121212] border-t border-gray-800">
                <div className="container-tight px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black italic mb-10">INVEST IN THE <span className="text-[#8B5CF6]">FINISH.</span></h2>
                    <Link to="/contact?service=ceramic" className="btn-primary px-16 py-6 text-xl">
                        REQUEST A CUSTOM QUOTE
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Ceramic;
