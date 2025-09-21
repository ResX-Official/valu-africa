import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import PersonalityQuiz from './components/PersonalityQuiz';
import DonationSection from './components/DonationSection';
import VolunteerPortal from './components/VolunteerPortal';
import AdvocacyCenter from './components/AdvocacyCenter';
import CorporatePartnership from './components/CorporatePartnership';
import CommunityShowcase from './components/CommunityShowcase';

const GetInvolved = () => {
  const [activeSection, setActiveSection] = useState('quiz');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [personalizedPath, setPersonalizedPath] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuizComplete = (result) => {
    setPersonalizedPath(result);
    setQuizCompleted(true);
    
    // Auto-navigate to recommended section after quiz
    setTimeout(() => {
      const sectionMap = {
        advocate: 'advocacy',
        donor: 'donate',
        volunteer: 'volunteer'
      };
      setActiveSection(sectionMap?.[result] || 'donate');
    }, 1000);
  };

  const navigationItems = [
    { 
      id: 'quiz', 
      label: 'Find Your Path', 
      icon: 'HelpCircle',
      description: 'Discover your ideal way to help'
    },
    { 
      id: 'donate', 
      label: 'Donate', 
      icon: 'Heart',
      description: 'Make a financial contribution'
    },
    { 
      id: 'volunteer', 
      label: 'Volunteer', 
      icon: 'Users',
      description: 'Contribute your time and skills'
    },
    { 
      id: 'advocacy', 
      label: 'Advocate', 
      icon: 'Megaphone',
      description: 'Spread awareness and drive change'
    },
    { 
      id: 'corporate', 
      label: 'Partner', 
      icon: 'Handshake',
      description: 'Corporate partnership opportunities'
    },
    { 
      id: 'community', 
      label: 'Community', 
      icon: 'Globe',
      description: 'Connect with fellow supporters'
    }
  ];

  const impactStats = [
    {
      number: "1.3M",
      label: "Lives Impacted",
      icon: "Users",
      description: "Across 15 African countries"
    },
    {
      number: "8",
      label: "Active Projects",
      icon: "Target",
      description: "Education, health, and infrastructure"
    },
    {
      number: "100",
      label: "Global Supporters",
      icon: "Heart",
      description: "From 7 countries worldwide"
    },
    {
      number: "95%",
      label: "Direct Impact",
      icon: "TrendingUp",
      description: "Of donations reach communities"
    }
  ];

  const urgentNeeds = [
    {
      title: "Emergency Education Fund",
      description: "Support displaced children\'s education in conflict-affected regions",
      target: "$1,800",
      raised: "$1,100",
      percentage: 15,
      urgency: "high",
      timeLeft: "12 days",
      icon: "BookOpen"
    },
    {
      title: "Clean Water Crisis Response",
      description: "Provide clean water access to drought-affected communities",
      target: "$1,500",
      raised: "$900",
      percentage: 12,
      urgency: "critical",
      timeLeft: "5 days",
      icon: "Droplets"
    },
    {
      title: "Healthcare Worker Training",
      description: "Train community health workers in rural areas",
      target: "$1,200",
      raised: "$400",
      percentage: 8,
      urgency: "medium",
      timeLeft: "28 days",
      icon: "Stethoscope"
    }
  ];

  const getPersonalizedRecommendation = () => {
    if (!personalizedPath) return null;

    const recommendations = {
      advocate: {
        title: "Perfect for Digital Advocacy!",
        description: "Your communication skills can amplify African voices globally. Start with our social media campaigns and petition drives.",
        nextSteps: ["Join #AfricaRisingEducation campaign", "Sign urgent petitions", "Share impact stories"],
        primaryAction: { text: "Start Advocating", section: 'advocacy' },
        secondaryAction: { text: "View Campaigns", section: 'advocacy' }
      },
      donor: {
        title: "Your Support Creates Lasting Change!",
        description: "Financial contributions directly transform communities. See exactly how your donation makes a difference.",
        nextSteps: ["Choose your impact area", "Set up monthly giving", "Track your impact"],
        primaryAction: { text: "Make a Donation", section: 'donate' },
        secondaryAction: { text: "View Impact Calculator", section: 'donate' }
      },
      volunteer: {
        title: "Ready for Hands-On Impact!",
        description: "Your skills and time can directly benefit African communities. Explore opportunities that match your expertise.",
        nextSteps: ["Browse volunteer opportunities", "Apply for programs", "Connect with our team"],
        primaryAction: { text: "Find Opportunities", section: 'volunteer' },
        secondaryAction: { text: "View Requirements", section: 'volunteer' }
      }
    };

    return recommendations?.[personalizedPath];
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'quiz':
        return (
          <div className="max-w-4xl mx-auto">
            <PersonalityQuiz onComplete={handleQuizComplete} />
          </div>
        );
      case 'donate':
        return <DonationSection />;
      case 'volunteer':
        return <VolunteerPortal />;
      case 'advocacy':
        return <AdvocacyCenter />;
      case 'corporate':
        return <CorporatePartnership />;
      case 'community':
        return <CommunityShowcase />;
      default:
        return <DonationSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-warning/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">Get Involved</span>
              <br />
              <span className="text-foreground">Transform Lives Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our global community of changemakers. Whether through donations, volunteering, advocacy, or partnerships, 
              your involvement creates lasting impact across Africa.
            </p>
            
            {!quizCompleted && (
              <Button
                variant="default"
                onClick={() => setActiveSection('quiz')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 hover-lift animate-pulse-gentle"
                iconName="Compass"
                iconPosition="left"
                iconSize={20}
              >
                Find Your Perfect Way to Help
              </Button>
            )}
          </div>
        </div>
      </section>
      {/* Personalized Recommendation */}
      {quizCompleted && personalizedPath && (
        <section className="py-12 bg-gradient-to-br from-primary/5 to-warning/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-xl shadow-warm-lg p-8 text-center">
              {(() => {
                const rec = getPersonalizedRecommendation();
                return (
                  <>
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-warning rounded-full flex items-center justify-center">
                      <Icon name="Star" size={24} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-gradient-gold">
                      {rec?.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      {rec?.description}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      {rec?.nextSteps?.map((step, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        variant="default"
                        onClick={() => setActiveSection(rec?.primaryAction?.section)}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift"
                        iconName="ArrowRight"
                        iconPosition="right"
                      >
                        {rec?.primaryAction?.text}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setActiveSection(rec?.secondaryAction?.section)}
                      >
                        {rec?.secondaryAction?.text}
                      </Button>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </section>
      )}
      {/* Impact Stats */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient-gold">
              Your Impact in Numbers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the incredible difference our community has made together across Africa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-warning rounded-full flex items-center justify-center">
                  <Icon name={stat?.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat?.number}</div>
                <div className="font-semibold mb-1">{stat?.label}</div>
                <div className="text-sm text-muted-foreground">{stat?.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Urgent Needs */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient-green">
              Urgent Needs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Critical campaigns that need immediate support to reach their goals
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {urgentNeeds?.map((need, index) => (
              <div key={index} className="bg-card rounded-xl shadow-warm p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-warning rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={need?.icon} size={20} className="text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      need?.urgency === 'critical' ?'bg-error text-error-foreground'
                        : need?.urgency === 'high' ?'bg-warning text-warning-foreground' :'bg-muted text-muted-foreground'
                    }`}>
                      {need?.urgency === 'critical' ? 'Critical' : need?.urgency === 'high' ? 'Urgent' : 'Active'}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Icon name="Clock" size={12} />
                      <span>{need?.timeLeft}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2">{need?.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{need?.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{need?.raised} raised</span>
                    <span className="text-muted-foreground">Goal: {need?.target}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        need?.urgency === 'critical' ?'bg-gradient-to-r from-error to-warning' :'bg-gradient-to-r from-primary to-success'
                      }`}
                      style={{ width: `${need?.percentage}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    variant="default"
                    fullWidth
                    className="hover-lift"
                    iconName="Heart"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Donate Now
                  </Button>
                  
                  <Button
                    variant="outline"
                    iconName="Share2"
                    iconSize={16}
                  >
                    Share
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="py-8 bg-card border-t border-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-300 ${isScrolled ? 'sticky top-20 z-40 bg-card/95 backdrop-blur-md rounded-xl shadow-warm p-4' : ''}`}>
            <div className="flex flex-wrap justify-center gap-2">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => setActiveSection(item?.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item?.id
                      ? 'bg-primary text-primary-foreground shadow-warm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={16} />
                  <div className="text-left">
                    <div>{item?.label}</div>
                    <div className="text-xs opacity-75 hidden sm:block">{item?.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-warning/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gradient-gold">
            Ready to Make a Difference?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every action, no matter how small, contributes to transforming lives across Africa. 
            Join thousands of supporters who are already making an impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button
                variant="default"
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 border-2 border-red-400/20"
                iconName="Heart"
                iconPosition="left"
                iconSize={20}
              >
                💝 Start with a Donation
              </Button>
            </Link>
            <Link to="/blog">
              <Button
                variant="outline"
                iconName="BookOpen"
                iconPosition="left"
                iconSize={16}
              >
                ValUAfrica Media
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-card border-t border-warm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date()?.getFullYear()} Valu Africa. Empowering communities across Africa.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/about-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/partnership-portal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Partnerships
              </Link>
              <div className="flex items-center space-x-3">
                <Icon name="Facebook" size={16} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Twitter" size={16} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Instagram" size={16} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Linkedin" size={16} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GetInvolved;