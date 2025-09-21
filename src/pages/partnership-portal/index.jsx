import React from 'react';
import Header from '../../components/ui/Header';
import PartnershipHero from './components/PartnershipHero';
import PartnershipTypes from './components/PartnershipTypes';
import SuccessStories from './components/SuccessStories';
import ApplicationPortal from './components/ApplicationPortal';
import ResourceLibrary from './components/ResourceLibrary';
import PartnerSpotlight from './components/PartnerSpotlight';
import ContactSection from './components/ContactSection';

const PartnershipPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <PartnershipHero />
        <PartnershipTypes />
        <SuccessStories />
        <PartnerSpotlight />
        <ApplicationPortal />
        <ResourceLibrary />
        <ContactSection />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-warning rounded-lg flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold">Valentine Uminuke Foundation</h3>
            </div>
            <p className="text-background/80 mb-6 max-w-2xl mx-auto">
              Empowering communities, transforming lives, and building a brighter future for Africa through strategic partnerships and collaborative action.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-background/60">
              <span>© {new Date()?.getFullYear()} Valentine Uminuke Foundation</span>
              <span>•</span>
              <span>All rights reserved</span>
              <span>•</span>
              <span>Partnership Portal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PartnershipPortal;