import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    partnershipType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const partnershipTypeOptions = [
    { value: 'corporate', label: 'Corporate Partnership' },
    { value: 'government', label: 'Government Relations' },
    { value: 'ngo', label: 'NGO Collaboration' },
    { value: 'academic', label: 'Academic Institution' },
    { value: 'foundation', label: 'Foundation/Grant Maker' },
    { value: 'other', label: 'Other' }
  ];

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email Us',
      description: 'Send us a detailed message about your partnership interests',
      contact: 'partnerships@africarising.org',
      action: 'Send Email'
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      description: 'Speak directly with our partnership team',
      contact: '+1 (555) 123-4567',
      action: 'Call Now'
    },
    {
      icon: 'Calendar',
      title: 'Schedule Meeting',
      description: 'Book a consultation with our partnership specialists',
      contact: 'Available Mon-Fri, 9AM-5PM EST',
      action: 'Book Meeting'
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      description: 'Meet us at our headquarters for in-person discussions',
      contact: '123 Partnership Ave, New York, NY 10001',
      action: 'Get Directions'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Okafor',
      title: 'Director of Corporate Partnerships',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop',
      email: 'sarah.okafor@valunimuke.org',
      specialties: ['Corporate CSR', 'Strategic Alliances', 'Impact Measurement']
    },
    {
      name: 'Dr. Kwame Asante',
      title: 'Government Relations Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      email: 'kwame.asante@valunimuke.org',
      specialties: ['Policy Development', 'Diplomatic Relations', 'Development Aid']
    },
    {
      name: 'Maria Okafor',
      title: 'NGO Collaboration Coordinator',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop',
      email: 'maria.okafor@valunimuke.org',
      specialties: ['NGO Networks', 'Joint Programs', 'Resource Sharing']
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Thank you for your interest! Our partnership team will contact you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      partnershipType: '',
      message: ''
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MessageCircle" size={16} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with our partnership team to explore collaboration opportunities and start creating meaningful impact together.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-card rounded-xl border border-border p-8 shadow-warm">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      type="text"
                      required
                      value={formData?.name}
                      onChange={(e) => handleInputChange('name', e?.target?.value)}
                      placeholder="Enter your full name"
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      required
                      value={formData?.email}
                      onChange={(e) => handleInputChange('email', e?.target?.value)}
                      placeholder="Enter your email"
                    />
                  </div>

                  <Input
                    label="Organization Name"
                    type="text"
                    required
                    value={formData?.organization}
                    onChange={(e) => handleInputChange('organization', e?.target?.value)}
                    placeholder="Enter your organization name"
                  />

                  <Select
                    label="Partnership Interest"
                    required
                    options={partnershipTypeOptions}
                    value={formData?.partnershipType}
                    onChange={(value) => handleInputChange('partnershipType', value)}
                    placeholder="Select partnership type"
                  />

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      rows={5}
                      required
                      value={formData?.message}
                      onChange={(e) => handleInputChange('message', e?.target?.value)}
                      placeholder="Tell us about your partnership goals and how you'd like to collaborate..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    fullWidth
                    loading={isSubmitting}
                    iconName="Send"
                    iconPosition="right"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {contactMethods?.map((method, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg border border-border p-6 hover:shadow-warm transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={method?.icon} size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading font-bold text-foreground mb-2">
                          {method?.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {method?.description}
                        </p>
                        <p className="text-sm font-medium text-foreground mb-3">
                          {method?.contact}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary text-primary hover:bg-primary/10"
                        >
                          {method?.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team & Additional Info */}
            <div className="space-y-8">
              {/* Partnership Team */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Meet Our Partnership Team
                </h3>
                <div className="space-y-6">
                  {teamMembers?.map((member, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg border border-border p-6 hover:shadow-warm transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                          <img 
                            src={member?.image} 
                            alt={member?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-heading font-bold text-foreground mb-1">
                            {member?.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {member?.title}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {member?.specialties?.map((specialty, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                          <a
                            href={`mailto:${member?.email}`}
                            className="text-sm text-primary hover:underline"
                          >
                            {member?.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-muted/30 rounded-xl p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      How long does the partnership application process take?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Our team typically responds within 48 hours. The full evaluation process takes 2-4 weeks depending on the partnership complexity.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      What information do you need for partnership evaluation?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We'll need details about your organization, partnership goals, investment capacity, and preferred collaboration areas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Can we start with a pilot program?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Absolutely! We encourage pilot programs to test compatibility and impact before scaling to larger partnerships.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  Partnership Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    For urgent partnership inquiries, please email us and we'll respond as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;