import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, ArrowLeft } from 'lucide-react';
import { Container } from '../components/common/Container';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = '404 Page Not Found — IQONIX LABS';
  }, []);

  return (
    <div className="py-24 md:py-32 bg-surface text-center">
      <Container>
        <div className="max-w-lg mx-auto p-8 md:p-12 rounded-3xl bg-surface-container-lowest border border-primary-container/20 shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-on-tertiary-container text-primary-container flex items-center justify-center mx-auto mb-6">
            <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
          </div>

          <span className="text-caption-caps font-bold text-primary mb-1.5 block">
            Error 404 • Navigation Telemetry Loss
          </span>

          <h1 className="text-page-title font-bold text-on-surface mb-2 tracking-tight">
            Page Not Found
          </h1>

          <p className="text-body-sm text-on-surface-variant leading-relaxed mb-6">
            The requested coordinate or URL path does not exist in the IQONIX LABS portal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 h-11 rounded-lg bg-primary-container text-white text-btn font-semibold hover:bg-secondary-container transition-all shadow-md"
            >
              <Home className="w-4 h-4" />
              <span>Return to Home</span>
            </Link>

            <Link
              to="/programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 h-11 rounded-lg bg-surface-container-lowest border border-primary-container/20 text-on-surface text-btn font-semibold hover:bg-on-tertiary-container hover:text-primary-container transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Explore Programs</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
