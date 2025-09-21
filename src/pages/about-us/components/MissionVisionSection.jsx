import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionVisionSection = () => {
  const values = [
    {
      icon: 'Heart',
      title: 'Ubuntu Philosophy',
      description: 'We believe in the interconnectedness of humanity - "I am because we are" - fostering community solidarity and collective empowerment.'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation with Heritage',
      description: 'Blending traditional wisdom with modern solutions to create sustainable pathways for African development and growth.'
    },
    {
      icon: 'Shield',
      title: 'Transparency & Integrity',
      description: 'Maintaining the highest standards of accountability, ethical practices, and transparent operations in all our initiatives.'
    },
    {
      icon: 'Globe',
      title: 'Pan-African Unity',
      description: 'Celebrating the diversity of African cultures while promoting unity, collaboration, and shared prosperity across the continent.'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Target" size={24} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower African communities through sustainable development initiatives, 
              cultural preservation programs, and innovative solutions that honor our rich 
              heritage while building pathways to prosperity. We work hand-in-hand with 
              local leaders, international partners, and passionate advocates to create 
              lasting positive change across the continent.
            </p>
            <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
              <p className="text-foreground font-medium italic">
                "Our mission is rooted in the belief that Africa's greatest strength lies 
                in its people, culture, and untapped potential."
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Eye" size={24} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A thriving Africa where every community has access to education, healthcare, 
              economic opportunities, and the resources needed to preserve their cultural 
              identity while embracing progress. We envision a continent that leads by 
              example in sustainable development, innovation, and social justice.
            </p>
            <div className="bg-accent/10 p-6 rounded-xl border-l-4 border-accent">
              <p className="text-foreground font-medium italic">
                "We see an Africa that is self-reliant, culturally proud, and globally 
                connected - a beacon of hope and progress for the world."
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every action we take 
              in our mission to empower African communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values?.map((value, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-xl shadow-warm border border-warm hover:shadow-warm-lg transition-all duration-300 hover-lift"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-warning rounded-xl flex items-center justify-center">
                    <Icon name={value?.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value?.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Theory of Change */}
        <div className="mt-20 bg-background p-8 lg:p-12 rounded-2xl shadow-warm border border-warm">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Theory of Change</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our strategic approach to creating sustainable impact across Africa through 
              community-driven initiatives and collaborative partnerships.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Community Engagement</h3>
              <p className="text-sm text-muted-foreground">
                Partner with local leaders to identify needs and co-create solutions
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Capacity Building</h3>
              <p className="text-sm text-muted-foreground">
                Provide training, resources, and tools for sustainable development
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Execute programs with community ownership and continuous monitoring
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Sustainable Impact</h3>
              <p className="text-sm text-muted-foreground">
                Achieve lasting change that communities can maintain independently
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;