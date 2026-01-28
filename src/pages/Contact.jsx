import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

// --- INLINE SVG COMPONENTS (Standalone) ---

const IconPhone = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const IconMapPin = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const IconClock = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const IconUpload = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
);

const Contact = () => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        // Wait for the form to submit to the iframe, then redirect
        setTimeout(() => {
            navigate('/thank-you');
        }, 1000);
    };

    return (
        <div className="contact-page">

            {/* 1. Header Section */}
            <section className="pt-32 pb-16 bg-[#050505]">
                <div className="container-tight px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-black italic mb-6">READY TO GET <span className="text-[#8B5CF6]">GLAZED?</span></h1>
                    <p className="max-w-2xl mx-auto text-lg text-[#D4D4D8]">Book your detail below or contact us directly for immediate inquiries.</p>

                    <div className="contact-info-grid">
                        <div className="contact-info-card">
                            <div className="contact-icon"><IconPhone size={32} /></div>
                            <h4 className="text-white text-sm mb-2">CALL OR TEXT</h4>
                            <a href="tel:7806556748" className="text-2xl font-black italic hover:text-[#8B5CF6] transition-colors">780-655-6748</a>
                        </div>
                        <div className="contact-info-card">
                            <div className="contact-icon"><IconMapPin size={32} /></div>
                            <h4 className="text-white text-sm mb-2">SERVICE AREA</h4>
                            <p className="text-xl font-bold">Grande Prairie, AB & Area</p>
                        </div>
                        <div className="contact-info-card">
                            <div className="contact-icon"><IconClock size={32} /></div>
                            <h4 className="text-white text-sm mb-2">HOURS</h4>
                            <p className="text-xl font-bold">Mon-Sun: 8am - 8pm</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. The Booking Form */}
            <section className="py-24 bg-[#050505] border-t border-gray-900">
                <div className="container-tight px-6">

                    {/* UX Bridge: The "Why" before the form */}
                    <div className="text-center mt-8 mb-16 max-w-3xl mx-auto">
                        <p className="text-[#8B5CF6] font-bold uppercase tracking-[0.2em] text-xs mb-4">The Premium Angle</p>
                        <h2 className="text-4xl md:text-6xl italic font-black mb-6">LET'S TAILOR YOUR SERVICE.</h2>
                        <p className="text-[#D4D4D8] text-lg leading-relaxed">
                            Every vehicle is different. Share your specs below so we can bring the perfect tools and products for your finish.
                        </p>
                    </div>

                    <form
                        action="https://forms.zohopublic.ca/glazedautomotivedetailsgm1/form/BookYourDetailRequest/formperma/efL2DDGNag4Toshhi8bp52S3_16BcFS_nsNdiMkNgIw/htmlRecords/submit"
                        name="form"
                        id="form"
                        method="POST"
                        acceptCharset="UTF-8"
                        encType="multipart/form-data"
                        className="booking-form"
                        target="hiddenFrame"
                        onSubmit={handleSubmit}
                    >
                        {/* Hidden Fields for Zoho */}
                        <input type="hidden" name="zf_referrer_name" value="" />
                        <input type="hidden" name="zf_redirect_url" value="" />
                        <input type="hidden" name="zc_gad" value="" />

                        {/* --- Fieldset: Identity --- */}
                        <div className="form-fieldset">
                            <span className="fieldset-legend">01. Identity</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input type="text" name="Name_First" className="form-input" placeholder="John" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" name="Name_Last" className="form-input" placeholder="Doe" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone Number</label>
                                    <input type="tel" name="PhoneNumber_countrycode" className="form-input" placeholder="780-000-0000" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" name="Email" className="form-input" placeholder="john@example.com" required />
                                </div>
                            </div>
                        </div>

                        {/* --- Fieldset: Vehicle Specs --- */}
                        <div className="form-fieldset">
                            <span className="fieldset-legend">02. Vehicle Specs</span>
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="form-group">
                                    <label className="form-label">Vehicle Type</label>
                                    <select name="Dropdown" className="form-select" required>
                                        <option value="">Select Type</option>
                                        <option value="Daily Driver">Daily Driver</option>
                                        <option value="Work Truck / Service Vehicle">Work Truck / Service Vehicle</option>
                                        <option value="Family Vehicle">Family Vehicle</option>
                                        <option value="Weekend / Show Vehicle">Weekend / Show Vehicle</option>
                                        <option value="Fleet Vehicle (Business)">Fleet Vehicle (Business)</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Year</label>
                                    <input type="number" name="Number" className="form-input" placeholder="2024" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Body Style</label>
                                    <select name="Dropdown1" className="form-select">
                                        <option value="">Select Style</option>
                                        <option value="Car / Sedan">Car / Sedan</option>
                                        <option value="SUV / Crossover">SUV / Crossover</option>
                                        <option value="Truck (Mid-size)">Truck (Mid-size)</option>
                                        <option value="Truck (Full-size)">Truck (Full-size)</option>
                                        <option value="Industrial Work Equipment">Industrial Work Equipment</option>
                                        <option value="Van">Van</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="form-group">
                                    <label className="form-label">Make & Model</label>
                                    <input type="text" name="SingleLine" className="form-input" placeholder="Ford F-150 / Tesla Model 3" />
                                </div>
                                <div className="form-group sm:col-span-1">
                                    <label className="form-label">Color</label>
                                    <input type="text" name="SingleLine1" className="form-input" placeholder="Midnight Blue" />
                                </div>
                            </div>

                        </div>

                        {/* --- Fieldset: Service Selection --- */}
                        <div className="form-fieldset">
                            <span className="fieldset-legend">03. Service Selection</span>
                            <div className="form-group mb-6">
                                <label className="form-label">Category</label>
                                <div className="choice-group">
                                    {["Interior", "Exterior", "Interior + Exterior", "Ceramic Coating", "Not sure, recommend one"].map(cat => (
                                        <label key={cat} className="choice-item">
                                            <input type="radio" name="Radio" value={cat} />
                                            <span>{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="form-group mb-6">
                                <label className="form-label">Desired Package</label>
                                <select name="Dropdown2" className="form-select">
                                    <option value="">Select a Base Package</option>
                                    <option value="Quick In & Out">Quick In & Out</option>
                                    <option value="Deep In & Out">Deep In & Out</option>
                                    <option value="Full In & Out Reset">Full In & Out Reset</option>
                                    <option value="Touch-Up Interior Clean">Touch-Up Interior Clean</option>
                                    <option value="Deep Interior Detail">Deep Interior Detail</option>
                                    <option value="Full Interior Reset">Full Interior Reset</option>
                                    <option value="Basic Exterior Wash">Basic Exterior Wash</option>
                                    <option value="Full Exterior Detail">Full Exterior Detail</option>
                                    <option value="Ceramic: Bronze">Ceramic: Bronze</option>
                                    <option value="Ceramic: Silver">Ceramic: Silver</option>
                                    <option value="Ceramic: Gold">Ceramic: Gold</option>
                                    <option value="Not sure">Not sure</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Add-ons (Select Multiple)</label>
                                <div className="choice-group">
                                    {["Pet Hair Removal", "Stain / Spill Treatment", "Odor Removal", "Seat Shampoo / Extraction", "Headliner Spot Clean", "Clay Bar / Decontamination", "Wheel Polish / Deep Wheel Clean", "Not sure"].map(addon => (
                                        <label key={addon} className="choice-item">
                                            <input type="checkbox" name="Checkbox" value={addon} />
                                            <span>{addon}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* --- Fieldset: Logistics & Condition --- */}
                        <div className="form-fieldset">
                            <span className="fieldset-legend">04. Logistics & Condition</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-group">
                                    <label className="form-label">Interior Condition</label>
                                    <div className="choice-group">
                                        {["Dog hair", "Sand / mud", "Food / crumbs", "Stains", "Odor / smoke smell", "Kids / toddler mess", "None of the above"].map(cond => (
                                            <label key={cond} className="choice-item">
                                                <input type="checkbox" name="Checkbox1" value={cond} />
                                                <span>{cond}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Current Budget Range</label>
                                    <select name="Dropdown3" className="form-select">
                                        <option value="">Select Budget</option>
                                        <option value="Under $150">Under $150</option>
                                        <option value="$150–$250">$150–$250</option>
                                        <option value="$250–$400">$250–$400</option>
                                        <option value="$400–$700">$400–$700</option>
                                        <option value="$700+">$700+</option>
                                        <option value="Price is not a concern">Price is not a concern</option>
                                        <option value="Not sure">Not sure</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                                <div className="form-group">
                                    <label className="form-label">Pets in Vehicle?</label>
                                    <div className="choice-group">
                                        <label className="choice-item"><input type="checkbox" name="MultipleChoice" value="Yes" /> Yes</label>
                                        <label className="choice-item"><input type="checkbox" name="MultipleChoice" value="No" /> No</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Kids / Toddlers in Vehicle?</label>
                                    <div className="choice-group">
                                        <label className="choice-item"><input type="checkbox" name="Checkbox2" value="Yes" /> Yes</label>
                                        <label className="choice-item"><input type="checkbox" name="Checkbox2" value="No" /> No</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Access to Power/Water?</label>
                                    <div className="choice-group">
                                        <label className="choice-item"><input type="radio" name="Radio3" value="Yes" /> Yes</label>
                                        <label className="choice-item"><input type="radio" name="Radio3" value="No" /> No</label>
                                        <label className="choice-item"><input type="radio" name="Radio3" value="Not Sure" /> Not Sure</label>
                                    </div>
                                </div>
                            </div>

                            {/* New Field: Primary Goal */}
                            <div className="form-group mt-8">
                                <label className="form-label">Primary Goal with this Detail?</label>
                                <div className="choice-group">
                                    {["Maintenance clean", "Deep reset", "Prepare to sell", "Prepare for trip / event", "Just bought it, want it dialed", "Not sure"].map(goal => (
                                        <label key={goal} className="choice-item">
                                            <input type="radio" name="Radio1" value={goal} />
                                            <span>{goal}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* --- Fieldset: Scheduling --- */}
                        <div className="form-fieldset">
                            <span className="fieldset-legend">05. Scheduling</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="form-group">
                                    <label className="form-label">Preferred Contact Method</label>
                                    <div className="choice-group">
                                        <label className="choice-item"><input type="radio" name="Radio2" value="Text" /> Text</label>
                                        <label className="choice-item"><input type="radio" name="Radio2" value="Call" /> Call</label>
                                        <label className="choice-item"><input type="radio" name="Radio2" value="Email" /> Email</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Service Days</label>
                                    <div className="choice-group">
                                        <label className="choice-item"><input type="checkbox" name="Checkbox3" value="Weekdays" /> Weekdays</label>
                                        <label className="choice-item"><input type="checkbox" name="Checkbox3" value="Weekends" /> Weekends</label>
                                        <label className="choice-item"><input type="checkbox" name="Checkbox3" value="Either or" /> Either or</label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                                <div className="form-group">
                                    <label className="form-label">Time of Day</label>
                                    <select name="Dropdown4" className="form-select">
                                        <option value="Morning (8–12)">Morning (8–12)</option>
                                        <option value="Afternoon (12–5)">Afternoon (12–5)</option>
                                        <option value="Evening (5–8)">Evening (5–8)</option>
                                        <option value="Flexible">Flexible</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Location Type</label>
                                    <select name="Dropdown5" className="form-select">
                                        <option value="Home">Home</option>
                                        <option value="Work">Work</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Physical Address</label>
                                    <input type="text" name="SingleLine2" className="form-input" placeholder="123 Street Name, GP" required />
                                </div>
                            </div>
                        </div>

                        {/* --- Fieldset: Final Details --- */}
                        <div className="form-fieldset">
                            <span className="fieldset-legend">06. Final Details</span>
                            <div className="form-group mb-6">
                                <label className="form-label">Additional Notes / Special Instructions</label>
                                <textarea name="MultiLine" className="form-textarea" rows="4" placeholder="Tell us about specific stains, fragile parts, or timing needs..."></textarea>
                            </div>
                            <div className="form-group mb-8">
                                <label className="form-label">Upload Vehicle Photos (Optional)</label>
                                <div className="file-upload-wrapper">
                                    <IconUpload size={32} className="text-[#8B5CF6] mx-auto mb-2" />
                                    <p className="text-sm text-gray-500 mb-4">Click to upload or drag and drop before / after photos of the condition</p>
                                    <input type="file" name="ImageUpload" multiple className="form-input w-full" />
                                </div>
                            </div>
                            <div className="consent-wrapper">
                                <label className="consent-text flex items-start gap-3">
                                    <input type="checkbox" name="Checkbox4" value="Yes" required />
                                    <span>I agree to be contacted by Glazed Automotive Details by text/call/email about this request.</span>
                                </label>
                            </div>

                            {/* New Field: Referral */}
                            <div className="form-group mt-6">
                                <label className="form-label">How did you hear about us?</label>
                                <select name="Dropdown6" className="form-select">
                                    <option value="">Select Source</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="Google">Google</option>
                                    <option value="Friend / Referral">Friend / Referral</option>
                                    <option value="Saw a vehicle / in person">Saw a vehicle / in person</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn-primary btn-submit">
                            SUBMIT BOOKING REQUEST
                        </button>
                    </form>

                    {/* Hidden iframe for form submission target */}
                    <iframe name="hiddenFrame" style={{ display: 'none' }}></iframe>
                </div>
            </section>

        </div>
    );
};

export default Contact;
