import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Home.css';
import ceramicImg from "../assets/ceramic-coating-grande-prairie.jpg";
import project1Img from '../assets/mobile-detailing-grande-prairie-before-after.webp';
import project1Img2 from '../assets/auto-detailing-interior-grande-prairie.png';
import project1Img3 from '../assets/car-detailing-peace-region.png';
import project1Img4 from '../assets/truck-polishing-grande-prairie.png';
import heroVideo from '../assets/mobile-detailing-grande-prairie-hero.mp4';
import mobileUnitImg from '../assets/mobile-auto-detailing-unit-grande-prairie.jpg';

// --- INLINE SVG COMPONENTS (Standalone Replacements for Lucide) ---

const IconStar = ({ size = 24, fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconShieldCheck = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
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

const IconBuilding = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M8 10h.01" />
    <path d="M16 10h.01" />
    <path d="M8 14h.01" />
    <path d="M16 14h.01" />
  </svg>
);

const IconArrowRight = ({ size = 24, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const IconCheckCircle = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Home = () => {
  return (
    <div className="home-page overflow-x-hidden">

      <Helmet>
        <title>Glazed Automotive Details | #1 Mobile Detailing Grande Prairie</title>
        <meta name="description" content="Grande Prairie's #1 mobile auto detailing service. We come to you — ceramic coating, deep interior cleaning, and fleet washing anywhere in the Peace Region. Book online today." />
        <link rel="canonical" href="https://glazeddetails.ca/" />
      </Helmet>

      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/65 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505] z-20" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        <div className="container-tight relative z-20 text-center px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121212] border border-gray-800 rounded-full mb-6">
            <div className="flex text-[#8B5CF6]">
              {[...Array(5)].map((_, i) => <IconStar key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-white">Grande Prairie's #1 Mobile Detailer</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter mb-6 leading-[0.9]">
            <span className="block text-xl md:text-2xl text-gray-400 uppercase tracking-widest font-bold mb-4 not-italic">Grande Prairie's Premier</span>
            MOBILE <br />
            <span className="text-[#8B5CF6]">DETAILING.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#D4D4D8] mb-10 font-medium">
            We bring the studio-quality finish to your driveway. Experience
            professional automotive care at the comfort of your home or office.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/contact" className="btn-primary w-full sm:w-auto">
              BOOK AN APPOINTMENT
            </Link>
            <a href="tel:7806556748" className="btn-outline w-full sm:w-auto">
              780-655-6748
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-[#D4D4D8]">
            <div className="flex items-center gap-2">
              <IconShieldCheck className="text-[#8B5CF6]" size={20} />
              <span className="text-xs uppercase font-bold tracking-wider">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Taster Service Grid */}
      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="container-tight px-6">
          <div className="section-header">
            <div className="inline-block">
              <h2 className="text-3xl md:text-5xl mb-4 italic">The Standard.</h2>
              <div className="h-1 w-full bg-[#8B5CF6] mb-4" />
            </div>
            <p className="text-[#8B5CF6] font-bold uppercase tracking-[0.2em] text-xs">Core Service Pillars</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Daily Drivers */}
            <div className="group bg-[#121212] border border-gray-800/50 p-8 hover:border-[#8B5CF6] transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-[#8B5CF6] mb-6">
                  <IconCar size={32} />
                </div>
                <h3 className="text-2xl mb-4 italic">Daily Drivers</h3>
                <p className="text-[#D4D4D8] text-sm mb-8 leading-relaxed">
                  Deep interior resets and paint protection for the vehicles that keep your life moving.
                </p>
                <Link to="/services" className="inline-flex items-center text-[#8B5CF6] text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                  View Details <IconArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Work Trucks */}
            <div className="group bg-[#121212] border border-gray-800/50 p-8 hover:border-[#8B5CF6] transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
              <div className="text-[#8B5CF6] mb-6">
                <IconTruck size={32} />
              </div>
              <h3 className="text-2xl mb-4 italic">Work Trucks</h3>
              <p className="text-[#D4D4D8] text-sm mb-8 leading-relaxed">
                Industrial-grade cleaning for trucks that work as hard as you do. Mud, salt, and grime removed.
              </p>
              <Link to="/services" className="inline-flex items-center text-[#8B5CF6] text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                View Details <IconArrowRight size={14} className="ml-2" />
              </Link>
            </div>

            {/* Fleet Services */}
            <div className="group bg-[#121212] border border-gray-800/50 p-8 hover:border-[#8B5CF6] transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
              <div className="text-[#8B5CF6] mb-6">
                <IconBuilding size={32} />
              </div>
              <h3 className="text-2xl mb-4 italic">Fleet Services</h3>
              <p className="text-[#D4D4D8] text-sm mb-8 leading-relaxed">
                Professional recurring maintenance for local businesses. Keep your brand looking its sharpest.
              </p>
              <Link to="/fleet" className="inline-flex items-center text-[#8B5CF6] text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                View Details <IconArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ceramic Coating Feature */}
      <section className="py-24 md:py-32 bg-[#050505] border-y border-gray-900">
        <div className="container-tight px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <p className="text-[#8B5CF6] font-bold uppercase tracking-[0.2em] text-xs mb-4">Elite Protection</p>
              <h2 className="text-4xl md:text-6xl mb-6 italic leading-tight">PERMANENT PROTECTION.<br />NOT A WAX.</h2>
              <p className="text-[#D4D4D8] text-lg mb-10 leading-relaxed">
                Experience unparalleled gloss and hydrophobicity. Our ceramic coatings create a molecular bond with your paint, shielding it from GP's harsh elements and UV damage for years, not weeks.
              </p>
              <Link to="/ceramic" className="btn-outline">
                EXPLORE CERAMIC COATINGS
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square bg-[#121212] flex items-center justify-center border border-gray-800 relative overflow-hidden group">
                <img
                  className="w-full h-full object-cover lg:grayscale lg:opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  alt="Ceramic coating application on luxury vehicle in the Peace Region"
                  src={ceramicImg}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Value Proposition */}
      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="container-tight px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl mb-8 italic">WE BRING THE SHOP TO YOU.</h2>
              <div className="space-y-6">
                {[
                  "Your vehicle never leaves your sight",
                  "Fully equipped mobile detailing unit",
                  "Home or office convenience",
                  "Professional grade chemicals & tools"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-[#D4D4D8]">
                    <div className="text-[#8B5CF6]">
                      <IconCheckCircle size={24} />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-video bg-[#121212] border border-gray-800 overflow-hidden group">
                <img
                  src={mobileUnitImg}
                  alt="Mobile detailing unit providing service at client home in Grande Prairie"
                  className="w-full h-full object-cover lg:grayscale lg:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Real Results Gallery */}
      <section className="py-24 bg-[#050505] border-t border-gray-900">
        <div className="container-tight px-6">
          <div className="section-header text-left">
            <div className="inline-block">
              <h2 className="text-3xl md:text-5xl italic">Real Results.</h2>
              <div className="h-1 w-full bg-[#8B5CF6] mt-4" />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            {/* BOX 1: Your New Image */}
            <div className="aspect-square bg-[#121212] border border-gray-800 hover:border-[#8B5CF6] transition-all overflow-hidden group">
              <img
                src={project1Img}
                alt="Mobile detailing before and after dirty truck in Grande Prairie"
                className="w-full h-full object-cover lg:grayscale lg:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>

            {/* BOX 2: Placeholder (Copy Box 1 code here when you have a 2nd image) */}
            <div className="aspect-square bg-[#121212] border border-gray-800 hover:border-[#8B5CF6] transition-all overflow-hidden group">
              <img
                src={project1Img2}
                alt="Interior auto detailing on a daily driver in Grande Prairie"
                className="w-full h-full object-cover lg:grayscale lg:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>

            {/* BOX 3: Placeholder */}
            <div className="aspect-square bg-[#121212] border border-gray-800 hover:border-[#8B5CF6] transition-all overflow-hidden group">
              <img
                src={project1Img3}
                alt="Car detailing results in the Peace Region Alberta"
                className="w-full h-full object-cover lg:grayscale lg:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>

            {/* BOX 4: Placeholder */}
            <div className="aspect-square bg-[#121212] border border-gray-800 hover:border-[#8B5CF6] transition-all overflow-hidden group">
              <img
                src={project1Img4}
                alt="Truck polishing and detailing service in Grande Prairie"
                className="w-full h-full object-cover lg:grayscale lg:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-[#050505]">
        <div className="container-tight px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Joanne B.", text: "I was truly impressed by the professionalism and attention to detail shown by Glazed Automotive Details. They did an exceptional job on my vehicle, and it's clear they take great pride in their work. I highly recommend their services to anyone looking for quality and care" },
              { name: "Shadane B", text: "Casey and the team did a great job on my Van. It was detailed to sell and the detail job was immaculate to the point I reconsidered selling. Top notch service at an affordable cost. Great job guys and you will definitely be seeing more vehicles from me in the future." },
              { name: "Heaven F.", text: "My husband took my car in to get detailed for the first time in 6 years since we've owned it and I was super impressed with how clean it turned out. They even cleaned my kids car seats which was so nice of them to do. I did not expect that at all! I recommend Glazed to everyone I know." }
            ].map((rev, idx) => (
              <div key={idx} className="p-8 border-l border-gray-800 italic">
                <div className="flex text-[#8B5CF6] mb-4">
                  {[...Array(5)].map((_, i) => <IconStar key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-lg text-white mb-6 leading-relaxed">"{rev.text}"</p>
                <span className="text-xs uppercase tracking-widest font-black text-[#8B5CF6]">— {rev.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-[#050505]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-tight px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl italic font-black mb-6 tracking-tighter uppercase">READY TO GET <span className="text-[#8B5CF6]">GLAZED?</span></h2>
          <p className="text-sm uppercase tracking-[0.3em] font-bold text-[#D4D4D8] mb-10">Limited Weekly Availability</p>
          <div className="flex justify-center">
            <Link to="/contact" className="btn-primary px-12 py-5 text-lg">
              BOOK YOUR SLOT
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
