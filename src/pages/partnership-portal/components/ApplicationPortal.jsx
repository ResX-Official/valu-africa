import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ApplicationPortal = () => {
  const [formData, setFormData] = useState({
    partnershipType: '',
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    organizationType: '',
    country: '',
    website: '',
    investmentRange: '',
    focusAreas: [],
    timeline: '',
    message: '',
    agreeToTerms: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const partnershipTypeOptions = [
    { value: 'corporate', label: 'Corporate Partnership' },
    { value: 'government', label: 'Government Relations' },
    { value: 'ngo', label: 'NGO Collaboration' },
    { value: 'academic', label: 'Academic Institution' },
    { value: 'foundation', label: 'Foundation/Grant Maker' }
  ];

  const organizationTypeOptions = [
    { value: 'multinational', label: 'Multinational Corporation' },
    { value: 'sme', label: 'Small/Medium Enterprise' },
    { value: 'government', label: 'Government Agency' },
    { value: 'ngo', label: 'Non-Governmental Organization' },
    { value: 'foundation', label: 'Foundation' },
    { value: 'academic', label: 'Academic Institution' },
    { value: 'other', label: 'Other' }
  ];

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'ng', label: 'Nigeria' },
    { value: 'za', label: 'South Africa' },
    { value: 'ke', label: 'Kenya' },
    { value: 'gh', label: 'Ghana' },
    { value: 'other', label: 'Other' }
  ];

  const investmentRangeOptions = [
    { value: '5k-25k', label: '$5,000 - $25,000' },
    { value: '25k-100k', label: '$25,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: '500k+', label: '$500,000+' },
    { value: 'non-monetary', label: 'Non-monetary Partnership' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (1-3 months)' },
    { value: 'short', label: 'Short-term (3-6 months)' },
    { value: 'medium', label: 'Medium-term (6-12 months)' },
    { value: 'long', label: 'Long-term (1+ years)' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const focusAreaOptions = [
    { value: 'education', label: 'Education & Skills Development' },
    { value: 'healthcare', label: 'Healthcare & Wellness' },
    { value: 'economic', label: 'Economic Empowerment' },
    { value: 'technology', label: 'Technology & Innovation' },
    { value: 'agriculture', label: 'Agriculture & Food Security' },
    { value: 'environment', label: 'Environmental Sustainability' },
    { value: 'governance', label: 'Climate Change' },
    { value: 'culture', label: 'Cultural Preservation' }
    { value: 'community', label: 'Youth Empowerment' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFocusAreaChange = (area, checked) => {
    setFormData(prev => ({
      ...prev,
      focusAreas: checked 
        ? [...prev?.focusAreas, area]
        : prev?.focusAreas?.filter(item => item !== area)
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Partnership application submitted successfully! Our team will contact you within 48 hours.');
    
    // Reset form
    setFormData({
      partnershipType: '',
      organizationName: '',
      contactName: '',
      email: '',
      phone: '',
      organizationType: '',
      country: '',
      website: '',
      investmentRange: '',
      focusAreas: [],
      timeline: '',
      message: '',
      agreeToTerms: false
    });
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData?.partnershipType && formData?.organizationName && formData?.contactName;
      case 2:
        return formData?.email && formData?.organizationType && formData?.country;
      case 3:
        return formData?.agreeToTerms;
      default:
        return false;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="FileText" size={16} />
              <span>Partnership Application</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Start Your Partnership Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete our partnership application to begin creating meaningful impact together.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3]?.map((step) => (
                <React.Fragment key={step}>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step 
                      ? 'bg-primary border-primary text-primary-foreground' 
                      : 'border-border text-muted-foreground'
                  }`}>
                    {currentStep > step ? (
                      <Icon name="Check" size={16} />
                    ) : (
                      <span className="text-sm font-medium">{step}</span>
                    )}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-0.5 transition-all duration-300 ${
                      currentStep > step ? 'bg-primary' : 'bg-border'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-center mt-4 space-x-16">
              <span className={`text-sm ${currentStep >= 1 ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                Basic Info
              </span>
              <span className={`text-sm ${currentStep >= 2 ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                Details
              </span>
              <span className={`text-sm ${currentStep >= 3 ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                Preferences
              </span>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-card rounded-xl border border-border p-8 shadow-warm">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                    Basic Information
                  </h3>
                  
                  <Select
                    label="Partnership Type"
                    description="Select the type of partnership you're interested in"
                    required
                    options={partnershipTypeOptions}
                    value={formData?.partnershipType}
                    onChange={(value) => handleInputChange('partnershipType', value)}
                    placeholder="Choose partnership type"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Organization Name"
                      type="text"
                      required
                      value={formData?.organizationName}
                      onChange={(e) => handleInputChange('organizationName', e?.target?.value)}
                      placeholder="Enter organization name"
                    />

                    <Input
                      label="Contact Person Name"
                      type="text"
                      required
                      value={formData?.contactName}
                      onChange={(e) => handleInputChange('contactName', e?.target?.value)}
                      placeholder="Enter contact person name"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Contact & Organization Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                    Contact & Organization Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Email Address"
                      type="email"
                      required
                      value={formData?.email}
                      onChange={(e) => handleInputChange('email', e?.target?.value)}
                      placeholder="Enter email address"
                    />

                    <Input
                      label="Phone Number"
                      type="tel"
                      value={formData?.phone}
                      onChange={(e) => handleInputChange('phone', e?.target?.value)}
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="Organization Type"
                      required
                      options={organizationTypeOptions}
                      value={formData?.organizationType}
                      onChange={(value) => handleInputChange('organizationType', value)}
                      placeholder="Select organization type"
                    />

                    <Select
                      label="Country"
                      required
                      options={countryOptions}
                      value={formData?.country}
                      onChange={(value) => handleInputChange('country', value)}
                      placeholder="Select country"
                      searchable
                    />
                  </div>

                  <Input
                    label="Website URL"
                    type="url"
                    value={formData?.website}
                    onChange={(e) => handleInputChange('website', e?.target?.value)}
                    placeholder="https://www.example.com"
                  />
                </div>
              )}

              {/* Step 3: Partnership Preferences */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                    Partnership Preferences
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="Investment Range"
                      options={investmentRangeOptions}
                      value={formData?.investmentRange}
                      onChange={(value) => handleInputChange('investmentRange', value)}
                      placeholder="Select investment range"
                    />

                    <Select
                      label="Timeline"
                      options={timelineOptions}
                      value={formData?.timeline}
                      onChange={(value) => handleInputChange('timeline', value)}
                      placeholder="Select timeline"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Focus Areas (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {focusAreaOptions?.map((area) => (
                        <Checkbox
                          key={area?.value}
                          label={area?.label}
                          checked={formData?.focusAreas?.includes(area?.value)}
                          onChange={(e) => handleFocusAreaChange(area?.value, e?.target?.checked)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Message
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      rows={4}
                      value={formData?.message}
                      onChange={(e) => handleInputChange('message', e?.target?.value)}
                      placeholder="Tell us more about your partnership goals and how you'd like to collaborate..."
                    />
                  </div>

                  <Checkbox
                    label="I agree to the terms and conditions and privacy policy"
                    required
                    checked={formData?.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e?.target?.checked)}
                  />
                </div>
              )}

              {/* Form Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
                <div>
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      iconName="ArrowLeft"
                      iconPosition="left"
                    >
                      Previous
                    </Button>
                  )}
                </div>

                <div>
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      variant="default"
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="default"
                      disabled={!isStepValid()}
                      loading={isSubmitting}
                      iconName="Send"
                      iconPosition="right"
                      className="bg-primary hover:bg-primary/90"
                    >
                      Submit Application
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationPortal;