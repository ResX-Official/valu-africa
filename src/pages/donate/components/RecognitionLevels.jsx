import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const RecognitionLevels = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const recognitionLevels = [
    {
      id: 'supporter',
      name: 'Community Supporter',
      minAmount: 25,
      maxAmount: 99,
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20',
      icon: 'Users',
      benefits: [
        'Quarterly impact newsletter',
        'Digital thank you certificate',
        'Access to donor-only content',
        'Tax-deductible receipt'
      ],
      description: 'Join our community of changemakers making a difference across Africa'
    },
    {
      id: 'champion',
      name: 'Africa Champion',
      minAmount: 100,
      maxAmount: 499,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      icon: 'Award',
      benefits: [
        'All Community Supporter benefits',
        'Bi-annual impact webinars',
        'Personalized impact stories',
        'Priority customer support',
        'Exclusive event invitations'
      ],
      description: 'Champion sustainable development and community empowerment initiatives'
    },
    {
      id: 'guardian',
      name: 'Heritage Guardian',
      minAmount: 500,
      maxAmount: 1499,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/20',
      icon: 'Shield',
      benefits: [
        'All Africa Champion benefits',
        'Quarterly video calls with field teams',
        'Annual printed impact report',
        'Recognition on donor wall',
        'VIP event access',
        'Direct communication with beneficiaries'
      ],
      description: 'Protect and preserve African heritage while building sustainable futures'
    },
    {
      id: 'visionary',
      name: 'Visionary Partner',
      minAmount: 1500,
      maxAmount: 4999,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      icon: 'Eye',
      benefits: [
        'All Heritage Guardian benefits',
        'Monthly leadership briefings',
        'Site visit opportunities',
        'Advisory board consideration',
        'Custom impact reporting',
        'Media recognition opportunities'
      ],
      description: 'Partner with us to envision and create transformative change across the continent'
    },
    {
      id: 'legacy',
      name: 'Legacy Circle',
      minAmount: 5000,
      maxAmount: null,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/20',
      icon: 'Crown',
      benefits: [
        'All Visionary Partner benefits',
        'Dedicated relationship manager',
        'Annual appreciation dinner',
        'Program naming opportunities',
        'Strategic planning input',
        'Legacy recognition programs',
        'Exclusive cultural experiences'
      ],
      description: 'Create a lasting legacy that will impact generations of African communities'
    }
  ];

  const formatAmount = (amount) => {
    if (amount >= 1000) {
      return `$${(amount / 1000)?.toFixed(0)}K`;
    }
    return `$${amount}`;
  };

  const toggleLevel = (levelId) => {
    setSelectedLevel(selectedLevel === levelId ? null : levelId);
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-warm border border-warm">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          Donor Recognition Levels
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every contribution matters. Join thousands of supporters at the level that's right for you and receive meaningful recognition for your generosity.
        </p>
      </div>
      <div className="space-y-4">
        {recognitionLevels?.map((level) => (
          <div
            key={level?.id}
            className={`border-2 rounded-xl transition-all duration-300 ${
              selectedLevel === level?.id
                ? `${level?.borderColor} ${level?.bgColor}`
                : 'border-border hover:border-primary/30 bg-background'
            }`}
          >
            <button
              onClick={() => toggleLevel(level?.id)}
              className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`${level?.color} ${level?.bgColor} p-3 rounded-lg`}>
                    <Icon name={level?.icon} size={24} />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {level?.name}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>
                        {formatAmount(level?.minAmount)}
                        {level?.maxAmount ? ` - ${formatAmount(level?.maxAmount)}` : '+'}
                      </span>
                      {level?.id === 'champion' && (
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          Most Popular
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className={`text-sm font-medium ${level?.color}`}>
                    Learn More
                  </div>
                  <Icon
                    name={selectedLevel === level?.id ? 'ChevronUp' : 'ChevronDown'}
                    size={20}
                    className="text-muted-foreground"
                  />
                </div>
              </div>
            </button>

            {selectedLevel === level?.id && (
              <div className="px-6 pb-6">
                <div className="border-t border-border pt-4">
                  <p className="text-muted-foreground mb-4">
                    {level?.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="font-medium text-foreground mb-3">
                      Your Benefits Include:
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {level?.benefits?.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Icon
                            name="Check"
                            size={16}
                            className="text-success mt-0.5 flex-shrink-0"
                          />
                          <span className="text-sm text-muted-foreground">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sample Impact */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h6 className="font-medium text-foreground mb-2">
                      Sample Impact at This Level:
                    </h6>
                    <div className="text-sm text-muted-foreground">
                      {level?.id === 'supporter' && (
                        <p>Your monthly $50 donation provides school supplies for 2 children and supports clean water access for 1 family.</p>
                      )}
                      {level?.id === 'champion' && (
                        <p>Your $250 contribution funds vocational training for 1 adult and provides healthcare access for 5 families.</p>
                      )}
                      {level?.id === 'guardian' && (
                        <p>Your $1,000 donation supports a complete micro-loan program for 2 women's cooperatives, impacting 20+ families.</p>
                      )}
                      {level?.id === 'visionary' && (
                        <p>Your $3,000 contribution funds infrastructure development projects that benefit entire rural communities.</p>
                      )}
                      {level?.id === 'legacy' && (
                        <p>Your $10,000+ donation creates lasting change through comprehensive community development programs affecting hundreds of families.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Ready to Make Your Impact?
          </h4>
          <p className="text-muted-foreground mb-4">
            Choose your recognition level and join our community of changemakers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Start Monthly Giving
            </button>
            <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium">
              Make One-Time Gift
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecognitionLevels;