import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ImpactCalculator from './components/ImpactCalculator';
import DonationForm from './components/DonationForm';
import DonorTestimonials from './components/DonorTestimonials';
import RecognitionLevels from './components/RecognitionLevels';
import RecentImpactUpdates from './components/RecentImpactUpdates';
import DonorWall from './components/DonorWall';

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [donationType, setDonationType] = useState('monthly');

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
  };

  const handleDonationTypeChange = (type) => {
    setDonationType(type);
  };

  const securityFeatures = [
    {
      icon: 'Shield',
      title: 'Bank-Level Security',
      description: 'Your data is protected with 256-bit SSL encryption'
    },
    {
      icon: 'Lock',
      title: 'PCI Compliant',
      description: 'We meet the highest standards for payment processing'
    },
    {
      icon: 'CheckCircle',
      title: 'Verified Organization',
      description: 'Registered 501(c)(3) with full transparency reporting'
    },
    {
      icon: 'Eye',
      title: 'Privacy Protected',
      description: 'Your information is never shared with third parties'
    }
  ];

  const paymentMethods = [
    { name: 'Credit Cards', icons: ['CreditCard'], description: 'Visa, Mastercard, American Express' },
    { name: 'Digital Wallets', icons: ['Wallet'], description: 'PayPal, Apple Pay, Google Pay' },
    { name: 'Bank Transfer', icons: ['Building2'], description: 'Direct bank transfers and ACH' },
    { name: 'Mobile Money', icons: ['Smartphone'], description: 'M-Pesa, MTN Mobile Money, Airtel Money' }
  ];

  return (
    <div className="min-h-screen app-bg">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/10 via-accent/5 to-warning/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Icon name="Heart" size={16} className="mr-2" />
              Make a Difference Today
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Transform Lives Across
              <span className="text-gradient-primary block">Africa</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Your donation creates lasting change in African communities. From clean water and education 
              to healthcare and economic empowerment, every contribution builds a brighter future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-accent text-white hover-lift"
                iconName="Zap"
                iconPosition="left"
                onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Donate Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
                onClick={() => document.getElementById('impact-calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Your Impact
              </Button>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '2.4M+', label: 'Lives Impacted', icon: 'Users' },
              { number: '450+', label: 'Communities Served', icon: 'MapPin' },
              { number: '15K+', label: 'Active Donors', icon: 'Heart' },
              { number: '98%', label: 'Funds to Programs', icon: 'TrendingUp' }
            ]?.map((stat, index) => (
              <div key={index} className="text-center bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-warm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat?.icon} size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat?.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Impact Calculator Section */}
      <section id="impact-calculator" className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImpactCalculator onAmountSelect={handleAmountSelect} />
        </div>
      </section>
      {/* Donation Form Section */}
      <section id="donation-form" className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonationForm 
            selectedAmount={selectedAmount}
            donationType={donationType}
            onDonationTypeChange={handleDonationTypeChange}
          />
        </div>
      </section>
      {/* Security & Trust Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Your Security is Our Priority
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use industry-leading security measures to protect your personal and financial information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {securityFeatures?.map((feature, index) => (
              <div key={index} className="text-center bg-card rounded-xl p-6 shadow-warm border border-warm">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature?.icon} size={24} className="text-success" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature?.description}
                </p>
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="bg-card rounded-xl p-8 shadow-warm border border-warm">
            <h3 className="text-xl font-heading font-bold text-foreground text-center mb-8">
              Multiple Payment Options Available
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentMethods?.map((method, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center space-x-2 mb-3">
                    {method?.icons?.map((iconName, iconIndex) => (
                      <div key={iconIndex} className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <Icon name={iconName} size={20} className="text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                  <h4 className="font-medium text-foreground mb-1">
                    {method?.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {method?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Recognition Levels Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RecognitionLevels />
        </div>
      </section>
      {/* Donor Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonorTestimonials />
        </div>
      </section>
      {/* Recent Impact Updates Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RecentImpactUpdates />
        </div>
      </section>
      {/* Donor Wall Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonorWall />
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-accent/10 via-primary/5 to-warning/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-warm-lg border border-warm">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Create Lasting Change?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of supporters who are building stronger, more prosperous African communities. 
              Your contribution today becomes tomorrow's success story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-accent text-white hover-lift"
                iconName="Heart"
                iconPosition="left"
                onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Monthly Giving
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Gift"
                iconPosition="left"
                onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Make One-Time Gift
              </Button>
            </div>
            
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span>Tax Deductible</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-success" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bank Transfer Details */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-warm border border-warm p-6 md:p-8">
            <h3 className="text-2xl font-heading font-bold mb-4 text-gradient-gold">Donate via Bank Transfer</h3>
            <p className="text-muted-foreground mb-4">You can support our work directly through a secure bank transfer:</p>
            <div className="grid sm:grid-cols-2 gap-4 text-foreground/90">
              <div>
                <div className="font-semibold">Account Name</div>
                <div>Valentine Unimuke Foundation</div>
              </div>
              <div>
                <div className="font-semibold">Bank</div>
                <div>First Bank</div>
              </div>
              <div>
                <div className="font-semibold">Account Number</div>
                <div>2047168370</div>
              </div>
              <div>
                <div className="font-semibold">SWIFT Code</div>
                <div>FBNINGLAXXX</div>
              </div>
              <div className="sm:col-span-2">
                <div className="font-semibold">Account Type</div>
                <div>NGO Dollar Account</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Please email your transfer receipt to donate@africarising.org so we can confirm and send your acknowledgement letter.</p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-warning rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">Valu Africa</h3>
                  <p className="text-sm opacity-80">Empowering Communities</p>
                </div>
              </div>
              <p className="text-secondary-foreground/80 mb-4 max-w-md">
                Building stronger, more prosperous African communities through sustainable development, 
                education, healthcare, and economic empowerment initiatives.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'Linkedin']?.map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                  >
                    <Icon name={social} size={18} />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="/about-us" className="block hover:text-primary transition-colors">About Us</a>
                <a href="/get-involved" className="block hover:text-primary transition-colors">Get Involved</a>
                <a href="/blog" className="block hover:text-primary transition-colors">ValUAfrica Media</a>
                <a href="/partnership-portal" className="block hover:text-primary transition-colors">Partnerships</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm">
                <p>Email: donate@africarising.org</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Tax ID: 12-3456789</p>
                <div className="flex items-center space-x-2 mt-4">
                  <Icon name="Award" size={16} className="text-warning" />
                  <span className="text-xs">GuideStar Gold Seal</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; {new Date()?.getFullYear()} Valu Africa. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonatePage;