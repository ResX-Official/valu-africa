import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CulturalMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const africanRegions = [
    {
      id: 'north',
      name: 'North Africa',
      countries: ['Egypt', 'Libya', 'Tunisia', 'Algeria', 'Morocco', 'Sudan'],
      color: '#B8860B',
      position: { top: '15%', left: '45%' },
      stories: [
        {
          title: 'Solar Revolution in Morocco',
          description: 'The world\'s largest solar complex powers 1.3 million homes',
          tradition: 'Ancient Berber solar architecture meets modern technology'
        }
      ],
      initiatives: [
        'Renewable Energy Expansion',
        'Desert Agriculture Innovation',
        'Cultural Heritage Preservation'
      ],
      traditions: [
        'Traditional water management systems',
        'Desert navigation techniques',
        'Ancient trade route networks'
      ]
    },
    {
      id: 'west',
      name: 'West Africa',
      countries: ['Nigeria', 'Ghana', 'Senegal', 'Mali', 'Burkina Faso', 'Ivory Coast'],
      color: '#FF6B35',
      position: { top: '35%', left: '25%' },
      stories: [
        {
          title: 'Tech Hub in Lagos',
          description: 'Nigeria\'s Silicon Valley creates 50,000 tech jobs annually',
          tradition: 'Yoruba storytelling traditions inspire digital narratives'
        }
      ],
      initiatives: [
        'Digital Innovation Centers',
        'Agricultural Modernization',
        'Youth Entrepreneurship'
      ],
      traditions: [
        'Griots - traditional storytellers',
        'Kente weaving techniques',
        'Community decision-making councils'
      ]
    },
    {
      id: 'central',
      name: 'Central Africa',
      countries: ['Democratic Republic of Congo', 'Cameroon', 'Central African Republic', 'Chad'],
      color: '#228B22',
      position: { top: '45%', left: '45%' },
      stories: [
        {
          title: 'Forest Conservation in Congo',
          description: 'Community-led initiatives protect 2 million hectares of rainforest',
          tradition: 'Indigenous forest management practices guide conservation'
        }
      ],
      initiatives: [
        'Rainforest Protection',
        'Sustainable Mining Practices',
        'Wildlife Conservation'
      ],
      traditions: [
        'Traditional forest medicine',
        'Pygmy hunting and gathering',
        'River navigation systems'
      ]
    },
    {
      id: 'east',
      name: 'East Africa',
      countries: ['Kenya', 'Tanzania', 'Ethiopia', 'Uganda', 'Rwanda', 'Somalia'],
      color: '#8B4513',
      position: { top: '40%', left: '65%' },
      stories: [
        {
          title: 'Mobile Banking Revolution',
          description: 'M-Pesa transforms financial inclusion for 50 million users',
          tradition: 'Traditional savings groups inspire digital financial systems'
        }
      ],
      initiatives: [
        'Mobile Financial Services',
        'Wildlife Tourism',
        'Coffee Farming Cooperatives'
      ],
      traditions: [
        'Maasai pastoralism',
        'Ethiopian coffee ceremonies',
        'Swahili maritime culture'
      ]
    },
    {
      id: 'southern',
      name: 'Southern Africa',
      countries: ['South Africa', 'Zimbabwe', 'Botswana', 'Namibia', 'Zambia', 'Mozambique'],
      color: '#DAA520',
      position: { top: '70%', left: '50%' },
      stories: [
        {
          title: 'Renewable Energy in South Africa',
          description: 'Wind and solar projects create 40,000 green jobs',
          tradition: 'Ubuntu philosophy guides community energy sharing'
        }
      ],
      initiatives: [
        'Green Energy Transition',
        'Mining Sustainability',
        'Educational Excellence'
      ],
      traditions: [
        'Ubuntu - community interconnectedness',
        'San people\'s desert survival',
        'Zulu beadwork and storytelling'
      ]
    }
  ];

  const handleRegionClick = (region) => {
    setSelectedRegion(selectedRegion?.id === region?.id ? null : region);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-surface to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Globe" size={24} className="text-accent" />
            <span className="text-accent font-medium text-sm uppercase tracking-wide">
              Cultural Immersion
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Discover Africa's Rich Heritage
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any region to explore local stories, traditions, and current initiatives. Each area represents unique cultures and ongoing transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-warm-lg border border-warm">
              <div className="relative w-full h-96 bg-gradient-to-b from-blue-100 to-yellow-50 rounded-xl overflow-hidden">
                {/* Africa continent outline - simplified */}
                <svg
                  viewBox="0 0 400 500"
                  className="w-full h-full"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
                >
                  {/* Simplified Africa shape */}
                  <path
                    d="M200 50 L180 80 L160 120 L140 160 L130 200 L140 240 L160 280 L180 320 L200 360 L220 400 L240 440 L260 420 L280 380 L300 340 L320 300 L340 260 L350 220 L340 180 L320 140 L300 100 L280 80 L260 60 L240 50 Z"
                    fill="#f8f6f3"
                    stroke="#B8860B"
                    strokeWidth="2"
                  />
                </svg>

                {/* Region markers */}
                {africanRegions?.map((region) => (
                  <button
                    key={region?.id}
                    className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-300 hover:scale-125 ${
                      selectedRegion?.id === region?.id
                        ? 'scale-150 ring-4 ring-white/50'
                        : hoveredRegion === region?.id
                        ? 'scale-110' :''
                    }`}
                    style={{
                      backgroundColor: region?.color,
                      top: region?.position?.top,
                      left: region?.position?.left,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => handleRegionClick(region)}
                    onMouseEnter={() => setHoveredRegion(region?.id)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    aria-label={`Explore ${region?.name}`}
                  />
                ))}

                {/* Hover tooltip */}
                {hoveredRegion && (
                  <div
                    className="absolute bg-black/80 text-white px-3 py-2 rounded-lg text-sm pointer-events-none z-10"
                    style={{
                      top: africanRegions?.find(r => r?.id === hoveredRegion)?.position?.top,
                      left: africanRegions?.find(r => r?.id === hoveredRegion)?.position?.left,
                      transform: 'translate(-50%, -120%)'
                    }}
                  >
                    {africanRegions?.find(r => r?.id === hoveredRegion)?.name}
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {africanRegions?.map((region) => (
                  <button
                    key={region?.id}
                    className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-200 ${
                      selectedRegion?.id === region?.id
                        ? 'bg-primary/10 border border-primary/30' :'hover:bg-muted'
                    }`}
                    onClick={() => handleRegionClick(region)}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: region?.color }}
                    />
                    <span className="text-xs font-medium text-foreground">
                      {region?.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Region Details */}
          <div className="space-y-6">
            {selectedRegion ? (
              <div className="bg-card rounded-2xl p-8 shadow-warm-lg border border-warm">
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: selectedRegion?.color }}
                  />
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    {selectedRegion?.name}
                  </h3>
                </div>

                {/* Countries */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Countries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRegion?.countries?.map((country) => (
                      <span
                        key={country}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-foreground"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Featured Story */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Featured Story
                  </h4>
                  <div className="bg-accent/5 rounded-lg p-4 border-l-4 border-accent">
                    <h5 className="font-semibold text-foreground mb-2">
                      {selectedRegion?.stories?.[0]?.title}
                    </h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      {selectedRegion?.stories?.[0]?.description}
                    </p>
                    <p className="text-xs text-accent italic">
                      {selectedRegion?.stories?.[0]?.tradition}
                    </p>
                  </div>
                </div>

                {/* Current Initiatives */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Current Initiatives
                  </h4>
                  <div className="space-y-2">
                    {selectedRegion?.initiatives?.map((initiative, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="ArrowRight" size={14} className="text-primary" />
                        <span className="text-sm text-foreground">{initiative}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cultural Traditions */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Cultural Traditions
                  </h4>
                  <div className="space-y-2">
                    {selectedRegion?.traditions?.map((tradition, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Star" size={14} className="text-warning" />
                        <span className="text-sm text-foreground">{tradition}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-card rounded-2xl p-8 shadow-warm-lg border border-warm text-center">
                <Icon name="MousePointer" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Explore Africa's Regions
                </h3>
                <p className="text-muted-foreground">
                  Click on any region marker on the map to discover local stories, cultural traditions, and current initiatives.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalMap;