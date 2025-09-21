import React from 'react';

const languages = [
  { name: 'Swahili', greeting: 'Jambo', country: 'Kenya, Tanzania, Uganda, DRC, and more' },
  { name: 'Yoruba', greeting: 'Bawo', country: 'Nigeria, Benin, Togo' },
  { name: 'Zulu', greeting: 'Sawubona', country: 'South Africa' },
  { name: 'Amharic', greeting: 'Selam', country: 'Ethiopia' },
  { name: 'Hausa', greeting: 'Sannu', country: 'Nigeria, Niger, Ghana' },
  { name: 'Wolof', greeting: 'Nanga def', country: 'Senegal, Gambia' },
  { name: 'Shona', greeting: 'Mhoro', country: 'Zimbabwe' },
  { name: 'Twi', greeting: 'Maakye', country: 'Ghana' },
  { name: 'Somali', greeting: 'Iska warran', country: 'Somalia, Ethiopia, Kenya' },
  { name: 'Berber', greeting: 'Azul', country: 'Morocco, Algeria, Tunisia' },
];

const randomIndex = Math.floor(Math.random() * languages.length);
const { name, greeting, country } = languages[randomIndex];

const AfricanLanguageOfTheDay = () => (
  <section className="my-10 py-6 px-4 bg-gradient-to-br from-warning/10 to-primary/10 rounded-xl shadow-warm max-w-2xl mx-auto text-center">
    <h2 className="text-xl font-heading font-bold text-gradient-gold mb-2">African Language of the Day</h2>
    <div className="text-lg font-accent mb-1">{name}</div>
    <div className="text-2xl font-bold text-primary mb-1">“{greeting}”</div>
    <div className="text-sm text-muted-foreground">Spoken in: {country}</div>
  </section>
);

export default AfricanLanguageOfTheDay;
