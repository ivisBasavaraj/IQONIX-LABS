import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { Container } from '../common/Container';
import { COMPANY_INFO } from '../../utils/constants';

interface FormData {
  name: string;
  organization: string;
  role: string;
  city: string;
  email: string;
  phone: string;
  interestArea: string;
  preferredMethod: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  organization?: string;
  city?: string;
  email?: string;
  phone?: string;
  interestArea?: string;
  consent?: string;
  submit?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    organization: '',
    role: '',
    city: '',
    email: '',
    phone: '',
    interestArea: '',
    preferredMethod: 'Email',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    // Organization validation
    if (!formData.organization.trim()) {
      newErrors.organization = 'Please provide your school or organization name.';
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = 'Please indicate your city / state.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    // Phone validation - sensible without assuming solely Indian numbers (+ optional, 7-16 digits)
    const phoneCleaned = formData.phone.replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^\+?[0-9]{7,16}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for consultation coordination.';
    } else if (!phoneRegex.test(phoneCleaned)) {
      newErrors.phone = 'Please enter a valid phone number (7 to 15 digits, international code supported).';
    }

    // Interest Area
    if (!formData.interestArea) {
      newErrors.interestArea = 'Please select a primary area of interest.';
    }

    // Consent checkbox
    if (!formData.consent) {
      newErrors.consent = 'Your consent is required for IQONIX LABS to contact your institution.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear inline error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Future backend API handler interface
      // In accordance with SRS rules: backend APIs are out-of-scope for initial frontend build.
      // Ready for seamless hookup to POST /api/enquiries.
      await new Promise((resolve) => setTimeout(resolve, 900));

      setSubmittedName(formData.name.trim());
      setIsSuccess(true);
      setFormData({
        name: '',
        organization: '',
        role: '',
        city: '',
        email: '',
        phone: '',
        interestArea: '',
        preferredMethod: 'Email',
        message: '',
        consent: false,
      });
      setErrors({});
    } catch {
      setErrors({
        submit: 'Unable to dispatch enquiry at this moment. Please reach out via email directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-surface-container-low" id="contact">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar Information Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-caption-caps font-bold text-primary block mb-1.5">
                Get In Touch
              </span>
              <h2 className="text-section-title font-semibold text-on-surface tracking-tight mb-3">
                Contact Us
              </h2>
              <p className="text-body-sm sm:text-body text-on-surface-variant mb-6 leading-relaxed">
                Allow schools and interested organizations to enquire about programs, demonstrations, and turnkey STEM lab setup proposals.
              </p>

              {/* Contact Channels (SRS placeheld details) */}
              <div className="flex flex-col gap-5 mb-6">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm border border-primary-container/15 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-caption-caps font-bold text-outline">
                      Institutional Email
                    </div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-body-sm sm:text-body text-on-surface hover:text-primary-container font-semibold transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <div className="text-caption text-primary mt-0.5">
                      Mon–Fri • School Inquiries
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm border border-primary-container/15 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-caption-caps font-bold text-outline">
                      Advisory Desk
                    </div>
                    <div className="text-body-sm sm:text-body text-on-surface font-semibold">
                      {COMPANY_INFO.phone}
                    </div>
                    <div className="text-caption text-outline mt-0.5">
                      Direct line to be confirmed
                    </div>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm border border-primary-container/15 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-caption-caps font-bold text-outline">
                      Operating Hub
                    </div>
                    <div className="text-body-sm sm:text-body text-on-surface font-medium leading-snug">
                      {COMPANY_INFO.address}
                    </div>
                    <div className="text-caption text-primary mt-0.5">
                      Primary focus: {COMPANY_INFO.operatingRegion}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Institutional Guarantee Note matching Stitch layout */}
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-primary-container/15 shadow-sm mt-2">
              <div className="flex items-center gap-2 text-primary mb-1.5">
                <ShieldCheck className="w-4 h-4 text-primary-container" />
                <span className="text-caption-caps font-bold">Institutional Assurance</span>
              </div>
              <p className="text-caption text-on-surface-variant leading-relaxed">
                Every curriculum proposal is formulated specifically for school accreditation criteria, campus floor space, and Grades 5–10 cohort dimensions.
              </p>
            </div>
          </div>

          {/* Enquiry Form Column */}
          <div className="lg:col-span-7" id="enquiry-form">
            <div className="p-6 md:p-8 rounded-3xl bg-surface-container-lowest border border-primary-container/15 shadow-md">
              <h3 className="text-card-title font-semibold text-on-surface tracking-tight mb-1">
                Institutional Consultation & Demo Request
              </h3>
              <p className="text-caption text-on-surface-variant mb-5">
                Fields indicated with <span className="text-error font-bold">*</span> are required.
              </p>

              {isSuccess ? (
                <div className="p-8 rounded-2xl bg-surface-bright border border-primary-container/30 text-center animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-on-tertiary-container text-primary-container flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-on-surface mb-2">
                    Enquiry Details Received
                  </h4>
                  <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <strong>{submittedName}</strong>. Your consultation request has been prepared for the IQONIX LABS academic team. Our advisors will reach out to discuss curriculum alignment and lab space planning.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-lg bg-primary-container text-white text-xs font-semibold hover:bg-secondary-container transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  {errors.submit && (
                    <div className="p-3.5 rounded-xl bg-error-container/40 border border-error/30 text-error flex items-center gap-2 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.submit}</span>
                    </div>
                  )}

                  {/* Row 1: Name and School */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-caption font-semibold text-on-surface mb-1" htmlFor="name">
                        Your Full Name <span className="text-error">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className={`w-full h-10 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-sm border shadow-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-error focus:ring-error/20'
                            : 'border-primary-container/20 focus:border-primary-container focus:ring-primary-container/15'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-caption text-error">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-caption font-semibold text-on-surface mb-1" htmlFor="organization">
                        School / Organization Name <span className="text-error">*</span>
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. National Public Academy"
                        className={`w-full h-10 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-sm border shadow-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.organization
                            ? 'border-error focus:ring-error/20'
                            : 'border-primary-container/20 focus:border-primary-container focus:ring-primary-container/15'
                        }`}
                      />
                      {errors.organization && (
                        <p className="mt-1 text-caption text-error">{errors.organization}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Role and City */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-caption font-semibold text-on-surface mb-1" htmlFor="role">
                        Role / Designation <span className="text-caption text-outline font-normal">(Optional)</span>
                      </label>
                      <input
                        id="role"
                        name="role"
                        type="text"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g. Principal, STEM Coordinator"
                        className="w-full h-10 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-sm border border-primary-container/20 shadow-sm transition-all focus:outline-none focus:ring-2 focus:border-primary-container focus:ring-primary-container/15"
                      />
                    </div>

                    <div>
                      <label className="block text-caption font-semibold text-on-surface mb-1" htmlFor="city">
                        City / State <span className="text-error">*</span>
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Bengaluru, Karnataka"
                        className={`w-full h-10 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-sm border shadow-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.city
                            ? 'border-error focus:ring-error/20'
                            : 'border-primary-container/20 focus:border-primary-container focus:ring-primary-container/15'
                        }`}
                      />
                      {errors.city && (
                        <p className="mt-1 text-caption text-error">{errors.city}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-caption font-semibold text-on-surface mb-1" htmlFor="email">
                        Official Email <span className="text-error">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contact@school.edu.in"
                        className={`w-full h-10 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-sm border shadow-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-error focus:ring-error/20'
                            : 'border-primary-container/20 focus:border-primary-container focus:ring-primary-container/15'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-caption text-error">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-caption font-semibold text-on-surface mb-1" htmlFor="phone">
                        Contact Phone <span className="text-error">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full h-10 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface text-body-sm border shadow-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? 'border-error focus:ring-error/20'
                            : 'border-primary-container/20 focus:border-primary-container focus:ring-primary-container/15'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-caption text-error">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Interest Area and Contact Method */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-caption font-semibold text-on-surface mb-1" htmlFor="interestArea">
                        Primary Interest Area <span className="text-error">*</span>
                      </label>
                      <select
                        id="interestArea"
                        name="interestArea"
                        value={formData.interestArea}
                        onChange={handleChange}
                        className={`w-full h-10 px-3 rounded-lg bg-surface-container-lowest text-on-surface text-body-sm border shadow-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.interestArea
                            ? 'border-error focus:ring-error/20'
                            : 'border-primary-container/20 focus:border-primary-container focus:ring-primary-container/15'
                        }`}
                      >
                        <option value="">Select Primary Focus</option>
                        <option value="Robotics Program">Robotics Curriculum Module</option>
                        <option value="Aeronautics Program">Aeronautics & Drone Module</option>
                        <option value="Programming / Coding">Programming & Coding Module</option>
                        <option value="STEM Lab Setup">Turnkey School STEM Lab Setup</option>
                        <option value="School Demonstration">On-Campus Interactive Demonstration</option>
                        <option value="Comprehensive Package">All-Inclusive STEM Program</option>
                      </select>
                      {errors.interestArea && (
                        <p className="mt-1 text-caption text-error">{errors.interestArea}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-caption font-semibold text-on-surface mb-1" htmlFor="preferredMethod">
                        Preferred Contact Method <span className="text-caption text-outline font-normal">(Optional)</span>
                      </label>
                      <select
                        id="preferredMethod"
                        name="preferredMethod"
                        value={formData.preferredMethod}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-lg bg-surface-container-lowest text-on-surface text-body-sm border border-primary-container/20 shadow-sm transition-all focus:outline-none focus:ring-2 focus:border-primary-container focus:ring-primary-container/15"
                      >
                        <option value="Email">Email Communication</option>
                        <option value="Phone">Phone Consultation</option>
                        <option value="Campus Visit">Campus Meeting / Visit</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-caption font-semibold text-on-surface mb-1" htmlFor="message">
                      Additional Details / Requirements <span className="text-caption text-outline font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share student cohort sizes (Grades 5–10), lab spatial dimensions, target board syllabus (CBSE/ICSE), or preferred timeline..."
                      className="w-full p-3 rounded-lg bg-surface-container-lowest text-on-surface text-body-sm border border-primary-container/20 shadow-sm transition-all focus:outline-none focus:ring-2 focus:border-primary-container focus:ring-primary-container/15"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <div className="flex items-start gap-2.5">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="w-4 h-4 rounded text-primary-container border-primary-container/30 focus:ring-primary-container accent-primary-container mt-0.5 shrink-0"
                      />
                      <label htmlFor="consent" className="text-caption text-on-surface-variant leading-relaxed select-none">
                        I consent to IQONIX LABS contacting our institution regarding STEM programs, demonstrations, and lab setup proposals in accordance with the{' '}
                        <a href="/privacy-policy" className="text-primary-container underline hover:text-secondary-container">
                          Privacy Policy
                        </a>
                        . <span className="text-error">*</span>
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="mt-1 text-caption text-error pl-6">{errors.consent}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 mt-1 rounded-lg bg-primary-container text-white text-btn font-semibold shadow-md hover:bg-secondary-container hover:shadow-[0_4px_16px_rgba(23,105,224,0.28)] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing Consultation Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
