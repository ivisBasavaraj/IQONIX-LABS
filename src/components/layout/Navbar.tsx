import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { NAV_ITEMS, NavItem } from '../../data/navigation';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // Section order on the Home page
  const sectionIds = ['home', 'about-us', 'programs', 'stem-lab-setup', 'gallery', 'blog', 'contact'];

  // Scrollspy logic: dynamically determine the active section based on scroll position
  const updateActiveSectionOnScroll = useCallback(() => {
    if (!isHomePage) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // 1. If user is at or near the bottom of the page, activate the last section ('contact')
    if (scrollY + windowHeight >= docHeight - 80) {
      setActiveSection('contact');
      return;
    }

    // 2. If user is near the top of the page, activate 'home'
    if (scrollY < 120) {
      setActiveSection('home');
      return;
    }

    // 3. Trigger line: 160px from top of viewport (80px navbar height + 80px buffer)
    const triggerPoint = 160;
    let current = 'home';

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerPoint) {
          current = id;
        }
      }
    }

    setActiveSection(current);
  }, [isHomePage]);

  // Sync active section on route changes and attach scroll listener
  useEffect(() => {
    if (!isHomePage) {
      // If on a dedicated route (e.g. /about, /programs, /privacy-policy), match by pathname
      const matched = NAV_ITEMS.find((item) =>
        item.path === '/'
          ? location.pathname === '/'
          : location.pathname.startsWith(item.path)
      );
      if (matched && matched.sectionId) {
        setActiveSection(matched.sectionId);
      }
      return;
    }

    // Initial check on mount/refresh
    updateActiveSectionOnScroll();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSectionOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, location.pathname, updateActiveSectionOnScroll]);

  // Smooth scroll handler to a given section
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const navHeight = 80;
        const targetPosition = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
        setActiveSection(sectionId);
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (isHomePage) {
      e.preventDefault();
      const targetId = item.sectionId || 'home';
      scrollToSection(targetId);
    } else {
      if (item.path === '/') {
        e.preventDefault();
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary-container/15 shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
        <div className="h-20 max-w-[1360px] mx-auto px-5 md:px-10 lg:px-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              if (isHomePage) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('home');
              }
            }}
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

          {/* Desktop Navigation Links with Dynamic Scroll Indicator */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <Link
                  key={item.path}
                  to={isHomePage ? `#${item.sectionId}` : item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-nav-link transition-colors py-1 relative block ${
                    isActive
                      ? 'text-primary-container font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface font-medium'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
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
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  scrollToSection('contact');
                }
              }}
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
        activeSection={activeSection}
        onNavigateSection={scrollToSection}
      />
    </>
  );
};
