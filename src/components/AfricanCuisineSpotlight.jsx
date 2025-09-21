import React from 'react';

const cuisines = [
  {
    name: 'Jollof Rice',
    country: 'West Africa (Nigeria, Ghana, Senegal, and more)',
    description: 'A beloved West African dish made with rice, tomatoes, onions, and spices. Each country has its own twist, and the "Jollof Wars" are legendary!',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Injera & Doro Wat',
    country: 'Ethiopia',
    description: 'Injera is a spongy flatbread served with a variety of stews, the most famous being Doro Wat (spicy chicken stew).',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Bunny Chow',
    country: 'South Africa',
    description: 'A hollowed-out loaf of bread filled with spicy curry, originating from Durban’s Indian community.',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Yassa Poulet',
    country: 'Senegal',
    description: 'A tangy, spicy chicken dish marinated in lemon, onions, and mustard, then grilled or simmered.',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Ugali & Sukuma Wiki',
    country: 'East Africa (Kenya, Tanzania, Uganda)',
    description: 'Ugali is a maize porridge served with sautéed greens (sukuma wiki) and often with meat or fish.',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
  },
];

const randomIndex = Math.floor(Math.random() * cuisines.length);
const { name, country, description, image } = cuisines[randomIndex];

const AfricanCuisineSpotlight = () => (
  <section className="my-12 py-8 px-4 bg-gradient-to-br from-accent/10 to-warning/10 dark:bg-[#1a140a] rounded-2xl shadow-warm-lg max-w-4xl mx-auto">
    <h2 className="text-2xl font-heading font-bold text-center mb-6 text-gradient-gold">Spotlight on African Cuisine</h2>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <img src={image} alt={name} className="w-40 h-32 rounded-lg object-cover border-4 border-accent shadow-warm" />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-accent mb-1">{name}</h3>
        <div className="text-sm text-muted-foreground mb-2">{country}</div>
        <p className="text-foreground mb-2">{description}</p>
      </div>
    </div>
  </section>
);

export default AfricanCuisineSpotlight;
