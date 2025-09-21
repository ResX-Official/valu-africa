import React from 'react';

const facts = [
  {
    fact: 'Africa is the second largest continent in the world, both in size and population.',
    icon: '🌍',
  },
  {
    fact: 'Over 2,000 languages are spoken across Africa, making it the most linguistically diverse continent.',
    icon: '🗣️',
  },
  {
    fact: 'The Sahara Desert is the largest hot desert in the world and is located in North Africa.',
    icon: '🏜️',
  },
  {
    fact: 'Africa is home to the world’s longest river, the Nile, which stretches over 6,650 km.',
    icon: '🌊',
  },
  {
    fact: 'Nigeria is the most populous country in Africa, with over 200 million people.',
    icon: '👥',
  },
  {
    fact: 'Africa has the youngest population of any continent, with a median age of just 19.7 years.',
    icon: '🧒',
  },
  {
    fact: 'The Great Pyramid of Giza in Egypt is the oldest of the Seven Wonders of the Ancient World.',
    icon: '🗿',
  },
  {
    fact: 'Lake Victoria, located in East Africa, is the largest lake in Africa and the second largest freshwater lake in the world.',
    icon: '🏞️',
  },
];

const AfricaFacts = () => (
  <section className="my-12 py-8 px-4 bg-gradient-to-br from-warning/10 to-primary/10 rounded-2xl shadow-warm-lg max-w-4xl mx-auto">
    <h2 className="text-2xl font-heading font-bold text-center mb-6 text-gradient-gold">Did You Know? Amazing Africa Facts</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {facts.map((item, idx) => (
        <li key={idx} className="flex items-start space-x-4">
          <span className="text-3xl">{item.icon}</span>
          <span className="text-lg text-foreground font-medium">{item.fact}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default AfricaFacts;
