import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PartnershipTypes = () => {
  const [activeTab, setActiveTab] = useState('corporate');

  const partnershipTypes = {
    corporate: {
      title: 'Corporate Partnerships',
      description: 'Strategic alliances that align your business goals with social impact',
      icon: 'Building2',
      color: 'primary',
      tiers: [
        {
          name: 'Community Sponsor',
          investment: '$5,000 - $25,000',
          benefits: [
            'Logo placement on website and materials',
            'Quarterly impact reports',
            'Employee volunteer opportunities',
            'Social media recognition'
          ],
          features: [
            'Basic CSR integration',
            'Community project sponsorship',
            'Brand visibility in local communities'
          ]
        },
        {
          name: 'Program Partner',
          investment: '$25,000 - $100,000',
          benefits: [
            'Co-branded program materials',
            'Executive advisory board seat',
            'Employee engagement programs',
            'Media partnership opportunities'
          ],
          features: [
            'Dedicated program sponsorship',
            'Employee skill-based volunteering',
            'Leadership development initiatives'
          ],
          popular: true
        },
        {
          name: 'Strategic Alliance',
          investment: '$100,000+',
          benefits: [
            'Joint program development',
            'Executive speaking opportunities',
            'Exclusive partnership rights',
            'Custom impact measurement'
          ],
          features: [
            'Multi-year partnership agreements',
            'Innovation lab collaboration',
            'Thought leadership platform'
          ]
        }
      ]
    },
    government: {
      title: 'Government Relations',
      description: 'Official partnerships with governmental and diplomatic entities',
      icon: 'Landmark',
      color: 'secondary',
      tiers: [
        {
          name: 'Diplomatic Engagement',
          investment: 'Policy Alignment',
          benefits: [
            'High-level diplomatic meetings',
            'Policy brief collaboration',
            'Cultural exchange programs',
            'Official visit coordination'
          ],
          features: [
            'Embassy partnership programs',
            'Trade mission integration',
            'Cultural diplomacy initiatives'
          ]
        },
        {
          name: 'Development Assistance',
          investment: 'ODA Integration',
          benefits: [
            'Joint program implementation',
            'Capacity building initiatives',
            'Technical assistance programs',
            'Monitoring & evaluation frameworks'
          ],
          features: [
            'Multi-lateral coordination',
            'Sustainable development goals alignment',
            'Cross-border program management'
          ],
          popular: true
        },
        {
          name: 'Policy Partnership',
          investment: 'Strategic Cooperation',
          benefits: [
            'Policy research collaboration',
            'Legislative advocacy support',
            'Regulatory framework development',
            'International forum participation'
          ],
          features: [
            'Think tank collaboration',
            'Academic research partnerships',
            'International conference participation'
          ]
        }
      ]
    },
    ngo: {
      title: 'NGO Collaboration',
      description: 'Strategic alliances with like-minded organizations for maximum impact',
      icon: 'Users',
      color: 'accent',
      tiers: [
        {
          name: 'Resource Sharing',
          investment: 'Mutual Exchange',
          benefits: [
            'Shared training resources',
            'Joint fundraising campaigns',
            'Cross-referral programs',
            'Best practice sharing'
          ],
          features: [
            'Capacity building exchange',
            'Volunteer program coordination',
            'Knowledge management systems'
          ]
        },
        {
          name: 'Program Integration',
          investment: 'Coordinated Implementation',
          benefits: [
            'Joint program delivery',
            'Shared monitoring systems',
            'Coordinated advocacy campaigns',
            'Unified impact measurement'
          ],
          features: [
            'Multi-organization programs',
            'Shared service delivery',
            'Coordinated community outreach'
          ],
          popular: true
        },
        {
          name: 'Strategic Alliance',
          investment: 'Long-term Commitment',
          benefits: [
            'Joint strategic planning',
            'Shared governance structures',
            'Coordinated policy advocacy',
            'Unified brand messaging'
          ],
          features: [
            'Consortium leadership',
            'Joint research initiatives',
            'Coordinated international presence'
          ]
        }
      ]
    }
  };

  const currentPartnership = partnershipTypes?.[activeTab];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Partnership Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the partnership model that aligns with your organization's goals and capacity for creating meaningful impact.
          </p>
        </div>

        {/* Partnership Type Tabs */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="inline-flex bg-muted rounded-lg p-1 space-x-1">
            {Object.entries(partnershipTypes)?.map(([key, type]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === key
                    ? `bg-${type?.color} text-${type?.color}-foreground shadow-warm`
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                }`}
              >
                <Icon name={type?.icon} size={16} />
                <span className="hidden sm:inline">{type?.title}</span>
                <span className="sm:hidden">{type?.title?.split(' ')?.[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Partnership Content */}
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center space-x-3 bg-${currentPartnership?.color}/10 text-${currentPartnership?.color} px-6 py-3 rounded-full mb-4`}>
              <Icon name={currentPartnership?.icon} size={20} />
              <span className="font-medium">{currentPartnership?.title}</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {currentPartnership?.description}
            </p>
          </div>

          {/* Partnership Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentPartnership?.tiers?.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-xl border-2 p-8 transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-1 ${
                  tier?.popular 
                    ? `border-${currentPartnership?.color} shadow-warm` 
                    : 'border-border hover:border-primary/20'
                }`}
              >
                {/* Popular Badge */}
                {tier?.popular && (
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 bg-${currentPartnership?.color} text-${currentPartnership?.color}-foreground px-4 py-1 rounded-full text-sm font-medium`}>
                    Most Popular
                  </div>
                )}

                {/* Tier Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {tier?.name}
                  </h3>
                  <div className={`text-2xl font-bold text-${currentPartnership?.color} mb-4`}>
                    {tier?.investment}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {tier?.benefits?.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className={`text-${currentPartnership?.color} mt-0.5 flex-shrink-0`} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-medium text-foreground mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {tier?.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <Icon name="Star" size={16} className={`text-${currentPartnership?.color} mt-0.5 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  variant={tier?.popular ? "default" : "outline"}
                  fullWidth
                  className={tier?.popular 
                    ? `bg-${currentPartnership?.color} hover:bg-${currentPartnership?.color}/90 text-${currentPartnership?.color}-foreground`
                    : `border-${currentPartnership?.color} text-${currentPartnership?.color} hover:bg-${currentPartnership?.color}/10`
                  }
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipTypes;