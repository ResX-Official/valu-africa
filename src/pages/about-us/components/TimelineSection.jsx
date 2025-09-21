import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineSection = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const milestones = [
    {
      year: 2009,
      title: 'Foundation Established',
  description: 'Valu Africa was founded by Dr. Amara Okafor with a vision to empower African communities through sustainable development.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      achievements: [
        'Registered as international NGO',
        'Established first office in Lagos, Nigeria',
        'Launched inaugural education program'
      ],
      impact: '500 students reached',
      icon: 'Rocket'
    },
    {
      year: 2012,
      title: 'Continental Expansion',
      description: 'Expanded operations to 10 African countries, establishing regional partnerships and launching healthcare initiatives.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      achievements: [
        'Opened offices in 10 countries',
        'Launched mobile health clinics',
        'Established scholarship program'
      ],
      impact: '25,000 people served',
      icon: 'Globe'
    },
    {
      year: 2015,
      title: 'UN Partnership',
      description: 'Became official UN partner, aligning programs with Sustainable Development Goals and scaling impact significantly.',
      image: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9866a?w=400&h=300&fit=crop',
      achievements: [
        'UN official partnership status',
        'SDG alignment across all programs',
        'First international recognition award'
      ],
      impact: '100,000 lives impacted',
      icon: 'Award'
    },
    {
      year: 2018,
      title: 'Digital Innovation',
      description: 'Launched digital platforms for education and healthcare delivery, revolutionizing service access in remote areas.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      achievements: [
        'Digital learning platform launched',
        'Telemedicine services introduced',
        'Mobile app for community health'
      ],
      impact: '500,000 digital users',
      icon: 'Smartphone'
    },
    {
      year: 2020,
      title: 'Pandemic Response',
      description: 'Rapidly adapted programs to address COVID-19 challenges, providing critical support to vulnerable communities.',
      image: 'https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=400&h=300&fit=crop',
      achievements: [
        'Emergency response program',
        'PPE distribution network',
        'Mental health support services'
      ],
      impact: '1M+ people supported',
      icon: 'Shield'
    },
    {
      year: 2022,
      title: 'Economic Empowerment',
      description: 'Launched comprehensive economic empowerment programs, including microfinance and entrepreneurship training.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop',
      achievements: [
        'Microfinance program launched',
        'Business incubation centers',
        'Women entrepreneurship initiative'
      ],
      impact: '50,000 businesses supported',
      icon: 'TrendingUp'
    },
    {
      year: 2024,
      title: 'Continental Leadership',
      description: 'Achieved presence in all 54 African countries, becoming the largest pan-African development organization.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop',
      achievements: [
        'All 54 countries coverage',
        'Cultural preservation initiative',
        'Youth leadership program'
      ],
      impact: '2.5M+ lives transformed',
      icon: 'Crown'
    }
  ];

  const activeMilestone = milestones?.find(m => m?.year === activeYear);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Our <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to continental impact - explore the key milestones 
            that have shaped Valu Africa into the organization it is today.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted transform -translate-y-1/2 hidden lg:block"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-primary transform -translate-y-1/2 transition-all duration-500 hidden lg:block"
            style={{ 
              width: `${((milestones?.findIndex(m => m?.year === activeYear) + 1) / milestones?.length) * 100}%` 
            }}
          ></div>

          {/* Timeline Points */}
          <div className="flex flex-wrap justify-center lg:justify-between gap-4 lg:gap-0">
            {milestones?.map((milestone, index) => (
              <button
                key={milestone?.year}
                onClick={() => setActiveYear(milestone?.year)}
                className={`relative flex flex-col items-center space-y-2 p-4 rounded-lg transition-all duration-300 ${
                  activeYear === milestone?.year
                    ? 'bg-primary text-white shadow-warm-lg scale-105'
                    : 'bg-background text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  activeYear === milestone?.year
                    ? 'border-white bg-white/20' :'border-muted-foreground bg-background'
                }`}>
                  <Icon 
                    name={milestone?.icon} 
                    size={20} 
                    className={activeYear === milestone?.year ? 'text-white' : 'text-muted-foreground'}
                  />
                </div>
                <div className="text-center">
                  <div className="font-bold text-sm">{milestone?.year}</div>
                  <div className="text-xs opacity-80 hidden lg:block">{milestone?.title?.split(' ')?.[0]}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Milestone Details */}
        {activeMilestone && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                    <Icon name={activeMilestone?.icon} size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">{activeMilestone?.year}</div>
                    <div className="text-primary font-medium">{activeMilestone?.title}</div>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {activeMilestone?.description}
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Key Achievements</h4>
                <div className="space-y-3">
                  {activeMilestone?.achievements?.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={14} className="text-white" />
                      </div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metric */}
              <div className="bg-accent/10 p-6 rounded-xl border-l-4 border-accent">
                <div className="flex items-center space-x-3">
                  <Icon name="TrendingUp" size={24} className="text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">Impact Milestone</div>
                    <div className="text-xl font-bold text-foreground">{activeMilestone?.impact}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-warm-lg">
                <Image
                  src={activeMilestone?.image}
                  alt={`${activeMilestone?.title} milestone`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Floating Year Badge */}
              <div className="absolute -top-4 -right-4 bg-primary p-4 rounded-xl shadow-warm-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{activeMilestone?.year}</div>
                  <div className="text-xs text-white/80">Milestone</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Future Vision */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 p-8 lg:p-12 rounded-2xl border border-primary/20 text-center">
          <div className="space-y-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
              <Icon name="Telescope" size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Looking Ahead</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our journey continues with ambitious goals for 2025 and beyond. We're committed 
              to reaching 5 million lives by 2030, establishing 1,000 community centers, and 
              becoming the leading voice for African-led development worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">5M+</div>
                <div className="text-sm text-muted-foreground">Lives to Impact by 2030</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">1,000</div>
                <div className="text-sm text-muted-foreground">Community Centers</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-warning">100%</div>
                <div className="text-sm text-muted-foreground">Sustainable Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;