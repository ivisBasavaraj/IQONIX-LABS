import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../../data/navigation';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Helper to determine if a nav item is active based on current URL path
  const isItemActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary-container/15 shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
        <div className="h-20 max-w-[1360px] mx-auto px-5 md:px-10 lg:px-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary-container rounded-lg p-1"
          >
            <img
              src="/logo/iqonix-logo.jpg"
              alt="IQONIX LABS Logo"
              className="w-10 h-10 object-contain rounded-md shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex items-center">
              <span className="text-lg font-bold tracking-tight text-on-surface">IQONIX</span>
              <span className="text-lg font-bold tracking-tight text-primary-container ml-1">LABS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container mb-1.5 ml-1 animate-pulse" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-nav-link transition-colors py-1 relative block ${
                    active
                      ? 'text-primary-container font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface font-medium'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-container rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-lg bg-primary-container text-white text-btn font-medium hover:bg-secondary-container transition-all shadow-[0_4px_16px_rgba(23,105,224,0.28)] hover:shadow-lg active:scale-[0.99] gap-1.5"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slideout Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
