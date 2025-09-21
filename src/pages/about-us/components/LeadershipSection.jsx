import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LeadershipSection = () => {
  const [activeTab, setActiveTab] = useState('leadership');

  const leadershipTeam = [
    {
      id: 1,
      name: 'Dr. Amara Okafor',
      position: 'Founder & Executive Director',
      image: '/assets/images/WhatsApp Image 2025-08-17 at 08.54.56.jpeg',
  bio: `Dr. Okafor brings over 20 years of experience in international development and African studies. Born in Lagos, Nigeria, she holds a PhD in Development Economics from Oxford University and has worked with the UN, World Bank, and various NGOs across Africa. Her vision for Valu Africa was born from her deep belief in the continent's potential for self-driven transformation.`,
      expertise: ['International Development', 'Economic Policy', 'Community Engagement'],
      achievements: ['UN Women Champion 2019', 'Forbes Africa Leader 2021', 'Oxford Alumni Award 2020'],
      linkedin: '#',twitter: '#'
    },
    {
      id: 2,
      name: 'Kwame Asante',position: 'Chief Operating Officer',image: '/assets/images/WhatsApp Image 2025-08-17 at 08.54.56(1).jpeg',
  bio: `Kwame is a seasoned operations leader with extensive experience in scaling social impact organizations across Africa. Born in Accra, Ghana, he previously served as Regional Director for Oxfam West Africa and has a Master's in Public Administration from Harvard Kennedy School. His operational excellence has been instrumental in Valu Africa's growth.`,
      expertise: ['Operations Management', 'Strategic Planning', 'Partnership Development'],
      achievements: ['Harvard Kennedy School Fellow', 'African Leadership Award 2018', 'Social Impact Leader 2022'],
      linkedin: '#',twitter: '#'
    },
    {
      id: 3,
      name: 'Dr. Fatima Al-Rashid',position: 'Director of Programs',image: '/assets/images/WhatsApp Image 2025-08-17 at 08.54.56(2).jpeg',
      bio: `Dr. Al-Rashid oversees all program implementation across our 54-country network. With a background in public health and community development, she has designed and implemented programs that have reached over 2 million people. Born in Cairo, Egypt, she brings deep understanding of both North African and Sub-Saharan contexts.`,
      expertise: ['Program Management', 'Public Health', 'Community Development'],
      achievements: ['WHO Excellence Award 2020', 'Cairo University Distinguished Alumni', 'African Health Leader 2019'],
      linkedin: '#',twitter: '#'
    },
    {
      id: 4,
      name: 'Joseph Mbeki',position: 'Director of Partnerships',image: '/assets/images/WhatsApp Image 2025-08-17 at 08.54.56(3).jpeg',
      bio: `Joseph leads our partnership strategy with governments, corporations, and international organizations. With over 15 years in diplomatic and corporate relations, he has secured over $50 million in partnerships for African development initiatives. Born in Cape Town, South Africa, he holds an MBA from INSEAD.`,
      expertise: ['Partnership Development', 'Corporate Relations', 'Diplomatic Affairs'],
      achievements: ['INSEAD Distinguished Alumni', 'African Business Leader 2021', 'Diplomatic Excellence Award'],
      linkedin: '#',twitter: '#'
    }
  ];

  const boardMembers = [
    {
      id: 1,
      name: 'Prof. Wangari Maathai Jr.',
      position: 'Board Chairperson',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop',
      expertise: 'Environmental Policy, Sustainable Development',
      commitment: 'Dedicated to continuing the legacy of environmental stewardship and women\'s empowerment across Africa.',
      credentials: 'PhD Environmental Science, Nobel Peace Prize Committee Member'
    },
    {
      id: 2,
      name: 'Dr. Aliko Dangote Jr.',
      position: 'Board Treasurer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      expertise: 'Business Development, Financial Strategy',
      commitment: 'Committed to leveraging private sector expertise for sustainable African development.',
      credentials: 'MBA Harvard Business School, Former McKinsey Partner'
    },
    {
      id: 3,
      name: 'Ambassador Ngozi Okonjo-Iweala',
      position: 'Board Member',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      expertise: 'International Trade, Economic Development',
      commitment: 'Passionate about creating equitable trade opportunities for African nations.',
      credentials: 'Former WTO Director-General, World Bank Executive'
    },
    {
      id: 4,
      name: 'Dr. Mo Ibrahim',
      position: 'Board Member',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      expertise: 'Technology Innovation, Governance',
      commitment: 'Focused on promoting good governance and technological advancement across Africa.',
      credentials: 'Founder Mo Ibrahim Foundation, Technology Entrepreneur'
    }
  ];

  const tabs = [
    { id: 'leadership', label: 'Leadership Team', icon: 'Users' },
    { id: 'board', label: 'Board of Directors', icon: 'Shield' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Meet Our <span className="text-gradient-gold">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our diverse leadership brings together decades of experience in development, 
            policy, and community engagement to drive meaningful change across Africa.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-lg">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-background text-primary shadow-warm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        {activeTab === 'leadership' && (
          <div className="space-y-16">
            {leadershipTeam?.map((member, index) => (
              <div 
                key={member?.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-warm-lg">
                      <Image
                        src={member?.image}
                        alt={`${member?.name} - ${member?.position}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-primary p-4 rounded-xl shadow-warm">
                      <Icon name="Award" size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{member?.name}</h3>
                    <p className="text-lg text-primary font-medium">{member?.position}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{member?.bio}</p>

                  {/* Expertise */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member?.expertise?.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Achievements</h4>
                    <ul className="space-y-1">
                      {member?.achievements?.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon name="CheckCircle" size={16} className="text-success" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Linkedin"
                      iconPosition="left"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Twitter"
                      iconPosition="left"
                      className="border-accent text-accent hover:bg-accent/10"
                    >
                      Twitter
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Board of Directors */}
        {activeTab === 'board' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers?.map((member) => (
              <div 
                key={member?.id}
                className="bg-muted/30 p-6 rounded-xl shadow-warm border border-warm hover:shadow-warm-lg transition-all duration-300 hover-lift"
              >
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={member?.image}
                      alt={`${member?.name} - ${member?.position}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">{member?.name}</h3>
                    <p className="text-sm text-primary font-medium">{member?.position}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Expertise</p>
                    <p className="text-xs text-muted-foreground">{member?.expertise}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Credentials</p>
                    <p className="text-xs text-muted-foreground">{member?.credentials}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Commitment</p>
                    <p className="text-xs text-muted-foreground italic">{member?.commitment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadershipSection;