import React from 'react';

const FounderMessage = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl shadow-warm border border-warm p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-gradient-gold">A Message from Our Founder</h3>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Amb Dr Unimuke Valentine, African Union Ambassador for Agenda 2063, Founder and Convener of the Valentine Unimuke Foundation.
          </p>
          <p className="text-foreground/90 leading-relaxed mb-4">
            A United Africa, A secured Africa, A prosperous Africa, The Africa without foreign exploitation. The Africa we want is achievable!
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Distinguished friends, partners, and change-makers, the Valentine Unimuke Foundation is a Pan-African organization dedicated to building “The Africa We Want” by empowering youth, promoting peace, expanding education, advancing healthcare, and strengthening unity across nations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;


