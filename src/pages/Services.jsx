import React from 'react';
import './Services.css';

// --- INLINE SVG COMPONENTS (Standalone) ---

const IconSparkles = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
    </svg>
);

const IconDroplets = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M7 16.3c2.2 0 4-1.8 4-4 0-1.2-.5-2.2-1.3-2.9l-2.7-2.7-2.7 2.7c-.8.7-1.3 1.7-1.3 2.9 0 2.2 1.8 4 4 4Z" />
        <path d="M17 19.3c2.2 0 4-1.8 4-4 0-1.2-.5-2.2-1.3-2.9l-2.7-2.7-2.7 2.7c-.8.7-1.3 1.7-1.3 2.9 0 2.2 1.8 4 4 4Z" />
    </svg>
);

const IconCar = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.2-1.4.7l-1.2 1.6C1.4 10.3 1 11.1 1 12v5c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
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

const IconShieldCheck = ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const Services = () => {
    return (
        <div className="services-page">

            {/* 1. Header Section */}
            <section className="pt-32 pb-16 bg-[#050505]">
                <div className="container-tight px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-black italic mb-6">SERVICES & <span className="text-[#8B5CF6]">PRICING.</span></h1>
                    <p className="max-w-2xl mx-auto text-lg text-[#D4D4D8]">Transparent pricing. Professional results. Mobile convenience in Grande Prairie.</p>
                </div>
            </section>

            {/* 2. Sticky Sub-Nav */}
            <nav className="services-subnav">
                <div className="subnav-container">
                    <a href="#interior" className="subnav-link">Interior</a>
                    <a href="#exterior" className="subnav-link">Exterior</a>
                    <a href="#packages" className="subnav-link">Packages</a>
                    <a href="#ceramic" className="subnav-link">Ceramic</a>
                    <a href="#fleet" className="subnav-link">Fleet</a>
                </div>
            </nav>

            {/* 3. Interior Services */}
            <section id="interior" className="services-section">
                <div className="container-tight px-6">
                    <div className="section-header">
                        <div className="inline-block">
                            <h2 className="text-3xl md:text-4xl italic">Interior Precision</h2>
                            <div className="h-1 w-full bg-[#8B5CF6] mt-2" />
                        </div>
                    </div>
                    <div className="services-grid grid-4">
                        <div className="service-card">
                            <span className="service-price">$99</span>
                            <h3 className="service-title">Touch-Up Interior Clean</h3>
                            <p className="service-details">Maintenance / quick refresh, Light vacuum, High-touch wipe-down.</p>
                        </div>
                        <div className="service-card">
                            <span className="service-price text-[#8B5CF6]">$180 - $235</span>
                            <h3 className="service-title">Deep Interior Detail</h3>
                            <p className="service-details">Most popular option, Full vacuum & blow-out, Panels/dash/vents, Floor mats cleaned.</p>
                        </div>
                        <div className="service-card">
                            <span className="service-price">$235 - $285</span>
                            <h3 className="service-title">Full Interior Detail</h3>
                            <p className="service-details">Heavily soiled / pet hair / spills. Everything in Deep Detail + Shampoo & extraction.</p>
                        </div>
                        <div className="service-card">
                            <span className="service-price">$110</span>
                            <h3 className="service-title">Single-Cab / Small Car</h3>
                            <p className="service-details">Interior detail for small cars. (Light-moderate condition only).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Exterior Services */}
            <section id="exterior" className="services-section">
                <div className="container-tight px-6">
                    <div className="section-header">
                        <div className="inline-block">
                            <h2 className="text-3xl md:text-4xl italic">Exterior Radiance</h2>
                            <div className="h-1 w-full bg-[#8B5CF6] mt-2" />
                        </div>
                    </div>
                    {/* EXTERIOR RADIANCE GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="service-card">
                            <div className="service-icon"><IconDroplets size={32} /></div>
                            <span className="service-price">$45</span>
                            <h3 className="service-title">Basic Exterior Wash</h3>
                            <p className="service-details">Hand wash, Wheels & tires, Exterior glass.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><IconSparkles size={32} /></div>
                            <span className="service-price text-[#8B5CF6]">$65 - $85</span>
                            <h3 className="service-title">Full Exterior Detail</h3>
                            <p className="service-details">Thorough wash, Wheel wells, More detailed finish.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><IconCar size={32} /></div>
                            <span className="service-price">+$25</span>
                            <h3 className="service-title">Engine Bay Clean</h3>
                            <p className="service-details">Safe degreasing and dressing. Add-on to any service.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Packages */}
            <section id="packages" className="services-section bg-[#080808]">
                <div className="container-tight px-6">
                    <div className="section-header">
                        <div className="inline-block">
                            <h2 className="text-3xl md:text-4xl italic">Value Packages</h2>
                            <div className="h-1 w-full bg-[#8B5CF6] mt-2" />
                        </div>
                    </div>
                    {/* VALUE PACKAGES GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        <div className="service-card">
                            <span className="service-price">$135 - $155</span>
                            <h3 className="service-title">Quick In, Basic Out</h3>
                            <p className="service-details">Includes: Touch-Up Interior + Basic Exterior Wash.</p>
                        </div>
                        <div className="service-card featured border-[#8B5CF6]">
                            <div className="badge-best-value">BEST VALUE</div>
                            <span className="service-price text-[#8B5CF6]">$205 - $225</span>
                            <h3 className="service-title">Deep In, Basic Out</h3>
                            <p className="service-details">Includes: Deep Interior Detail + Basic Exterior Wash.</p>
                        </div>
                        <div className="service-card">
                            <span className="service-price">$295 - $320</span>
                            <h3 className="service-title">Full In, Full Out</h3>
                            <p className="service-details">Includes: Full Interior Detail + Full Exterior Detail.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Ceramic Coating */}
            <section id="ceramic" className="services-section">
                <div className="container-tight px-6">
                    <div className="section-header">
                        <div className="inline-block">
                            <h2 className="text-3xl md:text-5xl italic mb-4">Elite Protection</h2>
                            <div className="h-1 w-full bg-[#8B5CF6] mb-4" />
                        </div>
                        <p className="text-[#8B5CF6] font-bold tracking-widest uppercase text-xs">Ceramic Coating Tiers</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="ceramic-tier">
                            <div className="tier-name">Bronze</div>
                            <div className="text-5xl font-black italic mb-6">$975</div>
                            <ul className="text-sm text-[#D4D4D8] space-y-3 mb-10">
                                <li>1-Year Protection</li>
                                <li>Gloss Polish</li>
                                <li>Wheel Faces Protected</li>
                                <li>Glass Coating</li>
                            </ul>
                        </div>
                        <div className="ceramic-tier featured">
                            <div className="tier-name">Silver</div>
                            <div className="text-5xl font-black italic mb-6">$1,450</div>
                            <ul className="text-sm text-[#D4D4D8] space-y-3 mb-10">
                                <li>3-Year Protection</li>
                                <li>1-Step Paint Correction</li>
                                <li>Wheel Faces Protected</li>
                                <li>All Glass Coated</li>
                            </ul>
                        </div>
                        <div className="ceramic-tier">
                            <div className="tier-name">Gold</div>
                            <div className="text-5xl font-black italic mb-6">$2,100</div>
                            <ul className="text-sm text-[#D4D4D8] space-y-3 mb-10">
                                <li>5-Year Protection</li>
                                <li>2-Step Paint Correction</li>
                                <li>Wheel Wells & Faces</li>
                                <li>Full Interior Shield</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <a href="/ceramic" className="btn-primary" style={{ display: 'inline-block' }}>
                            EXPLORE CERAMIC COATING →
                        </a>
                    </div>
                </div>
            </section>

            {/* 7. Industrial & Fleet */}
            <section id="fleet" className="services-section bg-[#121212]">
                <div className="container-tight px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 text-[#8B5CF6] mb-4">
                            <IconTruck size={24} />
                            <span className="text-xs font-black tracking-widest uppercase">Industrial Grade</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black italic mb-6">BUILT FOR <br /><span className="text-[#8B5CF6]">THE OILFIELD.</span></h2>
                        <p className="text-[#D4D4D8] text-lg mb-8">Heavy-duty cleaning for GP's industrial backbone. Recurring scheduling and volume rates available.</p>
                        <button className="btn-primary">REQUEST FLEET PROPOSAL</button>
                    </div>
                    <div className="md:w-1/3 w-full bg-[#050505] p-8 border border-gray-800">
                        <div className="space-y-8">
                            <div>
                                <span className="text-xs uppercase text-[#8B5CF6] font-bold tracking-widest">Premium Revivify</span>
                                <p className="text-2xl font-black italic mt-1">Custom Quote</p>
                            </div>
                            <div className="h-[1px] bg-gray-900" />
                            <div>
                                <span className="text-xs uppercase text-[#8B5CF6] font-bold tracking-widest">Crew Change</span>
                                <p className="text-2xl font-black italic mt-1">$85 / unit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Trust Banner */}
            <section className="py-16 bg-[#050505] border-t border-gray-900">
                <div className="container-tight px-6 flex flex-wrap justify-center gap-12 lg:grayscale lg:opacity-50">
                    <div className="flex items-center gap-2"><IconShieldCheck size={20} className="text-[#8B5CF6]" /> <span className="text-xs font-bold uppercase tracking-widest">Licensed & Insured</span></div>
                    <div className="flex items-center gap-2"><IconSparkles size={20} className="text-[#8B5CF6]" /> <span className="text-xs font-bold uppercase tracking-widest">Premium Chemicals</span></div>
                    <div className="flex items-center gap-2"><IconDroplets size={20} className="text-[#8B5CF6]" /> <span className="text-xs font-bold uppercase tracking-widest">Client Water & Power</span></div>
                </div>
            </section>

            {/* Pricing Disclaimer - Added per Casey's Feedback */}
            <div className="container-tight px-6 pb-12">
                <div className="py-8 border-t border-gray-900 text-center">
                    <p className="text-gray-500 text-sm italic max-w-2xl mx-auto">
                        * Note: All listed prices are starting rates. Final pricing may vary subject to
                        vehicle condition (heavy soiling, pet hair, mud, etc.) or vehicle size.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Services;
