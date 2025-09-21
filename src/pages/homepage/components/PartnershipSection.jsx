import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnershipSection = () => {
  const partnerCategories = [
    {
      id: 1,
      title: 'UN Agencies',
      description: 'Strategic partnerships with United Nations organizations',
      partners: [
        {
          name: 'UNDP',
          logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
          relationship: 'Development Programs',
          since: '2019'
        },
        {
          name: 'UNICEF',
          logo: 'https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
          relationship: 'Child Welfare',
          since: '2020'
        },
        {
          name: 'WHO',
          logo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
          relationship: 'Health Initiatives',
          since: '2021'
        }
      ]
    },
    {
      id: 2,
      title: 'Government Partners',
      description: 'Collaborative relationships with African governments',
      partners: [
        {
          name: 'Ministry of Education - Ghana',
          logo: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
          relationship: 'Educational Infrastructure',
          since: '2018'
        },
        {
          name: 'Kenya Wildlife Service',
          logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
          relationship: 'Conservation Programs',
          since: '2019'
        },
        {
          name: 'Nigerian Tech Ministry',
          logo: 'https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
          relationship: 'Digital Innovation',
          since: '2022'
        }
      ]
    },
    {
      id: 3,
      title: 'Corporate Sponsors',
      description: 'Private sector partnerships driving sustainable change',
      partners: [
        {
          name: 'Microsoft Africa',
          logo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
          relationship: 'Technology Access',
          since: '2020'
        },
        {
          name: 'Safaricom',
          logo: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
          relationship: 'Mobile Solutions',
          since: '2019'
        },
        {
          name: 'Total Energies',
          logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
          relationship: 'Renewable Energy',
          since: '2021'
        }
      ]
    }
  ];

  const partnershipStats = [
    {
      icon: 'Users',
      value: '45+',
      label: 'Active Partners',
      color: 'text-accent'
    },
    {
      icon: 'Globe',
      value: '18',
      label: 'Countries',
      color: 'text-primary'
    },
    {
      icon: 'Calendar',
      value: '6',
      label: 'Years Average',
      color: 'text-success'
    },
    {
      icon: 'TrendingUp',
      value: '95%',
      label: 'Renewal Rate',
      color: 'text-warning'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Handshake" size={24} className="text-accent" />
            <span className="text-accent font-medium text-sm uppercase tracking-wide">
              Strategic Alliances
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Trusted Partnership Network
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our impact is amplified through strategic partnerships with leading organizations, governments, and corporations committed to African development.
          </p>
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partnershipStats?.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-xl shadow-warm border border-warm hover:shadow-warm-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 mx-auto mb-3 ${stat?.color?.replace('text-', 'bg-')}/10 rounded-lg flex items-center justify-center`}>
                <Icon name={stat?.icon} size={24} className={stat?.color} />
              </div>
              <div className={`text-2xl font-bold ${stat?.color} mb-1`}>
                {stat?.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partner Categories */}
        <div className="space-y-12">
          {partnerCategories?.map((category) => (
            <div key={category?.id} className="bg-card rounded-2xl p-8 shadow-warm border border-warm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {category?.title}
                </h3>
                <p className="text-muted-foreground">
                  {category?.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category?.partners?.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-surface rounded-xl p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-warm group"
                  >
                    {/* Partner Logo */}
                    <div className="w-full h-20 bg-muted rounded-lg mb-4 overflow-hidden">
                      <Image
                        src={partner?.logo}
                        alt={`${partner?.name} logo`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Partner Info */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-lg">
                        {partner?.name}
                      </h4>
                      
                      <div className="flex items-center space-x-2">
                        <Icon name="Target" size={14} className="text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {partner?.relationship}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={14} className="text-accent" />
                        <span className="text-sm text-muted-foreground">
                          Partnership since {partner?.since}
                        </span>
                      </div>
                    </div>

                    {/* Partnership Status */}
                    <div className="mt-4 pt-4 border-t border-warm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-success bg-success/10 px-2 py-1 rounded-full">
                          Active
                        </span>
                        <Icon name="ExternalLink" size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Join Our Partnership Network
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're a corporation, government agency, or NGO, we welcome partnerships that create lasting impact across Africa. Together, we can achieve more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/partnership-portal"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors hover-lift"
              >
                <Icon name="Handshake" size={16} />
                <span>Explore Partnerships</span>
              </a>
              <a
                href="/about-us"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Icon name="FileText" size={16} />
                <span>Download Partnership Guide</span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span className="text-sm text-muted-foreground">Verified Partners</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} className="text-warning" />
              <span className="text-sm text-muted-foreground">ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">Transparency Seal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;