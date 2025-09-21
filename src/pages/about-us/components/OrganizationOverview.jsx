import React from 'react';

const OrganizationOverview = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-primary/5 to-warning/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            <span className="text-gradient-gold">Welcome to Valentine Unimuke Foundation</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
            A Pan-African nonprofit and non-governmental organization committed to humanitarian work
            and driving sustainable development across Africa.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-warm border border-warm p-6 md:p-8">
          <p className="text-foreground/90 leading-relaxed">
            We are dedicated to building a united, secure, and prosperous Africa by promoting peace,
            unity, education, healthcare, entrepreneurship, and cultural preservation, aligned with the
            UN Sustainable Development Goals and the African Union Agenda 2063.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrganizationOverview;


