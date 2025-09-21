import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecentImpactUpdates = () => {
  const [activeTab, setActiveTab] = useState('recent');

  const recentUpdates = [
    {
      id: 1,
      title: "Clean Water Project Completed in Ghana",
      location: "Tamale, Northern Ghana",
      date: "2024-08-14",
      amount: "$15,000",
      beneficiaries: 450,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      description: "Thanks to 127 donors, we've successfully installed 3 solar-powered water pumps serving 450 community members. Families now have access to clean water within 10 minutes of their homes.",
      impact: "Water-related illnesses reduced by 78% in the first month",
      category: "Water & Sanitation",
      icon: "Droplets",
      color: "text-blue-600"
    },
    {
      id: 2,
      title: "Women\'s Cooperative Micro-loans Distributed",
      location: "Kigali, Rwanda",
      date: "2024-08-12",
      amount: "$8,500",
      beneficiaries: 25,
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=250&fit=crop",
      description: "25 women entrepreneurs received micro-loans averaging $340 each to start or expand their businesses. The cooperative focuses on sustainable agriculture and textile production.",
      impact: "Average income increase of 65% within 6 months",
      category: "Economic Empowerment",
      icon: "TrendingUp",
      color: "text-green-600"
    },
    {
      id: 3,
      title: "Mobile Health Clinic Reaches Remote Villages",
      location: "Maasai Mara, Kenya",
      date: "2024-08-10",
      amount: "$12,300",
      beneficiaries: 320,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      description: "Our mobile health clinic completed a 2-week circuit, providing medical care, vaccinations, and health education to 320 people across 8 remote villages.",
      impact: "100% vaccination coverage achieved in target communities",
      category: "Healthcare",
      icon: "Heart",
      color: "text-red-600"
    },
    {
      id: 4,
      title: "Solar Panel Installation in School",
      location: "Lagos, Nigeria",
      date: "2024-08-08",
      amount: "$6,800",
      beneficiaries: 180,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop",
      description: "Solar panels installed at Bright Future Primary School now provide reliable electricity for 180 students. The system powers computers, lighting, and water pumps.",
      impact: "Study hours extended by 3 hours daily, computer literacy program launched",
      category: "Education",
      icon: "BookOpen",
      color: "text-yellow-600"
    }
  ];

  const deploymentStats = [
    {
      title: "Funds Deployed This Month",
      amount: "$127,400",
      percentage: 94,
      icon: "DollarSign",
      color: "text-success"
    },
    {
      title: "Active Projects",
      amount: "23",
      percentage: 100,
      icon: "Target",
      color: "text-primary"
    },
    {
      title: "Communities Reached",
      amount: "15",
      percentage: 88,
      icon: "MapPin",
      color: "text-accent"
    },
    {
      title: "Lives Impacted",
      amount: "2,847",
      percentage: 112,
      icon: "Users",
      color: "text-warning"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    return formatDate(dateString);
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-warm border border-warm">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          Real-Time Impact Updates
        </h3>
        <p className="text-muted-foreground">
          See how recent donations are creating immediate change across Africa
        </p>
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-muted/50 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('recent')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'recent' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
          }`}
        >
          Recent Projects
        </button>
        <button
          onClick={() => setActiveTab('deployment')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'deployment' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
          }`}
        >
          Fund Deployment
        </button>
      </div>
      {/* Recent Projects Tab */}
      {activeTab === 'recent' && (
        <div className="space-y-6">
          {recentUpdates?.map((update) => (
            <div key={update?.id} className="border border-border rounded-lg overflow-hidden hover:shadow-warm transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-48 md:h-full overflow-hidden">
                    <Image
                      src={update?.image}
                      alt={update?.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`${update?.color} bg-muted/50 p-2 rounded-lg`}>
                        <Icon name={update?.icon} size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {update?.category}
                        </span>
                        <div className="text-xs text-muted-foreground">
                          {formatTimeAgo(update?.date)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        {update?.amount}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {update?.beneficiaries} people helped
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {update?.title}
                  </h4>
                  
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-3">
                    <Icon name="MapPin" size={14} />
                    <span>{update?.location}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {update?.description}
                  </p>
                  
                  <div className="bg-success/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name="TrendingUp" size={14} className="text-success" />
                      <span className="text-xs font-medium text-success uppercase tracking-wide">
                        Measured Impact
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {update?.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center pt-4">
            <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium">
              View All Impact Stories
            </button>
          </div>
        </div>
      )}
      {/* Fund Deployment Tab */}
      {activeTab === 'deployment' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deploymentStats?.map((stat, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat?.color} bg-background p-3 rounded-lg shadow-sm`}>
                    <Icon name={stat?.icon} size={24} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">
                      {stat?.amount}
                    </div>
                    <div className={`text-sm font-medium ${
                      stat?.percentage >= 100 ? 'text-success' : 'text-warning'
                    }`}>
                      {stat?.percentage}% of target
                    </div>
                  </div>
                </div>
                
                <h4 className="font-medium text-foreground mb-2">
                  {stat?.title}
                </h4>
                
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      stat?.percentage >= 100 ? 'bg-success' : 'bg-warning'
                    }`}
                    style={{ width: `${Math.min(stat?.percentage, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Recent Deployments */}
          <div className="bg-muted/30 rounded-lg p-6">
            <h4 className="font-semibold text-foreground mb-4">
              Recent Fund Deployments
            </h4>
            
            <div className="space-y-3">
              {[
                { project: "Ghana Water Project", amount: "$15,000", date: "Aug 14", status: "Completed" },
                { project: "Rwanda Women's Cooperative", amount: "$8,500", date: "Aug 12", status: "Active" },
                { project: "Kenya Mobile Health Clinic", amount: "$12,300", date: "Aug 10", status: "Active" },
                { project: "Nigeria School Solar Panels", amount: "$6,800", date: "Aug 8", status: "Completed" }
              ]?.map((deployment, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
                  <div>
                    <div className="font-medium text-foreground">
                      {deployment?.project}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Deployed on {deployment?.date}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-semibold text-foreground">
                      {deployment?.amount}
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      deployment?.status === 'Completed'
                        ? 'bg-success/10 text-success' :'bg-warning/10 text-warning'
                    }`}>
                      {deployment?.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentImpactUpdates;