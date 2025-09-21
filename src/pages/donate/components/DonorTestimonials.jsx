import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const DonorTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "London, UK",
      donorSince: "2024",
      amount: "Monthly Donor",
      avatar: "/assets/images/1001535678.webp",
      quote: `Supporting Valentine Unimuke Foundation has been one of the most fulfilling decisions I've made. Seeing the quarterly impact reports and knowing exactly how my monthly contribution helps families access clean water gives me such joy. The transparency is incredible - I know every dollar is making a real difference.`,
      impact: "Helped provide clean water access to 12 families"
    },
    {
      id: 2,
      name: "Michael Unimuke",
      location: "Toronto, Canada",
      donorSince: "2024",
      amount: "Major Donor",
      avatar: "/assets/images/1001535678.webp",
      quote: `As someone who works in international development, I'm impressed by Valentine Unimuke Foundation's approach. They don't just provide aid - they build sustainable solutions. My corporate matching program doubled my impact, and I love receiving the exclusive webinar invitations that keep me connected to the work.`,
      impact: "Funded vocational training for 25 adults"
    },
    {
      id: 3,
      name: "Amara Okafor",
      location: "Lagos, Nigeria",
      donorSince: "2024",
      amount: "Community Champion",
      avatar: "/assets/images/1001535678.webp",
      quote: `Being part of the African diaspora, supporting Valentine Unimuke Foundation feels like supporting my extended family. The memorial donation I made in honor of my grandmother helped fund a women's cooperative in Ghana. The personalized thank you note from the beneficiaries brought tears to my eyes.`,
      impact: "Supported 8 women entrepreneurs through micro-loans"
    },
    {
      id: 4,
      name: "David Martinez",
      location: "Madrid, Spain",
      donorSince: "2024",
      amount: "Legacy Circle",
      avatar: "/assets/images/1001535678.webp",
      quote: `I started with small donations and gradually increased as I saw the impact. The mobile money integration made it easy to donate even while traveling. What keeps me committed is the authentic storytelling - these aren't just statistics, they're real people whose lives are being transformed.`,
      impact: "Contributed to infrastructure projects in 3 communities"
    },
    {
      id: 5,
      name: "Jennifer Williams",
      location: "Sydney, Australia",
      donorSince: "2024",
      amount: "Monthly Supporter",
      avatar: "/assets/images/1001535678.webp",
      quote: `The donor privacy controls impressed me from day one. I can choose exactly what communications I receive and how my information is used. The annual appreciation event was beautifully organized, and meeting other donors who share the same passion was inspiring.`,
      impact: "Provided educational supplies for 40 children"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <div className="bg-card rounded-xl p-6 shadow-warm border border-warm">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          What Our Donors Say
        </h3>
        <p className="text-muted-foreground">
          Hear from supporters who are making a difference across Africa
        </p>
      </div>
      <div className="relative">
        {/* Main Testimonial */}
        <div className="text-center">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-warm">
              <Image
                src={current?.avatar}
                alt={current?.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-foreground">
                {current?.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {current?.location} • Donor since {current?.donorSince}
              </p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mt-2">
                <Icon name="Heart" size={12} className="mr-1" />
                {current?.amount}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className="text-warning fill-current"
                  />
                ))}
              </div>
            </div>
            
            <blockquote className="text-foreground italic text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
              "{current?.quote}"
            </blockquote>
            
            <div className="bg-success/10 rounded-lg p-4 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-success">
                <Icon name="TrendingUp" size={16} />
                <span className="text-sm font-medium">Impact Achievement</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {current?.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          <div className="flex space-x-2">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial
                    ? 'bg-primary' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
      {/* Trust Indicators */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">3</div>
            <div className="text-xs text-muted-foreground">Active Donors</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-success">98%</div>
            <div className="text-xs text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-warning">$1000</div>
            <div className="text-xs text-muted-foreground">Raised in 2024</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">45</div>
            <div className="text-xs text-muted-foreground">Countries Reached</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorTestimonials;