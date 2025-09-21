import React from 'react';

const media = [
  { type: 'image', src: '/assets/images/WhatsApp Image 2025-08-17 at 08.54.56.jpeg', alt: 'Foundation activity 1' },
  { type: 'image', src: '/assets/images/WhatsApp Image 2025-08-17 at 08.54.56(1).jpeg', alt: 'Foundation activity 2' },
  { type: 'image', src: '/assets/images/WhatsApp Image 2025-08-17 at 08.54.56(2).jpeg', alt: 'Foundation activity 3' },
  { type: 'image', src: '/assets/images/WhatsApp Image 2025-08-17 at 08.54.56(3).jpeg', alt: 'Foundation activity 4' },
  { type: 'image', src: '/assets/images/WhatsApp Image 2025-08-17 at 08.56.58.jpeg', alt: 'Foundation activity 5' },
  { type: 'image', src: '/assets/images/1001535678.webp', alt: 'Foundation logo or banner' },
  { type: 'video', src: '/assets/images/1001211467.mp4', alt: 'Foundation event video' }
];

const MediaShowcase = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-gradient-gold mb-6 text-center">
          Media Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {media.map((item, index) => (
            <div key={index} className="bg-card rounded-xl shadow-warm overflow-hidden border border-warm">
              {item.type === 'image' ? (
                <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
              ) : (
                <video controls className="w-full h-64 object-cover">
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;


