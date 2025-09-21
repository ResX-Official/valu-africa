import React from 'react';
import Icon from './AppIcon';

const attires = [
  {
    name: 'Kente',
    country: 'Ghana',
    description: 'A vibrant, handwoven cloth with symbolic patterns, worn for celebrations and special occasions.',
    image: '/assets/images/kente.jpeg',
    colors: ['Gold', 'Red', 'Green', 'Blue'],
    significance: 'Royalty & Celebration'
  },
  {
    name: 'Dashiki',
    country: 'West Africa',
    description: 'A colorful, loose-fitting shirt with intricate embroidery, popular across West Africa and the diaspora.',
    image: '/assets/images/dashiki.jpg',
    colors: ['Multi-color', 'Bold Patterns'],
    significance: 'Cultural Pride'
  },
  {
    name: 'Shúkà',
    country: 'Kenya, Tanzania (Maasai)',
    description: 'A red-checked cloth worn by the Maasai people, symbolizing strength and community.',
    image: '/assets/images/shuka.jpeg',
    colors: ['Red', 'Blue', 'Black'],
    significance: 'Strength & Unity'
  },
  {
    name: 'Boubou',
    country: 'West Africa',
    description: 'A flowing, wide-sleeved robe worn by men and women, often made from richly embroidered fabric.',
    image: '/assets/images/boubou-africain.png',
    colors: ['Rich Embroidered', 'Elegant'],
    significance: 'Elegance & Tradition'
  },
  {
    name: 'Habesha Kemis',
    country: 'Ethiopia, Eritrea',
    description: 'A white cotton dress with colorful woven borders, worn by women for holidays and celebrations.',
    image: '/assets/images/habesha hemis.png',
    colors: ['White', 'Colorful Borders'],
    significance: 'Purity & Celebration'
  },
  {
    name: 'Aso Oke',
    country: 'Nigeria (Yoruba)',
    description: 'A handwoven fabric with intricate patterns, traditionally worn by the Yoruba people for special occasions.',
    image: '/assets/images/aso oke.jpg',
    colors: ['Gold', 'Silver', 'Multi-color'],
    significance: 'Prestige & Heritage'
  }
];

const AfricanAttireGallery = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Icon name="Shirt" size={20} />
          Cultural Heritage
        </div>
        <h2 className="text-4xl md:text-5xl font-accent font-bold text-gradient-primary mb-6 leading-tight">
          Traditional African Attire Gallery
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover the rich tapestry of African traditional clothing, each piece telling a story of culture, identity, and heritage.
        </p>
      </div>

      {/* Attire Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attires.map((attire, idx) => (
          <div
            key={idx}
            className="group card-modern-component overflow-hidden hover-lift"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={attire.image}
                alt={attire.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-1">{attire.name}</h3>
                <p className="text-yellow-300 text-sm font-medium">{attire.country}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-4 leading-relaxed">{attire.description}</p>
              
              {/* Colors */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Icon name="Palette" size={16} className="text-primary" />
                  Colors & Patterns
                </h4>
                <div className="flex flex-wrap gap-2">
                  {attire.colors.map((color, colorIdx) => (
                    <span
                      key={colorIdx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Significance */}
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Star" size={16} className="text-accent" />
                <span className="text-gray-700 font-medium">{attire.significance}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="card-modern-component p-8 bg-gradient-to-r from-primary/5 to-accent/5">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Preserving Cultural Heritage
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Each piece of traditional attire carries centuries of history and meaning. 
            Help us preserve and celebrate these cultural treasures for future generations.
          </p>
          <button className="btn-modern">
            Learn More About Our Cultural Programs
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default AfricanAttireGallery;
