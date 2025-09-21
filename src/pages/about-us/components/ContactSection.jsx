import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    subject: '',
    message: ''
  });

  const departments = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'programs', label: 'Programs & Impact' },
    { value: 'partnerships', label: 'Partnerships' },
    { value: 'media', label: 'Media & Press' },
    { value: 'careers', label: 'Careers' },
    { value: 'finance', label: 'Finance & Donations' },
    { value: 'volunteer', label: 'Volunteer Opportunities' }
  ];

  const offices = [
    {
      id: 1,
      name: 'Headquarters - Lagos',
      address: '123 Victoria Island, Lagos, Nigeria',
      phone: '+234 1 234 5678',
      email: 'lagos@africarising.org',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM WAT',
      coordinates: { lat: 6.4281, lng: 3.4219 },
      isHeadquarters: true
    },
    {
      id: 2,
      name: 'East Africa Office - Nairobi',
      address: '456 Westlands Road, Nairobi, Kenya',
      phone: '+254 20 123 4567',
      email: 'nairobi@africarising.org',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM EAT',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 3,
      name: 'Southern Africa Office - Cape Town',
      address: '789 Long Street, Cape Town, South Africa',
      phone: '+27 21 123 4567',
      email: 'capetown@africarising.org',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM SAST',
      coordinates: { lat: -33.9249, lng: 18.4241 }
    },
    {
      id: 4,
      name: 'North Africa Office - Cairo',
      address: '321 Tahrir Square, Cairo, Egypt',
      phone: '+20 2 1234 5678',
      email: 'cairo@africarising.org',
      hours: 'Sun-Thu: 9:00 AM - 5:00 PM EET',
      coordinates: { lat: 30.0444, lng: 31.2357 }
    }
  ];

  const departmentContacts = [
    {
      department: 'Executive Leadership',
      contacts: [
        { name: 'Dr. Amara Okafor', title: 'Executive Director', email: 'amara.okafor@africarising.org' },
        { name: 'Kwame Asante', title: 'Chief Operating Officer', email: 'kwame.asante@africarising.org' }
      ]
    },
    {
      department: 'Programs & Impact',
      contacts: [
        { name: 'Dr. Fatima Al-Rashid', title: 'Director of Programs', email: 'fatima.alrashid@africarising.org' },
        { name: 'Michael Osei', title: 'Education Program Lead', email: 'michael.osei@africarising.org' }
      ]
    },
    {
      department: 'Partnerships & Development',
      contacts: [
        { name: 'Joseph Mbeki', title: 'Director of Partnerships', email: 'joseph.mbeki@africarising.org' },
        { name: 'Sarah Mwangi', title: 'Corporate Relations Manager', email: 'sarah.mwangi@africarising.org' }
      ]
    },
    {
      department: 'Communications & Media',
      contacts: [
        { name: 'Grace Adebayo', title: 'Communications Director', email: 'grace.adebayo@africarising.org' },
        { name: 'Ahmed Hassan', title: 'Digital Media Manager', email: 'ahmed.hassan@africarising.org' }
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      department: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about our work, want to partner with us, or interested in joining our mission? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Send us a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <Select
                label="Department"
                options={departments}
                value={formData?.department}
                onChange={handleSelectChange}
                placeholder="Select a department"
                required
              />

              <Input
                label="Subject"
                type="text"
                name="subject"
                value={formData?.subject}
                onChange={handleInputChange}
                placeholder="Brief subject of your message"
                required
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Message <span className="text-error">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-warm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <Button 
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                className="bg-primary hover:bg-primary/90"
                iconName="Send"
                iconPosition="left"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-background p-6 rounded-xl shadow-warm border border-warm">
              <h3 className="text-xl font-bold text-foreground mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-sm text-muted-foreground">+234 1 234 5678</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">info@africarising.org</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">+234 1 234 5678</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-warning rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Business Hours</div>
                    <div className="text-sm text-muted-foreground">Mon-Fri: 8:00 AM - 6:00 PM WAT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Offices */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Regional Offices</h3>
              <div className="space-y-4">
                {offices?.map((office) => (
                  <div 
                    key={office?.id}
                    className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-warm ${
                      office?.isHeadquarters 
                        ? 'bg-primary/10 border-primary/20' :'bg-background border-warm'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground">{office?.name}</h4>
                        {office?.isHeadquarters && (
                          <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">HQ</span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center space-x-2">
                          <Icon name="MapPin" size={14} />
                          <span>{office?.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Phone" size={14} />
                          <span>{office?.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Mail" size={14} />
                          <span>{office?.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={14} />
                          <span>{office?.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="mt-20 space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-foreground">Department Contacts</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For specific inquiries, you can reach out directly to our department heads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentContacts?.map((dept, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-xl shadow-warm border border-warm hover:shadow-warm-lg transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">{dept?.department}</h4>
                <div className="space-y-3">
                  {dept?.contacts?.map((contact, contactIndex) => (
                    <div key={contactIndex} className="space-y-1">
                      <div className="font-medium text-foreground text-sm">{contact?.name}</div>
                      <div className="text-xs text-muted-foreground">{contact?.title}</div>
                      <div className="text-xs text-primary">{contact?.email}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-foreground">Visit Our Headquarters</h3>
            <p className="text-muted-foreground">
              Located in the heart of Lagos, Nigeria - the economic hub of West Africa.
            </p>
          </div>

          <div className="bg-background rounded-xl shadow-warm border border-warm overflow-hidden">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Valu Africa Headquarters - Lagos, Nigeria"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=6.4281,3.4219&z=14&output=embed"
                className="border-0"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">Valu Africa Headquarters</h4>
                  <p className="text-sm text-muted-foreground">123 Victoria Island, Lagos, Nigeria</p>
                </div>
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary/10"
                  iconName="Navigation"
                  iconPosition="left"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;