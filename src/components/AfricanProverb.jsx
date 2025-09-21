import React from 'react';

const proverbs = [
  {
    proverb: 'If you want to go fast, go alone. If you want to go far, go together.',
    origin: 'African Proverb',
  },
  {
    proverb: 'Wisdom is like a baobab tree; no one individual can embrace it.',
    origin: 'Akan Proverb (Ghana)',
  },
  {
    proverb: 'Rain does not fall on one roof alone.',
    origin: 'Cameroonian Proverb',
  },
  {
    proverb: 'A child who is not embraced by the village will burn it down to feel its warmth.',
    origin: 'Nigerian Proverb',
  },
  {
    proverb: 'No matter how long the night, the day is sure to come.',
    origin: 'African Proverb',
  },
  {
    proverb: 'Even the best cooking pot will not produce food.',
    origin: 'African Proverb',
  },
  {
    proverb: 'A single bracelet does not jingle.',
    origin: 'Congolese Proverb',
  },
  {
    proverb: 'Wisdom does not come overnight.',
    origin: 'Somali Proverb',
  },
];

const randomIndex = Math.floor(Math.random() * proverbs.length);
const { proverb, origin } = proverbs[randomIndex];

const AfricanProverb = () => (
  <section className="my-10 py-6 px-4 bg-gradient-to-br from-primary/10 to-warning/10 rounded-xl shadow-warm max-w-2xl mx-auto text-center">
    <blockquote className="text-xl italic font-accent text-red-600 mb-2">"{proverb}"</blockquote>
    <div className="text-sm text-muted-foreground">— {origin}</div>
  </section>
);

export default AfricanProverb;
