import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PartnershipHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-secondary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Handshake" size={16} />
            <span>Partnership Portal</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Partner with{' '}
            <span className="text-gradient-blue">Valentine Unimuke Foundation.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Join a movement that transforms communities, empowers individuals, and creates lasting change across Africa through strategic partnerships.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Active Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">$2000</div>
              <div className="text-muted-foreground">Funds Mobilized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">5+</div>
              <div className="text-muted-foreground">Countries Reached</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift px-8 py-3"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Explore Partnerships
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipHero;