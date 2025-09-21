import React from 'react';

const artist = {
  name: 'Angelique Kidjo',
  country: 'Benin',
  bio: 'Angelique Kidjo is a Grammy Award-winning singer-songwriter and activist, celebrated for her powerful voice and her fusion of West African music with global influences. She is recognized as one of Africa’s most influential musicians and a champion for women’s rights.',
  image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80',
  musicUrl: 'https://www.youtube.com/embed/3M4uUJibpvw', // Official Angelique Kidjo - Agolo
  highlight: 'Song: Agolo',
};

const FeaturedAfricanArtist = () => (
  <section className="my-12 py-8 px-4 bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl shadow-warm-lg max-w-4xl mx-auto">
    <h2 className="text-2xl font-heading font-bold text-center mb-6 text-gradient-gold">Featured African Artist</h2>
    <div className="flex flex-col md:flex-row items-center gap-8">
  <img src={artist.image} alt={artist.name} className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400 shadow-warm" />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-primary mb-1">{artist.name}</h3>
        <div className="text-sm text-muted-foreground mb-2">{artist.country}</div>
        <p className="text-foreground mb-2">{artist.bio}</p>
        <div className="text-accent font-semibold mb-2">{artist.highlight}</div>
        <div className="aspect-video w-full max-w-md mx-auto">
          <iframe
            width="100%"
            height="200"
            src={artist.musicUrl}
            title={artist.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedAfricanArtist;
