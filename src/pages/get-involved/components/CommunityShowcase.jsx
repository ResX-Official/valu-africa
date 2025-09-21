import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showShareForm, setShowShareForm] = useState(false);

  const filterOptions = [
    { value: 'all', label: 'All Stories' },
    { value: 'fundraising', label: 'Fundraising' },
    { value: 'volunteering', label: 'Volunteering' },
    { value: 'advocacy', label: 'Advocacy' },
    { value: 'events', label: 'Events' }
  ];

  const communityStories = [
    {
      id: 1,
      type: 'fundraising',
      title: "Sarah\'s Birthday Fundraiser",
      author: "Sarah Johnson",
      location: "Toronto, Canada",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  description: "Instead of gifts for my 30th birthday, I asked friends and family to donate to Valu Africa. We raised $2,500 to build a well in rural Kenya!",
      impact: "$2,500 raised • 50 families with clean water access",
      likes: 127,
      shares: 34,
      comments: 18,
      featured: true
    },
    {
      id: 2,
      type: 'volunteering',
      title: "Teaching English in Ghana",
      author: "Michael Chen",
      location: "Accra, Ghana",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description: "Spent 3 months volunteering as an English teacher in Accra. The students\' enthusiasm and determination inspired me every day. This experience changed my perspective on education and community.",
      impact: "120 students taught • 95% improvement in English proficiency",
      likes: 89,
      shares: 22,
      comments: 31,
      featured: false
    },
    {
      id: 3,
      type: 'advocacy',
      title: "Corporate Partnership Success",
      author: "Lisa Rodriguez",
      location: "New York, USA",
      date: "2024-01-08",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  description: "Convinced my company to become a Gold Partner with Valentine Unimuke Foundation! Our employee engagement program has been incredible, and we're funding education initiatives across 5 countries.",
      impact: "$75,000 partnership • 500 employees engaged",
      likes: 156,
      shares: 67,
      comments: 24,
      featured: true
    },
    {
      id: 4,
      type: 'events',
      title: "Community 5K Run for Water",
      author: "David Thompson",
      location: "London, UK",
      date: "2024-01-05",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      description: "Organized a 5K run in Hyde Park to raise funds for clean water projects. Amazing turnout with 200+ participants and local media coverage!",
      impact: "$8,500 raised • 3 wells funded",
      likes: 203,
      shares: 45,
      comments: 52,
      featured: false
    },
    {
      id: 5,
      type: 'advocacy',
      title: "Social Media Campaign Impact",
      author: "Amara Okafor",
      location: "Lagos, Nigeria",
      date: "2024-01-03",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      description: "My #AfricaRisingEducation posts went viral! Reached over 100K people and generated 500+ new monthly donors. The power of storytelling is incredible.",
      impact: "100K+ reach • 500 new donors",
      likes: 312,
      shares: 89,
      comments: 67,
      featured: true
    },
    {
      id: 6,
      type: 'fundraising',
      title: "Wedding Favor Donations",
      author: "James & Emma Wilson",
      location: "Sydney, Australia",
      date: "2024-01-01",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
  description: "Instead of traditional wedding favors, we made donations to Valu Africa on behalf of our guests. Our wedding became a celebration of love and giving!",
      impact: "$3,200 raised • 64 children sponsored for school meals",
      likes: 178,
      shares: 56,
      comments: 43,
      featured: false
    }
  ];

  const peerToPeerStats = [
    {
      title: "Community Fundraisers",
      value: "1,247",
      change: "+23%",
      icon: "DollarSign",
      description: "Active peer-to-peer campaigns"
    },
    {
      title: "Total Raised",
      value: "$847K",
      change: "+45%",
      icon: "TrendingUp",
      description: "Through community efforts"
    },
    {
      title: "Global Supporters",
      value: "12,500",
      change: "+18%",
      icon: "Users",
      description: "Active community members"
    },
    {
      title: "Countries Reached",
      value: "67",
      change: "+12%",
      icon: "Globe",
      description: "With community support"
    }
  ];

  const filteredStories = communityStories?.filter(story => {
    const matchesFilter = activeFilter === 'all' || story?.type === activeFilter;
    const matchesSearch = !searchTerm || 
      story?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      story?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      story?.author?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const featuredStories = filteredStories?.filter(story => story?.featured);
  const regularStories = filteredStories?.filter(story => !story?.featured);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
          Community Showcase
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Be inspired by our global community of changemakers. See how supporters worldwide are creating impact and share your own story of making a difference.
        </p>
        
        <Button
          variant="default"
          onClick={() => setShowShareForm(true)}
          className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift"
          iconName="Plus"
          iconPosition="left"
          iconSize={16}
        >
          Share Your Story
        </Button>
      </div>
      {/* Community Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {peerToPeerStats?.map((stat, index) => (
          <div key={index} className="bg-card rounded-xl shadow-warm p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary to-warning rounded-full flex items-center justify-center">
              <Icon name={stat?.icon} size={20} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">{stat?.value}</div>
            <div className="flex items-center justify-center space-x-1 mb-2">
              <Icon name="TrendingUp" size={14} className="text-success" />
              <span className="text-sm text-success font-medium">{stat?.change}</span>
            </div>
            <div className="text-sm text-muted-foreground">{stat?.description}</div>
          </div>
        ))}
      </div>
      {/* Filters and Search */}
      <div className="bg-card rounded-xl shadow-warm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            {filterOptions?.map((option) => (
              <button
                key={option?.value}
                onClick={() => setActiveFilter(option?.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === option?.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
                }`}
              >
                {option?.label}
              </button>
            ))}
          </div>
          
          <div className="w-full md:w-64">
            <Input
              type="search"
              placeholder="Search stories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-warm">
          <span className="text-sm text-muted-foreground">
            {filteredStories?.length} stories found
          </span>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Heart" size={16} className="text-accent" />
            <span>Most liked stories shown first</span>
          </div>
        </div>
      </div>
      {/* Featured Stories */}
      {featuredStories?.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Icon name="Star" size={20} className="text-warning" />
            <h4 className="text-lg font-semibold">Featured Stories</h4>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {featuredStories?.map((story) => (
              <div key={story?.id} className="bg-card rounded-xl shadow-warm hover:shadow-warm-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <Image
                    src={story?.image}
                    alt={story?.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-warning text-warning-foreground px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs capitalize">
                      {story?.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <Image
                      src={story?.avatar}
                      alt={story?.author}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold mb-1">{story?.title}</h5>
                      <div className="text-sm text-muted-foreground">
                        {story?.author} • {story?.location}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(story.date)?.toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {story?.description}
                  </p>
                  
                  <div className="bg-accent/10 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Target" size={16} className="text-accent" />
                      <span className="font-medium text-accent">Impact:</span>
                      <span className="text-foreground">{story?.impact}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={16} className="text-accent" />
                        <span>{story?.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Share2" size={16} />
                        <span>{story?.shares}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={16} />
                        <span>{story?.comments}</span>
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      iconName="ExternalLink"
                      iconSize={16}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Regular Stories */}
      {regularStories?.length > 0 && (
        <div className="space-y-6">
          {featuredStories?.length > 0 && (
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} className="text-primary" />
              <h4 className="text-lg font-semibold">Community Stories</h4>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularStories?.map((story) => (
              <div key={story?.id} className="bg-card rounded-xl shadow-warm hover:shadow-warm-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <Image
                    src={story?.image}
                    alt={story?.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs capitalize">
                      {story?.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start space-x-3 mb-3">
                    <Image
                      src={story?.avatar}
                      alt={story?.author}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-sm mb-1">{story?.title}</h5>
                      <div className="text-xs text-muted-foreground">
                        {story?.author} • {story?.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                    {story?.description}
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-2 mb-3">
                    <div className="text-xs text-foreground">
                      <Icon name="Target" size={12} className="inline mr-1 text-accent" />
                      {story?.impact}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={12} className="text-accent" />
                        <span>{story?.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Share2" size={12} />
                        <span>{story?.shares}</span>
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      iconName="ExternalLink"
                      iconSize={12}
                      className="text-xs p-1"
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {filteredStories?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
          <h4 className="font-semibold mb-2">No stories found</h4>
          <p className="text-muted-foreground mb-4">
            Try adjusting your filters or search terms to find more stories.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setActiveFilter('all');
              setSearchTerm('');
            }}
            iconName="RefreshCw"
            iconPosition="left"
          >
            Clear Filters
          </Button>
        </div>
      )}
      {/* Call to Action */}
      <div className="bg-gradient-to-br from-primary/10 to-warning/10 rounded-xl p-8 text-center">
        <h4 className="text-xl font-semibold mb-4">Share Your Impact Story</h4>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Inspire others by sharing how you've supported Valu Africa. Your story could motivate the next wave of changemakers to take action.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            onClick={() => setShowShareForm(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift"
            iconName="PenTool"
            iconPosition="left"
            iconSize={16}
          >
            Share Your Story
          </Button>
          <Button
            variant="outline"
            iconName="Camera"
            iconPosition="left"
            iconSize={16}
          >
            Upload Photos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityShowcase;