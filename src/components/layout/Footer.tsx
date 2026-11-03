import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  ArrowUpRight,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
} from 'lucide-react';
import { FOOTER_CURRICULUM_LINKS, FOOTER_INSTITUTE_LINKS } from '../../data/navigation';
import { COMPANY_INFO } from '../../utils/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-inverse-surface border-t border-primary-container/20 text-on-primary-container">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand & Overview */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img
                src="/logo/iqonix-logo.jpg"
                alt="IQONIX LABS Logo"
                className="w-9 h-9 object-contain rounded-md bg-white p-0.5"
              />
              <div className="flex items-center">
                <span className="text-lg font-bold tracking-tight text-white">IQONIX</span>
                <span className="text-lg font-bold tracking-tight text-primary-fixed-dim ml-1">LABS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim mb-1.5 ml-1"></span>
              </div>
            </Link>

            <p className="text-footer text-on-primary-container/80 max-w-sm mb-5 leading-relaxed">
              {COMPANY_INFO.shortDescription}
            </p>

            {/* Contact Placeholders with clear notice */}
            <div className="flex flex-col gap-2 text-caption text-on-primary-container/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary-fixed-dim shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary-fixed-dim shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary-fixed-dim shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Curriculum & Systems Links */}
          <div className="lg:col-span-3">
            <h4 className="text-caption-caps font-bold text-primary-fixed mb-3">
              Curriculum & Systems
            </h4>
            <ul className="flex flex-col gap-2 text-footer">
              {FOOTER_CURRICULUM_LINKS.map((link) => (
                <li key={link.label} className="border-b border-primary-container/10 pb-1.5">
                  <Link
                    to={link.path}
                    className="text-on-primary-container/85 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary-fixed-dim" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institute Links */}
          <div className="lg:col-span-3">
            <h4 className="text-caption-caps font-bold text-primary-fixed mb-3">
              Institute & Access
            </h4>
            <ul className="flex flex-col gap-2 text-footer">
              {FOOTER_INSTITUTE_LINKS.map((link) => (
                <li key={link.label} className="border-b border-primary-container/10 pb-1.5">
                  <Link
                    to={link.path}
                    className="text-on-primary-container/85 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary-fixed-dim" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations Card */}
          <div className="lg:col-span-2">
            <h4 className="text-caption-caps font-bold text-primary-fixed mb-3">
              Target Framework
            </h4>
            <div className="p-3.5 rounded-xl bg-surface-container-lowest/5 border border-primary-container/20 space-y-2.5">
              <div>
                <p className="text-caption-caps font-bold text-primary-fixed-dim">
                  Target Cohort
                </p>
                <p className="text-caption text-white font-medium mt-0.5">
                  Grades 5 to 10
                </p>
              </div>
              <div>
                <p className="text-caption-caps font-bold text-primary-fixed-dim">
                  Boards
                </p>
                <p className="text-caption text-white font-medium mt-0.5">
                  CBSE & ICSE Syllabi
                </p>
              </div>
              <div className="pt-2 border-t border-primary-container/20 flex items-center gap-1.5 text-caption text-primary-fixed-dim font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-fixed" />
                <span>Institutional Turnkey</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: 3-column grid on desktop, centered copyright, social icons replacing tagline */}
        <div className="pt-6 border-t border-primary-container/20 grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-caption text-on-primary-container/70">
          {/* Left: Legal Links */}
          <div className="flex items-center justify-center md:justify-start gap-4 order-2 md:order-1">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-primary-container/40">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Request a Consultation
            </Link>
          </div>

          {/* Center: Copyright */}
          <div className="text-center order-1 md:order-2 font-medium">
            © {COMPANY_INFO.copyrightYear} {COMPANY_INFO.name}. All rights reserved.
          </div>

          {/* Right: Social Media Icons (replaces tagline) */}
          <div className="flex items-center justify-center md:justify-end gap-2.5 order-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg bg-white/5 border border-primary-container/20 flex items-center justify-center text-on-primary-container hover:text-white hover:bg-white/10 hover:border-primary-container/40 transition-all shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-8 h-8 rounded-lg bg-white/5 border border-primary-container/20 flex items-center justify-center text-on-primary-container hover:text-white hover:bg-white/10 hover:border-primary-container/40 transition-all shadow-sm"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-lg bg-white/5 border border-primary-container/20 flex items-center justify-center text-on-primary-container hover:text-white hover:bg-white/10 hover:border-primary-container/40 transition-all shadow-sm"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-lg bg-white/5 border border-primary-container/20 flex items-center justify-center text-on-primary-container hover:text-white hover:bg-white/10 hover:border-primary-container/40 transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-lg bg-white/5 border border-primary-container/20 flex items-center justify-center text-on-primary-container hover:text-white hover:bg-white/10 hover:border-primary-container/40 transition-all shadow-sm"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
