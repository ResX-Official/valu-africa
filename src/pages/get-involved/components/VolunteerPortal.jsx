import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VolunteerPortal = () => {
  const [filters, setFilters] = useState({
    skillSet: '',
    timeCommitment: '',
    location: '',
    search: ''
  });

  const skillOptions = [
    { value: '', label: 'All Skills' },
    { value: 'marketing', label: 'Marketing & Communications' },
    { value: 'tech', label: 'Technology & Development' },
    { value: 'education', label: 'Education & Training' },
    { value: 'healthcare', label: 'Healthcare & Medical' },
    { value: 'finance', label: 'Finance & Administration' },
    { value: 'translation', label: 'Translation & Languages' }
  ];

  const timeOptions = [
    { value: '', label: 'Any Time Commitment' },
    { value: 'flexible', label: 'Flexible (1-5 hours/week)' },
    { value: 'part-time', label: 'Part-time (10-20 hours/week)' },
    { value: 'full-time', label: 'Full-time (40+ hours/week)' },
    { value: 'project', label: 'Project-based' }
  ];

  const locationOptions = [
    { value: '', label: 'All Locations' },
    { value: 'remote', label: 'Remote/Virtual' },
    { value: 'kenya', label: 'Kenya' },
    { value: 'nigeria', label: 'Nigeria' },
    { value: 'south-africa', label: 'South Africa' },
    { value: 'ghana', label: 'Ghana' },
    { value: 'ethiopia', label: 'Ethiopia' }
  ];

  const opportunities = [
    {
      id: 1,
      title: "Social Media Content Creator",
      category: "Marketing & Communications",
      location: "Remote",
      timeCommitment: "5-10 hours/week",
      skills: ["Content Creation", "Social Media", "Graphic Design"],
      description: "Create engaging content for our social media platforms to raise awareness about African development initiatives. Help us tell compelling stories that inspire action.",
      requirements: ["Experience with social media platforms", "Basic graphic design skills", "Passion for storytelling"],
      testimonial: {
        name: "Sarah Johnson",
        role: "Current Volunteer",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  quote: "Creating content for Valu Africa has been incredibly fulfilling. I've learned so much about African culture while making a real impact."
      },
      urgent: false
    },
    {
      id: 2,
      title: "Field Education Coordinator",
      category: "Education & Training",
      location: "Kenya",
      timeCommitment: "Full-time",
      skills: ["Education", "Project Management", "Local Languages"],
      description: "Lead educational programs in rural Kenyan communities. Coordinate with local schools, train teachers, and implement curriculum improvements.",
      requirements: ["Bachelor\'s degree in Education", "Experience in developing countries", "Fluent in English and Swahili"],
      testimonial: {
        name: "Michael Ochieng",
        role: "Former Volunteer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        quote: "Working directly with communities in Kenya was life-changing. The impact we made together will last for generations."
      },
      urgent: true
    },
    {
      id: 3,
      title: "Healthcare Data Analyst",
      category: "Healthcare & Medical",
      location: "Remote",
      timeCommitment: "10-15 hours/week",
      skills: ["Data Analysis", "Healthcare", "Statistics"],
      description: "Analyze health data from our programs across Africa to identify trends, measure impact, and inform policy recommendations.",
      requirements: ["Background in public health or statistics", "Experience with data analysis tools", "Understanding of healthcare systems"],
      testimonial: {
        name: "Dr. Amara Diallo",
        role: "Program Director",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
        quote: "Our data volunteers help us understand our impact and improve our programs. Their insights are invaluable."
      },
      urgent: false
    },
    {
      id: 4,
      title: "Translation Specialist",
      category: "Translation & Languages",
      location: "Remote",
      timeCommitment: "Flexible",
      skills: ["Translation", "African Languages", "Cultural Sensitivity"],
      description: "Translate educational materials, program documents, and communications into local African languages to ensure accessibility.",
      requirements: ["Fluency in English and at least one African language", "Translation experience preferred", "Cultural understanding"],
      testimonial: {
        name: "Fatima Al-Rashid",
        role: "Translation Team Lead",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
        quote: "Breaking down language barriers is crucial for our mission. Every translation helps us reach more communities."
      },
      urgent: true
    },
    {
      id: 5,
      title: "Technology Mentor",
      category: "Technology & Development",
      location: "Nigeria",
      timeCommitment: "Part-time",
      skills: ["Programming", "Mentoring", "Web Development"],
      description: "Mentor young African developers and help build technology solutions for local challenges. Conduct workshops and provide ongoing support.",
      requirements: ["5+ years software development experience", "Teaching or mentoring experience", "Willingness to relocate to Nigeria"],
      testimonial: {
        name: "James Adebayo",
        role: "Tech Program Graduate",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        quote: "The mentorship I received changed my life. Now I'm building apps that solve real problems in my community."
      },
      urgent: false
    },
    {
      id: 6,
      title: "Financial Literacy Trainer",
      category: "Finance & Administration",
      location: "Ghana",
      timeCommitment: "Project-based",
      skills: ["Finance", "Training", "Microfinance"],
      description: "Develop and deliver financial literacy programs for small business owners and entrepreneurs in rural Ghana communities.",
      requirements: ["Finance or business background", "Training experience", "Understanding of microfinance principles"],
      testimonial: {
        name: "Akosua Mensah",
        role: "Program Participant",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        quote: "The financial training helped me grow my business from 2 employees to 15. I can now support my entire extended family."
      },
      urgent: true
    }
  ];

  const filteredOpportunities = opportunities?.filter(opp => {
    const matchesSkill = !filters?.skillSet || opp?.category?.toLowerCase()?.includes(filters?.skillSet);
    const matchesTime = !filters?.timeCommitment || opp?.timeCommitment?.toLowerCase()?.includes(filters?.timeCommitment);
    const matchesLocation = !filters?.location || opp?.location?.toLowerCase()?.includes(filters?.location);
    const matchesSearch = !filters?.search || 
      opp?.title?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
      opp?.description?.toLowerCase()?.includes(filters?.search?.toLowerCase());
    
    return matchesSkill && matchesTime && matchesLocation && matchesSearch;
  });

  const urgentCount = filteredOpportunities?.filter(opp => opp?.urgent)?.length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
          Volunteer Opportunities
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Join our global community of volunteers making a direct impact across Africa. From virtual support to on-ground programs, find the perfect opportunity to match your skills and passion.
        </p>
        
        {urgentCount > 0 && (
          <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-4 py-2 rounded-full text-sm font-medium">
            <Icon name="Clock" size={16} />
            <span>{urgentCount} urgent opportunities available</span>
          </div>
        )}
      </div>
      {/* Filters */}
      <div className="bg-card rounded-xl shadow-warm p-6">
        <h4 className="font-semibold mb-4 flex items-center">
          <Icon name="Filter" size={20} className="mr-2 text-primary" />
          Find Your Perfect Match
        </h4>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Select
            label="Skill Set"
            options={skillOptions}
            value={filters?.skillSet}
            onChange={(value) => setFilters(prev => ({ ...prev, skillSet: value }))}
          />
          
          <Select
            label="Time Commitment"
            options={timeOptions}
            value={filters?.timeCommitment}
            onChange={(value) => setFilters(prev => ({ ...prev, timeCommitment: value }))}
          />
          
          <Select
            label="Location"
            options={locationOptions}
            value={filters?.location}
            onChange={(value) => setFilters(prev => ({ ...prev, location: value }))}
          />
          
          <Input
            label="Search"
            type="search"
            placeholder="Search opportunities..."
            value={filters?.search}
            onChange={(e) => setFilters(prev => ({ ...prev, search: e?.target?.value }))}
          />
        </div>
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-warm">
          <span className="text-sm text-muted-foreground">
            {filteredOpportunities?.length} opportunities found
          </span>
          <Button
            variant="ghost"
            onClick={() => setFilters({ skillSet: '', timeCommitment: '', location: '', search: '' })}
            iconName="X"
            iconPosition="left"
            iconSize={16}
          >
            Clear Filters
          </Button>
        </div>
      </div>
      {/* Opportunities Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {filteredOpportunities?.map((opportunity) => (
          <div key={opportunity?.id} className="bg-card rounded-xl shadow-warm hover:shadow-warm-lg transition-all duration-300 overflow-hidden">
            {/* Header */}
            <div className="p-6 pb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-lg">{opportunity?.title}</h4>
                    {opportunity?.urgent && (
                      <span className="bg-warning text-warning-foreground px-2 py-1 rounded-full text-xs font-medium">
                        Urgent
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">{opportunity?.category}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{opportunity?.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{opportunity?.timeCommitment}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {opportunity?.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {opportunity?.skills?.map((skill, index) => (
                  <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Requirements */}
              <div className="mb-4">
                <h5 className="font-medium text-sm mb-2">Requirements:</h5>
                <ul className="space-y-1">
                  {opportunity?.requirements?.slice(0, 2)?.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2 text-xs text-muted-foreground">
                      <Icon name="Check" size={12} className="text-success mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                  {opportunity?.requirements?.length > 2 && (
                    <li className="text-xs text-primary">
                      +{opportunity?.requirements?.length - 2} more requirements
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-muted/50 p-4 border-t border-warm">
              <div className="flex items-start space-x-3">
                <Image
                  src={opportunity?.testimonial?.image}
                  alt={opportunity?.testimonial?.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground italic mb-2 line-clamp-2">
                    "{opportunity?.testimonial?.quote}"
                  </p>
                  <div className="text-xs">
                    <span className="font-medium">{opportunity?.testimonial?.name}</span>
                    <span className="text-muted-foreground"> • {opportunity?.testimonial?.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 pt-0">
              <div className="flex space-x-3">
                <Button
                  variant="default"
                  fullWidth
                  className="hover-lift"
                  iconName="UserPlus"
                  iconPosition="left"
                  iconSize={16}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  iconName="Info"
                  iconSize={16}
                >
                  Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredOpportunities?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
          <h4 className="font-semibold mb-2">No opportunities found</h4>
          <p className="text-muted-foreground mb-4">
            Try adjusting your filters or search terms to find more opportunities.
          </p>
          <Button
            variant="outline"
            onClick={() => setFilters({ skillSet: '', timeCommitment: '', location: '', search: '' })}
            iconName="RefreshCw"
            iconPosition="left"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default VolunteerPortal;