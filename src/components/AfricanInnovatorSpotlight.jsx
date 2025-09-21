import React from 'react';

const innovators = [
  {
    name: 'William Kamkwamba',
    country: 'Malawi',
    achievement: 'Built a windmill from scrap to power his village at age 14, inspiring the book and film "The Boy Who Harnessed the Wind."',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Dr. Ola Orekunrin',
    country: 'Nigeria',
    achievement: 'Founded Flying Doctors Nigeria, West Africa\'s first air ambulance service.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Farida Bedwei',
    country: 'Ghana',
    achievement: 'Software engineer and co-founder of Logiciel, empowering people with disabilities through technology.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Dr. Catherine Nakalembe',
    country: 'Uganda',
    achievement: 'NASA scientist using satellite data to improve food security and disaster response in Africa.',
    image: '/assets/images/dr catherine nakalambe.jpeg',
  },
  {
    name: 'Kelvin Doe',
    country: 'Sierra Leone',
    achievement: 'Self-taught engineer who built his own radio station and batteries from scrap as a teenager.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
];

// Always show Dr. Catherine Nakalembe
const { name, country, achievement, image } = innovators[3];

const AfricanInnovatorSpotlight = () => (
  <section className="my-12 py-8 px-4 bg-gradient-to-br from-success/10 to-primary/10 dark:bg-[#141a13] rounded-2xl shadow-warm-lg max-w-4xl mx-auto">
    <h2 className="text-2xl font-heading font-bold text-center mb-6 text-gradient-accent">Young African Innovator</h2>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover border-4 border-success shadow-warm" />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-success mb-1">{name}</h3>
        <div className="text-sm text-muted-foreground mb-2">{country}</div>
        <p className="text-foreground mb-2">{achievement}</p>
      </div>
    </div>
  </section>
);

export default AfricanInnovatorSpotlight;
