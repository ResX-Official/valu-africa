import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PartnerSpotlight = () => {
  const [currentSpotlight, setCurrentSpotlight] = useState(0);

  const partnerSpotlights = [
    {
      id: 1,
      partnerName: "Global Tech Solutions",
      partnerType: "Corporate Partner",
      partnerLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      partnershipDuration: "2 Years",
      focusArea: "Digital Education",
      heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
      achievement: "Transformed 50+ Rural Schools",
      impactStats: {
        beneficiaries: 15000,
        communities: 35,
        programs: 12,
        investment: "$750K"
      },
  story: `Global Tech Solutions partnered with Valu Africa to bridge the digital divide in rural African communities. Through their innovative approach, they've established technology centers, trained local teachers, and provided sustainable internet connectivity to previously underserved areas.\n\nThe partnership has not only improved educational outcomes but also created new economic opportunities for young people in these communities. Their commitment to long-term sustainability ensures that these programs will continue to benefit future generations.`,
      quote: "This partnership has redefined our understanding of corporate social responsibility. The authentic impact and community engagement have exceeded all our expectations.",
      spokesperson: {
        name: "Michael Chen",
        title: "Chief Impact Officer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
      },
      keyAchievements: [
        "Established 25 digital learning centers",
        "Trained 500+ teachers in technology integration",
        "Provided internet access to 50 rural schools",
        "Created 200 tech-related job opportunities"
      ],
      nextSteps: [
        "Expand to 3 additional countries",
        "Launch mobile learning units",
        "Develop local tech entrepreneur program",
        "Create teacher exchange program"
      ]
    },
    {
      id: 2,
      partnerName: "European Development Bank",
      partnerType: "Financial Institution",
      partnerLogo: "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=200&h=100&fit=crop",
      partnershipDuration: "3 Years",
      focusArea: "Economic Empowerment",
      heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop",
      achievement: "Empowered 10,000+ Entrepreneurs",
      impactStats: {
        beneficiaries: 25000,
        communities: 80,
        programs: 18,
        investment: "$2.1M"
      },
  story: `The European Development Bank's partnership with Valu Africa has created a comprehensive ecosystem for entrepreneurship and economic empowerment across multiple African countries. Through microfinance, business training, and mentorship programs, they've helped thousands of individuals start and grow sustainable businesses.\n\nThis partnership has been particularly successful in empowering women entrepreneurs and youth, creating a ripple effect of economic growth in rural and urban communities alike. The focus on financial literacy and business skills has created lasting change that extends far beyond the initial investment.`,
  quote: "Our partnership with Valu Africa has demonstrated that sustainable development requires authentic community engagement and long-term commitment to capacity building.",
      spokesperson: {
        name: "Dr. Elena Rossi",
        title: "Director of African Development",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop"
      },
      keyAchievements: [
        "Provided microloans to 8,500 entrepreneurs",
        "Trained 12,000 people in financial literacy",
        "Established 45 business incubation centers",
        "Created 15,000 direct and indirect jobs"
      ],
      nextSteps: [
        "Launch digital banking solutions",
        "Expand women\'s entrepreneurship program",
        "Create cross-border trade facilitation",
        "Develop green business initiatives"
      ]
    },
    {
      id: 3,
      partnerName: "African Health Consortium",
      partnerType: "NGO Alliance",
      partnerLogo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop",
      partnershipDuration: "4 Years",
      focusArea: "Healthcare Access",
      heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
      achievement: "Improved Healthcare for 100K+ People",
      impactStats: {
        beneficiaries: 120000,
        communities: 150,
        programs: 25,
        investment: "$1.8M"
      },
  story: `The African Health Consortium's collaboration with Valu Africa has revolutionized healthcare delivery in remote and underserved communities. By combining resources, expertise, and local knowledge, this partnership has created sustainable healthcare solutions that address both immediate needs and long-term capacity building.\n\nThe partnership's innovative approach includes mobile health clinics, telemedicine programs, and community health worker training. This comprehensive strategy has not only improved health outcomes but also strengthened local healthcare systems for long-term sustainability.`,
      quote: "Together, we've proven that collaborative partnerships can overcome the most challenging healthcare barriers and create lasting change in communities that need it most.",
      spokesperson: {
        name: "Dr. Amara Okafor",title: "Executive Director",image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop"
      },
      keyAchievements: [
        "Deployed 30 mobile health clinics","Trained 800 community health workers","Established 20 telemedicine centers","Reduced child mortality by 35% in target areas"
      ],
      nextSteps: [
        "Launch maternal health program","Expand mental health services","Create health insurance cooperative","Develop medical supply chain network"
      ]
    }
  ];

  const currentPartner = partnerSpotlights?.[currentSpotlight];

  const nextSpotlight = () => {
    setCurrentSpotlight((prev) => (prev + 1) % partnerSpotlights?.length);
  };

  const prevSpotlight = () => {
    setCurrentSpotlight((prev) => (prev - 1 + partnerSpotlights?.length) % partnerSpotlights?.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Award" size={16} />
            <span>Partner Spotlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Celebrating Partnership Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our partners are creating transformational impact and driving meaningful change across Africa.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={prevSpotlight}
                iconName="ChevronLeft"
                className="w-12 h-12 rounded-full p-0"
              />
              
              <div className="flex space-x-2">
                {partnerSpotlights?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSpotlight(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSpotlight === index 
                        ? 'bg-accent scale-125' :'bg-border hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                onClick={nextSpotlight}
                iconName="ChevronRight"
                className="w-12 h-12 rounded-full p-0"
              />
            </div>
          </div>

          {/* Spotlight Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Partner Image & Stats */}
            <div className="relative">
              {/* Hero Image */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-warm-lg mb-6">
                <Image 
                  src={currentPartner?.heroImage} 
                  alt={`${currentPartner?.partnerName} partnership impact`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg border border-border text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    {currentPartner?.impactStats?.beneficiaries?.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Beneficiaries</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {currentPartner?.impactStats?.communities}
                  </div>
                  <div className="text-sm text-muted-foreground">Communities</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {currentPartner?.impactStats?.programs}
                  </div>
                  <div className="text-sm text-muted-foreground">Programs</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border text-center">
                  <div className="text-2xl font-bold text-success mb-1">
                    {currentPartner?.impactStats?.investment}
                  </div>
                  <div className="text-sm text-muted-foreground">Investment</div>
                </div>
              </div>
            </div>

            {/* Partner Details */}
            <div className="space-y-8">
              {/* Partner Header */}
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-10 rounded-lg overflow-hidden">
                    <Image 
                      src={currentPartner?.partnerLogo} 
                      alt={`${currentPartner?.partnerName} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      {currentPartner?.partnerName}
                    </h3>
                    <p className="text-muted-foreground">{currentPartner?.partnerType}</p>
                  </div>
                </div>

                {/* Partnership Meta */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="font-bold text-foreground">{currentPartner?.partnershipDuration}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="font-bold text-foreground">{currentPartner?.focusArea}</div>
                    <div className="text-sm text-muted-foreground">Focus Area</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="font-bold text-accent">{currentPartner?.achievement}</div>
                    <div className="text-sm text-muted-foreground">Achievement</div>
                  </div>
                </div>
              </div>

              {/* Story */}
              <div>
                <h4 className="font-heading font-bold text-foreground mb-4">Partnership Story</h4>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  {currentPartner?.story?.split('\n\n')?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="font-heading font-bold text-foreground mb-4">Key Achievements</h4>
                <ul className="space-y-2">
                  {currentPartner?.keyAchievements?.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image 
                      src={currentPartner?.spokesperson?.image} 
                      alt={currentPartner?.spokesperson?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-muted-foreground italic mb-3">
                      "{currentPartner?.quote}"
                    </blockquote>
                    <div>
                      <div className="font-medium text-foreground">{currentPartner?.spokesperson?.name}</div>
                      <div className="text-sm text-muted-foreground">{currentPartner?.spokesperson?.title}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div>
                <h4 className="font-heading font-bold text-foreground mb-4">Future Plans</h4>
                <ul className="space-y-2">
                  {currentPartner?.nextSteps?.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="ArrowRight" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSpotlight;