import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-primary/10 via-background to-secondary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        {/* African pattern SVG */}
        <svg width="100%" height="100%" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="african-pattern" patternUnits="userSpaceOnUse" width="60" height="60">
              <circle cx="30" cy="30" r="28" stroke="#B8860B" strokeWidth="2" fill="none" />
              <rect x="10" y="10" width="40" height="40" stroke="#FF6B35" strokeWidth="2" fill="none" rx="8" />
            </pattern>
          </defs>
          <rect width="600" height="400" fill="url(#african-pattern)" />
        </svg>
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-warning rotate-45"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                About{' '}
                <span className="text-gradient-gold font-accent">
                  Valu Africa
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering communities across Africa through sustainable development, 
                cultural preservation, and innovative solutions that honor our heritage while building a brighter future.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs">🌍 Pan-African Unity</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-xs">🎶 African Music</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-warning/10 text-warning font-semibold text-xs">🖼️ Art & Heritage</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 text-success font-semibold text-xs">🌱 Sustainability</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-primary hover:bg-primary/90 hover-lift"
                iconName="Users"
                iconPosition="left"
              >
                Meet Our Team
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
                iconName="Download"
                iconPosition="left"
              >
                Annual Report
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-warm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">2.5M+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">54</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg transform perspective-1000 hover:rotate-1 hover:scale-[1.01] transition-transform duration-500">
              <Image
                src="/assets/images/WhatsApp Image 2025-08-17 at 08.56.58.jpeg"
                alt="Valentine Unimuke Foundation activity"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-warm-lg border border-warm backdrop-blur-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-warning rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">VA</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Valentine Unimuke Foundation</div>
                  <div className="text-sm text-muted-foreground">Pan-African Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;