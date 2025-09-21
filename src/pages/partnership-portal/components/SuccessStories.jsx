import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      partnerName: "TechCorp Global",
      partnerType: "Corporate Partner",
      partnerLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      partnership: "Strategic Alliance",
      duration: "3 Years",
      investment: "$500,000",
      impact: {
        communities: 45,
        beneficiaries: 12500,
        programs: 8,
        countries: 6
      },
      quote: `Our partnership with Valu Africa  has transformed how we approach corporate social responsibility. The measurable impact and authentic community engagement have exceeded all our expectations.`,
      spokesperson: "Sarah Chen",
      title: "Chief Sustainability Officer",
      results: [
        "Established 15 technology centers across rural communities",
        "Trained 3,200 young people in digital skills",
        "Created 850 direct employment opportunities",
        "Achieved 94% program completion rate"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      testimonialImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      partnerName: "Ministry of Education - Ghana",
      partnerType: "Government Partner",
      partnerLogo: "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=200&h=100&fit=crop",
      partnership: "Development Assistance",
      duration: "5 Years",
      investment: "Policy Integration",
      impact: {
        communities: 120,
        beneficiaries: 45000,
        programs: 12,
        countries: 1
      },
      quote: `This partnership has revolutionized our approach to rural education. The innovative programs and sustainable methodologies have become a model for other African nations.`,
      spokesperson: "Dr. Kwame Asante",
      title: "Deputy Minister of Education",
      results: [
        "Built 25 community learning centers",
        "Trained 1,200 teachers in modern pedagogy",
        "Improved literacy rates by 35% in target areas",
        "Developed national curriculum integration framework"
      ],
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      testimonialImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      partnerName: "Health Alliance Network",
      partnerType: "NGO Partner",
      partnerLogo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop",
      partnership: "Program Integration",
      duration: "4 Years",
      investment: "Resource Sharing",
      impact: {
        communities: 80,
        beneficiaries: 28000,
        programs: 6,
        countries: 4
      },
      quote: `Our collaborative approach has amplified impact beyond what either organization could achieve alone. The shared resources and expertise have created sustainable health solutions.`,
      spokesperson: "Dr. Amina Hassan",
      title: "Executive Director",
      results: [
        "Established 18 mobile health clinics",
        "Trained 450 community health workers",
        "Reduced child mortality by 28% in target areas",
        "Created sustainable health financing models"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      testimonialImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop"
    }
  ];

  const currentStory = successStories?.[activeStory];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Trophy" size={16} />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Partnership Impact Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our strategic partnerships are creating measurable change and transforming communities across Africa.
          </p>
        </div>

        {/* Story Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
          {successStories?.map((story, index) => (
            <button
              key={story?.id}
              onClick={() => setActiveStory(index)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-lg border-2 transition-all duration-300 ${
                activeStory === index
                  ? 'border-primary bg-primary/10 text-primary shadow-warm'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground'
              }`}
            >
              <div className="w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image 
                  src={story?.partnerLogo} 
                  alt={`${story?.partnerName} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-medium text-sm">{story?.partnerName}</div>
                <div className="text-xs opacity-75">{story?.partnerType}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Story Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-warm-lg">
                <Image 
                  src={currentStory?.image} 
                  alt={`${currentStory?.partnerName} partnership impact`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Impact Stats Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-warm-lg border border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{currentStory?.impact?.communities}</div>
                    <div className="text-xs text-muted-foreground">Communities</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{currentStory?.impact?.beneficiaries?.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Beneficiaries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Details */}
            <div className="space-y-8">
              {/* Partner Info */}
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-10 rounded-lg overflow-hidden">
                    <Image 
                      src={currentStory?.partnerLogo} 
                      alt={`${currentStory?.partnerName} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      {currentStory?.partnerName}
                    </h3>
                    <p className="text-muted-foreground">{currentStory?.partnerType}</p>
                  </div>
                </div>

                {/* Partnership Details */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="font-bold text-foreground">{currentStory?.partnership}</div>
                    <div className="text-sm text-muted-foreground">Partnership Type</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="font-bold text-foreground">{currentStory?.duration}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="font-bold text-foreground">{currentStory?.investment}</div>
                    <div className="text-sm text-muted-foreground">Investment</div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="font-heading font-bold text-foreground mb-4">Key Results:</h4>
                <ul className="space-y-3">
                  {currentStory?.results?.map((result, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image 
                      src={currentStory?.testimonialImage} 
                      alt={currentStory?.spokesperson}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-muted-foreground italic mb-3">
                      "{currentStory?.quote}"
                    </blockquote>
                    <div>
                      <div className="font-medium text-foreground">{currentStory?.spokesperson}</div>
                      <div className="text-sm text-muted-foreground">{currentStory?.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;