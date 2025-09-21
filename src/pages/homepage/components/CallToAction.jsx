import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const actionCards = [
    {
      id: 1,
      icon: 'Heart',
      title: 'Make a Donation',
      description: 'Your contribution directly funds life-changing programs across Africa',
      amount: 'From $10/month',
      impact: 'Feeds 5 children for a week',
      color: 'accent',
      link: '/donate',
      primary: true
    },
    {
      id: 2,
      icon: 'Users',
      title: 'Volunteer Your Skills',
      description: 'Join our global network of volunteers making a difference',
      amount: '2-5 hours/week',
      impact: 'Mentor 3 entrepreneurs',
      color: 'primary',
      link: '/get-involved',
      primary: false
    },
    {
      id: 3,
      icon: 'Share2',
      title: 'Spread Awareness',
      description: 'Share our mission and stories with your network',
      amount: 'Social sharing',
      impact: 'Reach 100+ people',
      color: 'success',
      link: '/blog',
      primary: false
    }
  ];

  const urgentNeeds = [
    {
      title: 'Emergency Water Wells',
      location: 'Sudan',
      needed: '$1,800',
      raised: '$1,200',
      percentage: 12,
      urgent: true
    },
    {
      title: 'School Reconstruction',
      location: 'Ghana',
      needed: '$1,500',
      raised: '$800',
      percentage: 8,
      urgent: false
    },
    {
      title: 'Medical Equipment',
      location: 'Kenya',
      needed: '$1,200',
      raised: '$650',
      percentage: 6,
      urgent: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Zap" size={16} className="text-accent" />
            <span className="text-accent font-medium text-sm uppercase tracking-wide">
              Take Action Today
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Be Part of Africa's
            <span className="text-gradient-gold block">Rising Story</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every action creates ripples of change. Choose how you want to contribute to Africa's transformation and join thousands making a difference.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {actionCards?.map((card) => (
            <div
              key={card?.id}
              className={`relative bg-card rounded-2xl p-8 shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-2 border border-warm group ${
                card?.primary ? 'ring-2 ring-accent/20' : ''
              }`}
            >
              {card?.primary && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`w-16 h-16 bg-${card?.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={card?.icon} size={32} className={`text-${card?.color}`} />
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {card?.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {card?.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Commitment:</span>
                  <span className={`text-sm font-semibold text-${card?.color}`}>
                    {card?.amount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Impact:</span>
                  <span className="text-sm font-semibold text-foreground">
                    {card?.impact}
                  </span>
                </div>
              </div>

              <Link to={card?.link}>
                <Button
                  variant={card?.primary ? 'default' : 'outline'}
                  fullWidth
                  className={card?.primary ? 'bg-gradient-primary hover:bg-gradient-accent text-white animate-pulse-gentle' : ''}
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={16}
                >
                  {card?.primary ? 'Start Donating' : 'Learn More'}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Urgent Needs Section */}
        <div className="bg-card rounded-2xl p-8 shadow-warm border border-warm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                Urgent Needs
              </h3>
              <p className="text-muted-foreground">
                Critical projects requiring immediate support
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-error rounded-full animate-pulse" />
              <span>Live updates</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {urgentNeeds?.map((need, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                  need?.urgent
                    ? 'border-error/20 bg-error/5' :'border-warning/20 bg-warning/5'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-foreground">
                    {need?.title}
                  </h4>
                  {need?.urgent && (
                    <span className="bg-error text-error-foreground px-2 py-1 rounded-full text-xs font-medium">
                      Urgent
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="MapPin" size={14} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {need?.location}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Raised:</span>
                    <span className="font-semibold text-foreground">
                      {need?.raised}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Goal:</span>
                    <span className="font-semibold text-foreground">
                      {need?.needed}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold text-foreground">
                      {need?.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        need?.urgent ? 'bg-error' : 'bg-warning'
                      }`}
                      style={{ width: `${need?.percentage}%` }}
                    />
                  </div>
                </div>

                <Link to="/donate">
                  <Button
                    variant="outline"
                    fullWidth
                    className="text-sm"
                    iconName="Heart"
                    iconPosition="left"
                    iconSize={14}
                  >
                    Contribute Now
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white">
          <Icon name="Mail" size={48} className="mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-heading font-bold mb-4">
            Stay Connected with Our Mission
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get monthly updates on our impact, inspiring stories from the field, and exclusive opportunities to make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white border-0 focus:ring-2 focus:ring-white/50 outline-none"
            />
            <Button
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 px-6"
              iconName="Send"
              iconPosition="right"
              iconSize={16}
            >
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-white/70 mt-3">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;