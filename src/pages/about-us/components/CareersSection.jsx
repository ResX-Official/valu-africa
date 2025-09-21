import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CareersSection = () => {
  const [activeTab, setActiveTab] = useState('opportunities');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Program Manager - Education',
      department: 'Programs',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead education initiatives across East Africa, managing partnerships with local schools and government agencies.',
      requirements: [
        'Master\'s degree in Education or related field',
        'Experience in international development',
        'Fluency in English and Swahili',
        'Strong project management skills'
      ],
      posted: '2024-08-10'
    },
    {
      id: 2,
      title: 'Digital Health Coordinator',
      department: 'Healthcare',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Coordinate telemedicine programs and digital health initiatives across West Africa.',
      requirements: [
        'Bachelor\'s degree in Public Health or IT',
        'Experience with digital health platforms',
        'Knowledge of healthcare systems in Africa',
        'Strong communication skills'
      ],
      posted: '2024-08-05'
    },
    {
      id: 3,
      title: 'Community Engagement Specialist',
      department: 'Community Relations',
      location: 'Cape Town, South Africa',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Build and maintain relationships with community leaders and local organizations.',
      requirements: [
        'Bachelor\'s degree in Social Sciences',
        'Experience in community development',
        'Multilingual capabilities preferred',
        'Cultural sensitivity and adaptability'
      ],
      posted: '2024-07-28'
    },
    {
      id: 4,
      title: 'Financial Analyst',
      department: 'Finance',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Support financial planning, budgeting, and reporting for programs across Africa.',
      requirements: [
        'CPA or equivalent qualification',
        'Experience with international finance',
        'Proficiency in financial software',
        'Attention to detail and accuracy'
      ],
      posted: '2024-07-20'
    }
  ];

  const cultureValues = [
    {
      icon: 'Users',
      title: 'Collaborative Spirit',
      description: 'We work together across cultures, departments, and continents to achieve our mission.'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation Mindset',
      description: 'We encourage creative thinking and innovative solutions to complex challenges.'
    },
    {
      icon: 'Heart',
      title: 'Passion for Impact',
      description: 'Every team member is driven by the desire to create meaningful change in African communities.'
    },
    {
      icon: 'Globe',
      title: 'Cultural Appreciation',
      description: 'We celebrate the rich diversity of African cultures and perspectives in our work.'
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health insurance',
        'Mental health support',
        'Wellness programs',
        'Fitness allowance'
      ]
    },
    {
      category: 'Professional Development',
      items: [
        'Annual learning budget',
        'Conference attendance',
        'Leadership training',
        'Mentorship programs'
      ]
    },
    {
      category: 'Work-Life Balance',
      items: [
        'Flexible working hours',
        'Remote work options',
        'Generous vacation policy',
        'Sabbatical opportunities'
      ]
    },
    {
      category: 'Financial Benefits',
      items: [
        'Competitive salary',
        'Performance bonuses',
        'Retirement savings plan',
        'Housing allowance'
      ]
    }
  ];

  const employeeTestimonials = [
    {
      id: 1,
      name: 'Sarah Mwangi',
      position: 'Program Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
  quote: 'Working at Valentine Unimuke Foundation has been the most fulfilling experience of my career. Every day, I see the direct impact of our work on communities across Kenya.',
      years: '3 years'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      position: 'Digital Health Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      quote: 'The innovation and collaboration here is incredible. We\'re not just implementing programs - we\'re pioneering new approaches to development.',
      years: '2 years'
    },
    {
      id: 3,
      name: 'Grace Okafor',
      position: 'Community Relations Lead',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop',
  quote: 'Valentine Unimuke Foundation truly values its employees. The professional development opportunities and supportive culture make this an amazing place to grow.',
      years: '4 years'
    }
  ];

  const diversityStats = [
    { label: 'African Nationals', percentage: 85, color: 'bg-primary' },
    { label: 'Women in Leadership', percentage: 60, color: 'bg-accent' },
    { label: 'Local Hiring', percentage: 90, color: 'bg-success' },
    { label: 'Multilingual Staff', percentage: 75, color: 'bg-warning' }
  ];

  const tabs = [
    { id: 'opportunities', label: 'Current Opportunities', icon: 'Briefcase' },
    { id: 'culture', label: 'Our Culture', icon: 'Heart' },
    { id: 'benefits', label: 'Benefits & Growth', icon: 'Gift' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Join Our <span className="text-gradient-gold">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Be part of a passionate team dedicated to transforming Africa through 
            sustainable development, innovation, and community empowerment.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-lg">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-background text-primary shadow-warm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Current Opportunities */}
        {activeTab === 'opportunities' && (
          <div className="space-y-8">
            <div className="grid gap-6">
              {jobOpenings?.map((job) => (
                <div 
                  key={job?.id}
                  className="bg-muted/30 p-6 rounded-xl shadow-warm border border-warm hover:shadow-warm-lg transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Job Info */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground">{job?.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="Building" size={14} />
                            <span>{job?.department}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="MapPin" size={14} />
                            <span>{job?.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Clock" size={14} />
                            <span>{job?.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="User" size={14} />
                            <span>{job?.experience}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{job?.description}</p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Key Requirements</h4>
                        <ul className="space-y-1">
                          {job?.requirements?.map((req, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Apply Section */}
                    <div className="space-y-4">
                      <div className="bg-background p-4 rounded-lg border border-warm">
                        <div className="space-y-3">
                          <div className="text-sm text-muted-foreground">
                            Posted: {new Date(job.posted)?.toLocaleDateString()}
                          </div>
                          <Button 
                            variant="default"
                            fullWidth
                            className="bg-primary hover:bg-primary/90"
                            iconName="Send"
                            iconPosition="left"
                          >
                            Apply Now
                          </Button>
                          <Button 
                            variant="outline"
                            fullWidth
                            className="border-accent text-accent hover:bg-accent/10"
                            iconName="Bookmark"
                            iconPosition="left"
                          >
                            Save Job
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-primary/10 p-8 rounded-xl border border-primary/20 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Don't See the Right Role?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for passionate individuals who share our mission. 
                Send us your resume and tell us how you'd like to contribute to Africa's development.
              </p>
              <Button 
                variant="default"
                className="bg-primary hover:bg-primary/90"
                iconName="Mail"
                iconPosition="left"
              >
                Send General Application
              </Button>
            </div>
          </div>
        )}

        {/* Culture */}
        {activeTab === 'culture' && (
          <div className="space-y-16">
            {/* Culture Values */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Our Values in Action</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  These core values guide how we work, collaborate, and create impact together.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cultureValues?.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-muted/30 p-6 rounded-xl shadow-warm border border-warm text-center hover:shadow-warm-lg transition-all duration-300 hover-lift"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon name={value?.icon} size={28} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{value?.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value?.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Employee Testimonials */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-foreground">What Our Team Says</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Hear directly from our team members about their experience working at Valu Africa.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {employeeTestimonials?.map((testimonial) => (
                  <div 
                    key={testimonial?.id}
                    className="bg-background p-6 rounded-xl shadow-warm border border-warm hover:shadow-warm-lg transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial?.image}
                            alt={testimonial?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial?.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial?.position}</div>
                          <div className="text-xs text-primary">{testimonial?.years} with us</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic leading-relaxed">
                        "{testimonial?.quote}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Diversity Stats */}
            <div className="bg-muted/30 p-8 rounded-xl">
              <div className="text-center space-y-4 mb-8">
                <h3 className="text-3xl font-bold text-foreground">Diversity & Inclusion</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're proud of our diverse team that reflects the communities we serve.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {diversityStats?.map((stat, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="text-3xl font-bold text-foreground">{stat?.percentage}%</div>
                    <div className="text-sm text-muted-foreground">{stat?.label}</div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`${stat?.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${stat?.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Benefits */}
        {activeTab === 'benefits' && (
          <div className="space-y-12">
            {/* Benefits Grid */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Comprehensive Benefits</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We invest in our team's wellbeing, growth, and success with a comprehensive benefits package.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits?.map((category, index) => (
                  <div 
                    key={index}
                    className="bg-background p-6 rounded-xl shadow-warm border border-warm hover:shadow-warm-lg transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-foreground mb-4">{category?.category}</h4>
                    <ul className="space-y-2">
                      {category?.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Opportunities */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 lg:p-12 rounded-2xl border border-primary/20">
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Growth & Development</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  We're committed to helping our team members grow professionally and personally 
                  through continuous learning and development opportunities.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto">
                      <Icon name="GraduationCap" size={28} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">Learning Budget</h4>
                    <p className="text-sm text-muted-foreground">$2,000 annual budget for courses, certifications, and conferences</p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto">
                      <Icon name="Users" size={28} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">Mentorship</h4>
                    <p className="text-sm text-muted-foreground">Paired mentorship with senior leaders and industry experts</p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-warning rounded-xl flex items-center justify-center mx-auto">
                      <Icon name="TrendingUp" size={28} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">Career Progression</h4>
                    <p className="text-sm text-muted-foreground">Clear pathways for advancement and leadership development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareersSection;