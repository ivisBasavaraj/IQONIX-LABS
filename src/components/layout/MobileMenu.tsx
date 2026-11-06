import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronRight, Phone, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigation';
import { COMPANY_INFO } from '../../utils/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  if (!isOpen) return null;

  const isItemActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-surface-container-lowest shadow-2xl flex flex-col z-10 border-l border-primary-container/15">
        {/* Header */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-primary-container/15">
          <Link to="/" onClick={onClose} className="flex items-center gap-3">
            <img
              src="/logo/iqonix-logo.jpg"
              alt="IQONIX LABS Logo"
              className="w-10 h-10 object-contain rounded-md"
            />
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-lg text-on-surface tracking-tight">IQONIX</span>
              <span className="font-bold text-lg text-primary-container tracking-tight">LABS</span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="mb-3">
            <span className="text-caption-caps font-bold text-primary px-3 py-1 rounded-full bg-on-tertiary-container">
              Navigation
            </span>
          </div>
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-nav-link font-medium transition-all ${
                    active
                      ? 'bg-on-tertiary-container text-primary-container font-semibold border-l-4 border-primary-container'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      active ? 'text-primary-container translate-x-0.5' : 'opacity-40'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-primary-container/10">
            <Link
              to="/contact"
              onClick={onClose}
              className="w-full h-11 flex items-center justify-center rounded-lg bg-primary-container text-white text-btn font-medium shadow-md hover:bg-secondary-container transition-all"
            >
              Request a Demo
            </Link>
          </div>

          {/* Quick contact summary */}
          <div className="mt-6 p-4 rounded-xl bg-surface-container-low border border-primary-container/10">
            <p className="text-caption-caps font-bold text-primary mb-1.5">
              For Schools & Institutions
            </p>
            <p className="text-caption text-on-surface-variant mb-3 leading-normal">
              Serving CBSE & ICSE schools for Grades 5–10 robotics & lab setups.
            </p>
            <div className="space-y-1.5 text-caption text-on-surface font-medium">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-primary-container/10 text-center text-footer text-on-surface-variant">
          © {COMPANY_INFO.copyrightYear} IQONIX LABS. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
