import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const CorporatePartnership = () => {
  const [selectedTier, setSelectedTier] = useState('bronze');
  const [contactForm, setContactForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    employeeCount: '',
    interests: '',
    message: ''
  });

  const industryOptions = [
    { value: '', label: 'Select Industry' },
    { value: 'technology', label: 'Technology' },
    { value: 'finance', label: 'Financial Services' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail & Consumer Goods' },
    { value: 'energy', label: 'Energy & Utilities' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const employeeOptions = [
    { value: '', label: 'Company Size' },
    { value: '1-50', label: '1-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-1000', label: '201-1,000 employees' },
    { value: '1001-5000', label: '1,001-5,000 employees' },
    { value: '5000+', label: '5,000+ employees' }
  ];

  const partnershipTiers = [
    {
      id: 'bronze',
      name: 'Community Partner',
      price: '$5,000 - $15,000',
      color: 'from-amber-600 to-amber-800',
      benefits: [
        'Logo on website partner page',
        'Quarterly impact reports',
        'Social media recognition',
        'Employee volunteer opportunities',
        'CSR consultation sessions'
      ],
      programs: [
        'Local community projects',
        'Employee engagement activities',
        'Skills-based volunteering'
      ],
      recognition: 'Bronze',
      employees: 'Up to 500 employees'
    },
    {
      id: 'silver',
      name: 'Impact Partner',
      price: '$15,000 - $50,000',
      color: 'from-slate-400 to-slate-600',
      benefits: [
        'All Community Partner benefits',
        'Logo on marketing materials',
        'Dedicated partnership manager',
        'Custom employee programs',
        'Executive briefings',
        'Media co-opportunities'
      ],
      programs: [
        'Regional development projects',
        'Leadership development programs',
        'Innovation challenges'
      ],
      recognition: 'Silver',
      employees: 'Up to 2,000 employees'
    },
    {
      id: 'gold',
      name: 'Strategic Partner',
      price: '$50,000 - $150,000',
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        'All Impact Partner benefits',
        'Co-branded initiatives',
        'Board meeting presentations',
        'Custom impact measurement',
        'Executive advisory role',
        'Global recognition campaigns'
      ],
      programs: [
        'Multi-country initiatives',
        'Technology innovation labs',
        'Capacity building programs'
      ],
      recognition: 'Gold',
      employees: 'Up to 10,000 employees'
    },
    {
      id: 'platinum',
      name: 'Transformational Partner',
      price: '$150,000+',
      color: 'from-purple-400 to-purple-600',
      benefits: [
        'All Strategic Partner benefits',
        'Joint program development',
        'Thought leadership platform',
        'Global summit speaking',
        'Policy advocacy partnership',
        'Legacy naming opportunities'
      ],
      programs: [
        'Continental transformation projects',
        'Policy and advocacy initiatives',
        'Research and development partnerships'
      ],
      recognition: 'Platinum',
      employees: 'Unlimited employees'
    }
  ];

  const employeePrograms = [
    {
      title: "Skills-Based Volunteering",
      description: "Match employee expertise with specific project needs across Africa",
      icon: "Users",
      benefits: ["Professional development", "Cultural exchange", "Measurable impact"]
    },
    {
      title: "Executive Mentorship",
      description: "Senior leaders mentor African entrepreneurs and business leaders",
      icon: "UserCheck",
      benefits: ["Leadership development", "Global perspective", "Network expansion"]
    },
    {
      title: "Innovation Challenges",
      description: "Employee teams develop solutions for African development challenges",
      icon: "Lightbulb",
      benefits: ["Creative problem-solving", "Team building", "Innovation culture"]
    },
    {
      title: "Cultural Exchange",
      description: "Virtual and in-person exchanges with African communities",
      icon: "Globe",
      benefits: ["Cultural awareness", "Global citizenship", "Personal growth"]
    }
  ];

  const successStories = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      partnership: "Gold Strategic Partner",
      impact: "Trained 2,500 African developers through coding bootcamps",
  quote: "Our partnership with Valu Africa has transformed how we think about global impact. The skills exchange has benefited both our employees and African communities.",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop"
    },
    {
      company: "FinanceFirst Bank",
      industry: "Financial Services",
      partnership: "Silver Impact Partner",
      impact: "Provided microfinance training to 1,000 small business owners",
      quote: "The measurable impact and transparent reporting make this partnership incredibly valuable for our CSR goals.",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop"
    }
  ];

  const handleInputChange = (field, value) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Partnership inquiry submitted:', contactForm);
    // Handle form submission
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
          Corporate Partnership
        </h3>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Partner with Valentine Unimuke Foundation to create meaningful impact while achieving your CSR goals. Our flexible partnership tiers offer authentic engagement opportunities that benefit both your organization and African communities.
        </p>
      </div>
      {/* Partnership Tiers */}
      <div className="space-y-8">
        <div className="text-center">
          <h4 className="text-xl font-semibold mb-2">Partnership Tiers</h4>
          <p className="text-muted-foreground">
            Choose the partnership level that aligns with your company's impact goals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {partnershipTiers?.map((tier) => (
            <div
              key={tier?.id}
              className={`bg-card rounded-xl shadow-warm hover:shadow-warm-lg transition-all duration-300 overflow-hidden cursor-pointer ${
                selectedTier === tier?.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedTier(tier?.id)}
            >
              <div className={`h-2 bg-gradient-to-r ${tier?.color}`} />
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <h5 className="font-semibold text-lg mb-2">{tier?.name}</h5>
                  <div className="text-2xl font-bold text-primary mb-1">{tier?.price}</div>
                  <div className="text-sm text-muted-foreground">{tier?.employees}</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h6 className="font-medium text-sm mb-2">Key Benefits:</h6>
                    <ul className="space-y-1">
                      {tier?.benefits?.slice(0, 3)?.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2 text-xs text-muted-foreground">
                          <Icon name="Check" size={12} className="text-success mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                      {tier?.benefits?.length > 3 && (
                        <li className="text-xs text-primary">
                          +{tier?.benefits?.length - 3} more benefits
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h6 className="font-medium text-sm mb-2">Program Focus:</h6>
                    <ul className="space-y-1">
                      {tier?.programs?.map((program, index) => (
                        <li key={index} className="flex items-start space-x-2 text-xs text-muted-foreground">
                          <Icon name="Target" size={12} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{program}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  variant={selectedTier === tier?.id ? "default" : "outline"}
                  fullWidth
                  className="mt-6"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={16}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Employee Engagement Programs */}
      <div className="bg-card rounded-xl shadow-warm p-8">
        <div className="text-center mb-8">
          <h4 className="text-xl font-semibold mb-2">Employee Engagement Programs</h4>
          <p className="text-muted-foreground">
            Meaningful opportunities for your team to contribute skills and make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {employeePrograms?.map((program, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-warning rounded-full flex items-center justify-center">
                <Icon name={program?.icon} size={24} className="text-white" />
              </div>
              <h5 className="font-semibold mb-2">{program?.title}</h5>
              <p className="text-sm text-muted-foreground mb-4">{program?.description}</p>
              <ul className="space-y-1">
                {program?.benefits?.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="text-xs text-muted-foreground">
                    • {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Success Stories */}
      <div className="space-y-6">
        <div className="text-center">
          <h4 className="text-xl font-semibold mb-2">Partner Success Stories</h4>
          <p className="text-muted-foreground">
            See how leading companies are creating impact through partnership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {successStories?.map((story, index) => (
            <div key={index} className="bg-card rounded-xl shadow-warm p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Building" size={24} className="text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold mb-1">{story?.company}</h5>
                  <div className="text-sm text-muted-foreground mb-1">{story?.industry}</div>
                  <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full inline-block">
                    {story?.partnership}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Target" size={16} className="text-success" />
                  <span className="font-medium text-sm">Impact Achieved:</span>
                </div>
                <p className="text-sm text-muted-foreground">{story?.impact}</p>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 italic text-sm text-muted-foreground">
                "{story?.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Form */}
      <div className="bg-gradient-to-br from-primary/5 to-warning/5 rounded-xl p-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h4 className="text-xl font-semibold mb-2">Start Your Partnership Journey</h4>
            <p className="text-muted-foreground">
              Get in touch with our partnership team to explore how we can work together
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Company Name"
                type="text"
                required
                value={contactForm?.companyName}
                onChange={(e) => handleInputChange('companyName', e?.target?.value)}
                placeholder="Enter company name"
              />
              <Input
                label="Contact Name"
                type="text"
                required
                value={contactForm?.contactName}
                onChange={(e) => handleInputChange('contactName', e?.target?.value)}
                placeholder="Your full name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                type="email"
                required
                value={contactForm?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                placeholder="your.email@company.com"
              />
              <Input
                label="Phone Number"
                type="tel"
                value={contactForm?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Select
                label="Industry"
                options={industryOptions}
                value={contactForm?.industry}
                onChange={(value) => handleInputChange('industry', value)}
                required
              />
              <Select
                label="Company Size"
                options={employeeOptions}
                value={contactForm?.employeeCount}
                onChange={(value) => handleInputChange('employeeCount', value)}
                required
              />
            </div>

            <Input
              label="Areas of Interest"
              type="text"
              value={contactForm?.interests}
              onChange={(e) => handleInputChange('interests', e?.target?.value)}
              placeholder="e.g., Education, Healthcare, Technology"
              description="What causes or programs interest your organization most?"
            />

            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                value={contactForm?.message}
                onChange={(e) => handleInputChange('message', e?.target?.value)}
                placeholder="Tell us about your CSR goals and how you'd like to make an impact..."
                rows={4}
                className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
              />
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                variant="default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 hover-lift"
                iconName="Send"
                iconPosition="right"
                iconSize={16}
              >
                Submit Partnership Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CorporatePartnership;