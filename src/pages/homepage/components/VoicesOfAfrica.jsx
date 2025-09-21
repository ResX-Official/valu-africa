import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VoicesOfAfrica = () => {
  const [currentTestimonials, setCurrentTestimonials] = useState([]);

  const allTestimonials = [
    {
      id: 1,
      name: "Fatima Al-Rashid",
      location: "Cairo, Egypt",
      role: "Solar Energy Entrepreneur",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      quote: `The microloan program transformed my small solar panel business into a company that now powers 200 homes in my neighborhood. I've employed 8 women and we're expanding to three more districts.`,
      impact: "200 homes powered",
      program: "Clean Energy Initiative",
      year: "2023"
    },
    {
      id: 2,
      name: "Kwame Asante",
      location: "Accra, Ghana",
      role: "Education Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      quote: `Our digital literacy program has reached 1,500 children across 12 villages. Seeing kids who never touched a computer now coding their own games - that's the future of Africa right there.`,
      impact: "1,500 children trained",
      program: "Digital Education Hub",
      year: "2024"
    },
    {
      id: 3,
      name: "Amina Kone",
      location: "Bamako, Mali",
      role: "Agricultural Innovator",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      quote: `The drought-resistant seeds and modern farming techniques increased our harvest by 300%. My cooperative now feeds 50 families and sells surplus to neighboring regions.`,
      impact: "300% harvest increase",
      program: "Sustainable Agriculture",
      year: "2023"
    },
    {
      id: 4,
      name: "Joseph Mbeki",
      location: "Nairobi, Kenya",
      role: "Wildlife Conservationist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      quote: `Community-based conservation has brought back wildlife to our region. Elephant numbers doubled, and eco-tourism now provides income for 300 families while protecting our heritage.`,
      impact: "Wildlife population doubled",
      program: "Conservation Partnership",
      year: "2024"
    },
    {
      id: 5,
      name: "Zara Okafor",
      location: "Lagos, Nigeria",
      role: "Healthcare Worker",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
      quote: `Mobile health clinics have revolutionized healthcare in remote areas. We've vaccinated 5,000 children and reduced infant mortality by 40% in our coverage area.`,
      impact: "40% mortality reduction",
      program: "Mobile Health Initiative",
      year: "2024"
    },
    {
      id: 6,
      name: "Omar Hassan",
      location: "Khartoum, Sudan",
      role: "Water Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      quote: `Clean water wells have transformed 15 villages. Children no longer walk hours for water - they're in school. Women have time for income-generating activities. Everything changed.`,
      impact: "15 villages served",
      program: "Clean Water Access",
      year: "2023"
    }
  ];

  useEffect(() => {
    // Rotate testimonials weekly - show 3 at a time
    const rotateTestimonials = () => {
      const shuffled = [...allTestimonials]?.sort(() => 0.5 - Math.random());
      setCurrentTestimonials(shuffled?.slice(0, 3));
    };

    rotateTestimonials();
    
    // Rotate every 10 seconds for demo purposes (would be weekly in production)
    const interval = setInterval(rotateTestimonials, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 section-surface-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Quote" size={24} className="text-accent" />
            <span className="text-accent font-medium text-sm uppercase tracking-wide">
              Authentic Stories
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Voices of Africa
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people whose lives have been transformed through our programs. These voices represent the heart of our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentTestimonials?.map((testimonial, index) => (
            <div
              key={testimonial?.id}
              className="card-glass rounded-xl p-6 hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-2 group"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-card flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-lg">
                    {testimonial?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial?.role}
                  </p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Icon name="MapPin" size={12} className="text-accent" />
                    <span className="text-xs text-accent">
                      {testimonial?.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-4 relative">
                <Icon 
                  name="Quote" 
                  size={20} 
                  className="text-accent/30 absolute -top-2 -left-1" 
                />
                <p className="pl-6 italic">
                  {testimonial?.quote}
                </p>
              </blockquote>

              {/* Impact Metrics */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg">
                  <span className="text-sm font-medium text-foreground">
                    Impact Achieved
                  </span>
                  <span className="text-sm font-bold text-accent">
                    {testimonial?.impact}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{testimonial?.program}</span>
                  <span>{testimonial?.year}</span>
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Rotation Indicator */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Fresh stories rotate weekly
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Want to share your story or read more testimonials?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Icon name="BookOpen" size={16} />
              <span>Read More Stories</span>
            </a>
            <a
              href="/get-involved"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Icon name="PlusCircle" size={16} />
              <span>Share Your Story</span>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default VoicesOfAfrica;