import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const AdvocacyCenter = () => {
  const [activeTab, setActiveTab] = useState('social-media');

  const tabs = [
    { id: 'social-media', label: 'Social Media', icon: 'Share2' },
    { id: 'petitions', label: 'Petitions', icon: 'FileText' },
    { id: 'events', label: 'Events', icon: 'Calendar' },
    { id: 'resources', label: 'Resources', icon: 'Download' }
  ];

  const socialMediaCampaigns = [
    {
      id: 1,
      title: "#AfricaRisingEducation",
      description: "Raise awareness about education inequality across Africa",
      hashtags: ["#AfricaRisingEducation", "#EducationForAll", "#AfricanYouth"],
      platforms: ["Twitter", "Instagram", "LinkedIn", "Facebook"],
      samplePosts: [
        "Did you know that 1 in 5 children in sub-Saharan Africa are out of school? Let\'s change this together. #AfricaRisingEducation #EducationForAll",
        "Education is the most powerful weapon to change the world. Help us empower African youth with quality education. #AfricaRisingEducation",
        "Every child deserves the right to learn. Join our mission to build schools and train teachers across Africa. #AfricaRisingEducation"
      ],
      graphics: [
        "Education statistics infographic",
        "Student success stories",
        "School construction progress photos"
      ],
      engagement: "2.3K shares this week"
    },
    {
      id: 2,
      title: "#CleanWaterAfrica",
      description: "Advocate for clean water access in rural African communities",
      hashtags: ["#CleanWaterAfrica", "#WaterIsLife", "#AfricaRising"],
      platforms: ["Twitter", "Instagram", "TikTok"],
      samplePosts: [
        "Clean water shouldn't be a luxury. Help us bring safe drinking water to every African community. #CleanWaterAfrica #WaterIsLife",
        "A simple well can transform an entire village. See how your support creates lasting change. #CleanWaterAfrica",
        "Women and children walk miles for water. Let\'s bring water closer to home. #CleanWaterAfrica #AfricaRising"
      ],
      graphics: [
        "Water access statistics",
        "Before/after community photos",
        "Well construction videos"
      ],
      engagement: "1.8K shares this week"
    },
    {
      id: 3,
      title: "#AfricanWomenLeaders",
      description: "Celebrate and support women entrepreneurs across Africa",
      hashtags: ["#AfricanWomenLeaders", "#WomenEmpowerment", "#AfricaRising"],
      platforms: ["Instagram", "LinkedIn", "Twitter"],
      samplePosts: [
        "Meet the incredible women building businesses and changing communities across Africa. #AfricanWomenLeaders",
        "When we invest in women, we invest in entire communities. Support African women entrepreneurs. #WomenEmpowerment",
        "From market stalls to tech startups, African women are leading the way. #AfricanWomenLeaders #AfricaRising"
      ],
      graphics: [
        "Women entrepreneur spotlights",
        "Business success metrics",
        "Community impact photos"
      ],
      engagement: "3.1K shares this week"
    }
  ];

  const petitions = [
    {
      id: 1,
      title: "Increase International Aid for African Education",
      description: "Urge world leaders to commit more resources to education infrastructure in Africa",
      target: "United Nations, World Bank, G7 Leaders",
      signatures: 45672,
      goal: 50000,
      urgency: "high",
      impact: "Could secure $2B in additional education funding",
      timeLeft: "12 days remaining"
    },
    {
      id: 2,
      title: "Support Renewable Energy Projects in Rural Africa",
      description: "Advocate for increased investment in solar and wind energy across African communities",
      target: "International Energy Agency, African Development Bank",
      signatures: 23891,
      goal: 30000,
      urgency: "medium",
      impact: "Could power 500,000 homes with clean energy",
      timeLeft: "28 days remaining"
    },
    {
      id: 3,
      title: "End Child Labor in African Mining Operations",
      description: "Demand stronger regulations and enforcement to protect children from dangerous mining work",
      target: "Mining Companies, African Union, International Labour Organization",
      signatures: 67234,
      goal: 75000,
      urgency: "high",
      impact: "Could protect 100,000+ children from exploitation",
      timeLeft: "5 days remaining"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Virtual Africa Day Celebration",
      date: "May 25, 2024",
      time: "2:00 PM - 6:00 PM EST",
      type: "Virtual Event",
      description: "Join us for a day of cultural celebration, impact stories, and fundraising activities",
      activities: ["Cultural performances", "Impact presentations", "Virtual auction", "Networking sessions"],
      expectedAttendees: "500+ participants",
      fundraisingGoal: "$25,000"
    },
    {
      id: 2,
      title: "Local Community Fundraising Walk",
      date: "June 15, 2024",
      time: "9:00 AM - 12:00 PM",
      type: "In-Person Event",
      description: "Organize a sponsored walk in your community to raise funds for clean water projects",
      activities: ["5K sponsored walk", "Information booths", "Local media coverage", "Community awards"],
      expectedAttendees: "200+ participants per location",
      fundraisingGoal: "$10,000 per event"
    },
    {
      id: 3,
      title: "Corporate Partnership Breakfast",
      date: "July 10, 2024",
      time: "8:00 AM - 10:00 AM",
      type: "Corporate Event",
      description: "Network with business leaders and explore partnership opportunities",
      activities: ["Keynote presentations", "Partnership showcases", "Networking breakfast", "Commitment ceremonies"],
      expectedAttendees: "100+ business leaders",
      fundraisingGoal: "$100,000 in commitments"
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Social Media Toolkit",
      description: "Complete guide with graphics, captions, and best practices for social media advocacy",
      type: "PDF Guide",
      size: "15 MB",
      includes: ["50+ ready-to-use graphics", "100+ sample captions", "Platform-specific strategies", "Hashtag research"],
      downloads: "2,341 downloads"
    },
    {
      id: 2,
      title: "Event Planning Guide",
      description: "Step-by-step guide for organizing successful fundraising events in your community",
      type: "PDF Guide",
      size: "8 MB",
      includes: ["Event timeline templates", "Budget planning sheets", "Marketing materials", "Legal considerations"],
      downloads: "1,876 downloads"
    },
    {
      id: 3,
      title: "Advocacy Presentation Template",
      description: "Professional PowerPoint template for presenting Valu Africa's mission and impact",
      type: "PowerPoint",
      size: "25 MB",
      includes: ["30+ slide templates", "Impact statistics", "Photo library", "Speaker notes"],
      downloads: "987 downloads"
    },
    {
      id: 4,
      title: "Corporate Partnership Proposal",
      description: "Template for approaching businesses about partnership opportunities",
      type: "Word Document",
      size: "2 MB",
      includes: ["Proposal template", "Partnership tiers", "ROI calculations", "Case studies"],
      downloads: "654 downloads"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'social-media':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold mb-2">Social Media Campaigns</h4>
              <p className="text-muted-foreground">
                Join our active campaigns and help spread awareness across social platforms
              </p>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {socialMediaCampaigns?.map((campaign) => (
                <div key={campaign?.id} className="bg-card rounded-xl shadow-warm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h5 className="font-semibold text-lg">{campaign?.title}</h5>
                    <div className="flex items-center space-x-1 text-xs text-success">
                      <Icon name="TrendingUp" size={14} />
                      <span>{campaign?.engagement}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {campaign?.description}
                  </p>

                  <div className="mb-4">
                    <h6 className="font-medium text-sm mb-2">Hashtags:</h6>
                    <div className="flex flex-wrap gap-1">
                      {campaign?.hashtags?.map((hashtag, index) => (
                        <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
                          {hashtag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="font-medium text-sm mb-2">Platforms:</h6>
                    <div className="flex space-x-2">
                      {campaign?.platforms?.map((platform, index) => (
                        <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant="default"
                      fullWidth
                      iconName="Share2"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Get Campaign Kit
                    </Button>
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="Eye"
                      iconPosition="left"
                      iconSize={16}
                    >
                      View Sample Posts
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'petitions':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold mb-2">Active Petitions</h4>
              <p className="text-muted-foreground">
                Add your voice to important causes and help drive policy change
              </p>
            </div>
            <div className="space-y-6">
              {petitions?.map((petition) => (
                <div key={petition?.id} className="bg-card rounded-xl shadow-warm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h5 className="font-semibold text-lg">{petition?.title}</h5>
                        {petition?.urgency === 'high' && (
                          <span className="bg-error text-error-foreground px-2 py-1 rounded-full text-xs font-medium">
                            Urgent
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">
                        {petition?.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Target: {petition?.target}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">
                        {petition?.signatures?.toLocaleString()} signatures
                      </span>
                      <span className="text-muted-foreground">
                        Goal: {petition?.goal?.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-success h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(petition?.signatures / petition?.goal) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Target" size={16} className="text-primary" />
                      <span>{petition?.impact}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} className="text-warning" />
                      <span>{petition?.timeLeft}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="default"
                      fullWidth
                      className="hover-lift"
                      iconName="PenTool"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Sign Petition
                    </Button>
                    <Button
                      variant="outline"
                      iconName="Share2"
                      iconSize={16}
                    >
                      Share
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold mb-2">Fundraising Events</h4>
              <p className="text-muted-foreground">
                Organize or join events in your community to support our mission
              </p>
            </div>
            <div className="space-y-6">
              {events?.map((event) => (
                <div key={event?.id} className="bg-card rounded-xl shadow-warm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h5 className="font-semibold text-lg mb-2">{event?.title}</h5>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Icon name="Calendar" size={14} />
                          <span>{event?.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={14} />
                          <span>{event?.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="MapPin" size={14} />
                          <span>{event?.type}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {event?.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h6 className="font-medium text-sm mb-2">Activities:</h6>
                      <ul className="space-y-1">
                        {event?.activities?.map((activity, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <Icon name="Check" size={12} className="text-success mt-1 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <Icon name="Users" size={16} className="text-primary" />
                        <span>{event?.expectedAttendees}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Icon name="Target" size={16} className="text-success" />
                        <span>Goal: {event?.fundraisingGoal}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="default"
                      fullWidth
                      className="hover-lift"
                      iconName="Calendar"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Organize Event
                    </Button>
                    <Button
                      variant="outline"
                      iconName="Download"
                      iconSize={16}
                    >
                      Get Kit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'resources':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold mb-2">Advocacy Resources</h4>
              <p className="text-muted-foreground">
                Download ready-to-use materials to support your advocacy efforts
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {resources?.map((resource) => (
                <div key={resource?.id} className="bg-card rounded-xl shadow-warm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h5 className="font-semibold text-lg mb-2">{resource?.title}</h5>
                      <p className="text-muted-foreground text-sm mb-2">
                        {resource?.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>{resource?.type}</span>
                        <span>{resource?.size}</span>
                        <span>{resource?.downloads}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="font-medium text-sm mb-2">Includes:</h6>
                    <ul className="space-y-1">
                      {resource?.includes?.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-xs text-muted-foreground">
                          <Icon name="Check" size={10} className="text-success mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="default"
                      fullWidth
                      className="hover-lift"
                      iconName="Download"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      iconName="Eye"
                      iconSize={16}
                    >
                      Preview
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
          Advocacy Center
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Amplify your voice for Africa with our comprehensive advocacy toolkit. From social media campaigns to petition drives, we provide everything you need to create meaningful change.
        </p>
      </div>
      {/* Tabs */}
      <div className="bg-card rounded-xl shadow-warm p-2">
        <div className="flex flex-wrap gap-1">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="min-h-[600px]">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdvocacyCenter;