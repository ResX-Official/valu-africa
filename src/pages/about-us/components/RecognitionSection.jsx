import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const RecognitionSection = () => {
  const awards = [
    {
      id: 1,
      title: 'UN Global Partnership Award',
      organization: 'United Nations',
      year: '2024',
      description: 'Recognized for outstanding contribution to Sustainable Development Goals across Africa',
      image: '/assets/images/1001535678.webp',
      category: 'International Recognition'
    },
    {
      id: 2,
      title: 'African Development Excellence',
      organization: 'African Union',
      year: '2023',
      description: 'Honored for innovative approaches to community-driven development initiatives',
      image: '/assets/images/WhatsApp Image 2025-08-17 at 08.54.56.jpeg',
      category: 'Continental Award'
    },
    {
      id: 3,
      title: 'Social Impact Innovation Award',
      organization: 'World Economic Forum',
      year: '2023',
      description: 'Celebrated for breakthrough solutions in education and healthcare delivery',
      image: '/assets/images/WhatsApp Image 2025-08-17 at 08.54.56(1).jpeg',
      category: 'Innovation'
    },
    {
      id: 4,
      title: 'Transparency International Recognition',
      organization: 'Transparency International',
      year: '2022',
      description: 'Acknowledged for exceptional transparency and accountability practices',
      image: '/assets/images/WhatsApp Image 2025-08-17 at 08.54.56(2).jpeg',
      category: 'Governance'
    }
  ];

  const mediaFeatures = [
    {
      id: 1,
      outlet: 'BBC Africa',
  title: 'How Valu Africa is Transforming Rural Education',
      date: 'March 2024',
      type: 'Documentary Feature',
      image: '/assets/images/WhatsApp Image 2025-08-17 at 08.54.56(3).jpeg',
      link: '#'
    },
    {
      id: 2,
      outlet: 'CNN International',
      title: 'The New Face of African Development',
      date: 'January 2024',
      type: 'News Feature',
      image: '/assets/images/WhatsApp Image 2025-08-17 at 08.56.58.jpeg',
      link: '#'
    },
    {
      id: 3,
      outlet: 'The Guardian',
      title: 'Grassroots Solutions for Continental Challenges',
      date: 'November 2023',
      type: 'Opinion Piece',
      image: '/assets/images/1001535678.webp',
      link: '#'
    },
    {
      id: 4,
      outlet: 'Forbes Africa',
      title: 'Leading the Next Generation of African NGOs',
      date: 'September 2023',
      type: 'Profile',
      image: '/assets/images/1001535678.webp',
      link: '#'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Akinwumi Adesina',
      position: 'President, African Development Bank',
      image: '/assets/images/1001535678.webp',
  quote: `Valentine Unimuke Foundation represents the best of what African-led development can achieve. Their community-centered approach and unwavering commitment to transparency make them an invaluable partner in our continent's transformation.`,
      organization: 'African Development Bank'
    },
    {
      id: 2,
      name: 'Melinda French Gates',position: 'Co-founder, Pivotal Ventures',image: '/assets/images/1001535678.webp',
  quote: `The work Valentine Unimuke Foundation is doing to empower women and communities across Africa is truly inspiring. Their holistic approach to development creates lasting change that communities can sustain.`,
      organization: 'Pivotal Ventures'
    },
    {
      id: 3,
      name: 'Dr Arikana Chihombori-Quao',position: 'Pan Africanist',image: '/assets/images/1001535678.webp',
  quote: `Valentine Unimuke Foundation understands that true development comes from within our communities. Their partnership approach respects our sovereignty while providing the support we need to thrive.`,
      organization: 'Pan African Activist Zimbabwe'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Awards & <span className="text-gradient-gold">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence and impact has been recognized by leading 
            international organizations, media outlets, and development partners.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {awards?.map((award) => (
            <div 
              key={award?.id}
              className="bg-muted/30 rounded-xl overflow-hidden shadow-warm border border-warm hover:shadow-warm-lg transition-all duration-300 hover-lift"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={award?.image}
                  alt={`${award?.title} award ceremony`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-primary font-medium uppercase tracking-wide">
                    {award?.category}
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {award?.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{award?.organization}</span>
                    <span>{award?.year}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {award?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Media Coverage */}
        <div className="space-y-12 mb-20">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-foreground">Media Coverage</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our work has been featured in leading international media outlets, 
              highlighting our impact and approach to African development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaFeatures?.map((feature) => (
              <div 
                key={feature?.id}
                className="bg-muted/30 rounded-xl overflow-hidden shadow-warm border border-warm hover:shadow-warm-lg transition-all duration-300 hover-lift cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={feature?.image}
                    alt={`${feature?.outlet} feature story`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="space-y-1">
                    <div className="text-xs text-accent font-medium uppercase tracking-wide">
                      {feature?.outlet}
                    </div>
                    <h4 className="text-sm font-semibold text-foreground leading-tight">
                      {feature?.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{feature?.type}</span>
                    <span>{feature?.date}</span>
                  </div>
                  <div className="flex items-center text-primary text-xs font-medium">
                    <span>Read More</span>
                    <Icon name="ExternalLink" size={12} className="ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-foreground">Partner Testimonials</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our partners and collaborators about the impact of our work 
              and the strength of our partnerships.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <div 
                key={testimonial?.id}
                className="bg-background p-8 rounded-xl shadow-warm border border-warm hover:shadow-warm-lg transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Quote */}
                  <div className="relative">
                    <Icon 
                      name="Quote" 
                      size={32} 
                      className="text-primary/20 absolute -top-2 -left-2" 
                    />
                    <p className="text-muted-foreground leading-relaxed italic pl-6">
                      {testimonial?.quote}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-warm">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial?.image}
                        alt={testimonial?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial?.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial?.position}</div>
                      <div className="text-xs text-primary">{testimonial?.organization}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 p-8 lg:p-12 rounded-2xl border border-primary/20 text-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Join Our Recognition Journey
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These recognitions are not just awards - they represent the trust placed in us 
              by communities, partners, and supporters worldwide. Join us in continuing this 
              journey of impact and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/partnership-portal" className="inline-block">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover-lift flex items-center space-x-2">
                  <Icon name="Handshake" size={20} />
                  <span>Partner With Us</span>
                </button>
              </a>
              <a href="/donate" className="inline-block">
                <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover-lift flex items-center space-x-2">
                  <Icon name="Heart" size={20} />
                  <span>Support Our Mission</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;