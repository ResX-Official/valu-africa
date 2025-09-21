import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroStories = [
    {
      id: 1,
      title: "Empowering Young Entrepreneurs",
      location: "Lagos, Nigeria",
      description: "Meet Amara, who transformed her small tailoring business into a thriving fashion enterprise employing 15 women in her community.",
      impact: "150+ Jobs Created",
      backgroundImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      stats: {
        beneficiaries: "2,500",
        funding: "$45,000",
        timeline: "18 months"
      }
    },
    {
      id: 2,
      title: "Fostering Africa Unity",
      location: "Victoria Falls, Zambia",
      description: "Community-led conservation efforts have increased elephant populations by 40% while creating sustainable eco-tourism opportunities.",
      impact: "40% Wildlife Increase",
      backgroundImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      stats: {
        beneficiaries: "5,000",
        funding: "$120,000",
        timeline: "3 years"
      }
    },
    {
      id: 3,
      title: "Building Educational Futures",
      location: "Table Mountain, South Africa",
      description: "Solar-powered digital classrooms have brought quality education to 800 children in remote villages, with 95% literacy improvement.",
      impact: "95% Literacy Boost",
      backgroundImage: "https://images.unsplash.com/photo-1506905925346-14b1e0d0fb89?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      stats: {
        beneficiaries: "800",
        funding: "$75,000",
        timeline: "2 years"
      }
    },
    {
      id: 4,
      title: "Preserving Natural Heritage",
      location: "Serengeti National Park, Tanzania",
      description: "Wildlife conservation initiatives have protected endangered species while promoting sustainable tourism that benefits local communities.",
      impact: "25% Species Recovery",
      backgroundImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      stats: {
        beneficiaries: "3,200",
        funding: "$200,000",
        timeline: "4 years"
      }
    },
    {
      id: 5,
      title: "Sustainable Development",
      location: "Mount Kilimanjaro, Tanzania",
      description: "Climate resilience programs have helped communities adapt to changing weather patterns while preserving Africa's iconic landscapes.",
      impact: "60% Climate Adaptation",
      backgroundImage: "https://images.unsplash.com/photo-1506905925346-14b1e0d0fb89?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      stats: {
        beneficiaries: "1,800",
        funding: "$95,000",
        timeline: "2.5 years"
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroStories?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroStories?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroStories?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroStories?.length) % heroStories?.length);
  };

  // subtle mouse parallax on content container
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / innerWidth;
    const y = (e.clientY - innerHeight / 2) / innerHeight;
    setMouse({ x, y });
  };

  return (
    <div className="relative h-screen overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Background Images */}
      {heroStories?.map((story, index) => (
        <div
          key={story?.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${story?.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center" style={{ transform: `translate3d(${mouse.x * 10}px, ${mouse.y * 10}px, 0)` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {heroStories?.map((story, index) => (
              <div
                key={story?.id}
                className={`transition-all duration-1000 transform ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8 absolute'
                }`}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="MapPin" size={16} className="text-accent" />
                  <span className="text-accent font-medium text-sm uppercase tracking-wide">
                    {story?.location}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  {story?.title}
                </h1>

                <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-2xl leading-relaxed">
                  {story?.description}
                </p>

                <div className="flex items-center space-x-6 mb-8">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/30">
                    <span className="text-primary font-bold text-lg">
                      {story?.impact}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <span>{story?.stats?.beneficiaries} beneficiaries</span>
                    <span>•</span>
                    <span>{story?.stats?.funding} invested</span>
                    <span>•</span>
                    <span>{story?.stats?.timeline}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/donate">
                    <Button
                      variant="default"
                      className="btn-luxe px-8 py-3 text-lg"
                      iconName="Heart"
                      iconPosition="left"
                      iconSize={20}
                    >
                      Join the Movement
                    </Button>
                  </Link>
                  <Link to="/blog">
                    <Button
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
                      iconName="ArrowRight"
                      iconPosition="right"
                      iconSize={20}
                    >
                      Explore Our Impact
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-3">
          {heroStories?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-accent scale-125' :'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <Icon name="ChevronLeft" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <Icon name="ChevronRight" size={24} />
      </button>
    </div>
  );
};

export default HeroCarousel;