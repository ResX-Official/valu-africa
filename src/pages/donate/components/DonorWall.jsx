import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const DonorWall = () => {
  const [filter, setFilter] = useState('all');
  const [showMore, setShowMore] = useState(false);

  const donors = [
    {
      id: 1,
      name: "Dr. Sarah & Michael Unimuke",
      location: "Lagos, Nigeria",
      level: "Legacy Circle",
      amount: "$25,000",
      joinDate: "2019",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      message: "Proud to support Africa\'s bright future",
      isAnonymous: false,
      category: "legacy"
    },
    {
      id: 2,
      name: "Anonymous Donor",
      location: "Accra, Ghana",
      level: "Visionary Partner",
      amount: "$15,000",
      joinDate: "2020",
      avatar: null,
      message: "Education transforms communities",
      isAnonymous: true,
      category: "visionary"
    },
    {
      id: 3,
      name: "Dr. Amara Okafor",
      location: "Lagos, Nigeria",
      level: "Heritage Guardian",
      amount: "$5,000",
      joinDate: "2021",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
      message: "Investing in our continent\'s potential",
      isAnonymous: false,
      category: "guardian"
    },
    {
      id: 4,
      name: "Okafor Family Foundation",
      location: "Abuja, Nigeria",
      level: "Legacy Circle",
      amount: "$50,000",
      joinDate: "2018",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      message: "Building bridges across continents",
      isAnonymous: false,
      category: "legacy"
    },
    {
      id: 5,
      name: "Maria Okafor",
      location: "Cairo, Egypt",
      level: "Africa Champion",
      amount: "$2,500",
      joinDate: "2022",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      message: "Every child deserves quality education",
      isAnonymous: false,
      category: "champion"
    },
    {
      id: 6,
      name: "Anonymous Supporter",
      location: "Nairobi, Kenya",
      level: "Heritage Guardian",
      amount: "$7,500",
      joinDate: "2021",
      avatar: null,
      message: "Clean water is a human right",
      isAnonymous: true,
      category: "guardian"
    },
    {
      id: 7,
      name: "James Wilson",
      location: "Cape Town, South Africa",
      level: "Visionary Partner",
      amount: "$12,000",
      joinDate: "2020",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      message: "Empowering women entrepreneurs",
      isAnonymous: false,
      category: "visionary"
    },
    {
      id: 8,
      name: "Lisa Thompson",
      location: "Vancouver, Canada",
      level: "Community Supporter",
      amount: "$500",
      joinDate: "2023",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      message: "Small actions, big impact",
      isAnonymous: false,
      category: "supporter"
    },
    {
      id: 9,
      name: "Anonymous Donor",
      location: "Berlin, Germany",
      level: "Africa Champion",
      amount: "$3,200",
      joinDate: "2022",
      avatar: null,
      message: "Healthcare for all African communities",
      isAnonymous: true,
      category: "champion"
    },
    {
      id: 10,
      name: "Kwame Asante",
      location: "Accra, Ghana",
      level: "Heritage Guardian",
      amount: "$8,000",
      joinDate: "2021",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      message: "Proud of our African heritage",
      isAnonymous: false,
      category: "guardian"
    }
  ];

  const levelColors = {
    legacy: { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/20' },
    visionary: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' },
    guardian: { bg: 'bg-warning/10', text: 'text-warning', border: 'border-warning/20' },
    champion: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' },
    supporter: { bg: 'bg-success/10', text: 'text-success', border: 'border-success/20' }
  };

  const filterOptions = [
    { value: 'all', label: 'All Donors', count: donors?.length },
    { value: 'legacy', label: 'Legacy Circle', count: donors?.filter(d => d?.category === 'legacy')?.length },
    { value: 'visionary', label: 'Visionary Partners', count: donors?.filter(d => d?.category === 'visionary')?.length },
    { value: 'guardian', label: 'Heritage Guardians', count: donors?.filter(d => d?.category === 'guardian')?.length },
    { value: 'champion', label: 'Africa Champions', count: donors?.filter(d => d?.category === 'champion')?.length }
  ];

  const filteredDonors = filter === 'all' 
    ? donors 
    : donors?.filter(donor => donor?.category === filter);

  const displayedDonors = showMore ? filteredDonors : filteredDonors?.slice(0, 6);

  const totalRaised = donors?.reduce((sum, donor) => {
    return sum + parseFloat(donor?.amount?.replace(/[$,]/g, ''));
  }, 0);

  return (
    <div className="bg-card rounded-xl p-6 shadow-warm border border-warm">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          Our Donor Community
        </h3>
        <p className="text-muted-foreground mb-4">
          Celebrating the generous supporters who make our work possible
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">
              ${(totalRaised / 1000)?.toFixed(0)}K+
            </div>
            <div className="text-xs text-muted-foreground">Total Raised</div>
          </div>
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-success">
              {donors?.length}
            </div>
            <div className="text-xs text-muted-foreground">Active Donors</div>
          </div>
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-warning">
              {new Set(donors.map(d => d.location.split(', ')[1]))?.size}
            </div>
            <div className="text-xs text-muted-foreground">Countries</div>
          </div>
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-accent">
              {new Date()?.getFullYear() - 2018}
            </div>
            <div className="text-xs text-muted-foreground">Years Active</div>
          </div>
        </div>
      </div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filterOptions?.map((option) => (
          <button
            key={option?.value}
            onClick={() => setFilter(option?.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === option?.value
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {option?.label}
            <span className="ml-2 text-xs opacity-75">
              ({option?.count})
            </span>
          </button>
        ))}
      </div>
      {/* Donor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {displayedDonors?.map((donor) => {
          const colors = levelColors?.[donor?.category];
          
          return (
            <div
              key={donor?.id}
              className={`border-2 ${colors?.border} ${colors?.bg} rounded-xl p-6 hover:shadow-warm transition-all duration-200`}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex items-center justify-center flex-shrink-0">
                  {donor?.isAnonymous ? (
                    <Icon name="User" size={20} className="text-muted-foreground" />
                  ) : donor?.avatar ? (
                    <Image
                      src={donor?.avatar}
                      alt={donor?.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">
                        {donor?.name?.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground truncate">
                    {donor?.name}
                  </h4>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-1">
                    <Icon name="MapPin" size={12} />
                    <span className="truncate">{donor?.location}</span>
                  </div>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colors?.bg} ${colors?.text}`}>
                    {donor?.level}
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="text-lg font-bold text-foreground">
                  {donor?.amount}
                </div>
                <div className="text-xs text-muted-foreground">
                  Donor since {donor?.joinDate}
                </div>
              </div>
              <blockquote className="text-sm text-muted-foreground italic">
                "{donor?.message}"
              </blockquote>
            </div>
          );
        })}
      </div>
      {/* Show More/Less Button */}
      {filteredDonors?.length > 6 && (
        <div className="text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
          >
            {showMore ? 'Show Less' : `Show ${filteredDonors?.length - 6} More Donors`}
          </button>
        </div>
      )}
      {/* Recognition Note */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="bg-muted/30 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} className="text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="font-medium text-foreground mb-1">
                Donor Recognition Policy
              </h5>
              <p className="text-sm text-muted-foreground">
                We respect donor privacy preferences. Names are displayed only with explicit permission. 
                Anonymous donors are recognized for their generosity while maintaining their privacy. 
                All donors can update their recognition preferences at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorWall;