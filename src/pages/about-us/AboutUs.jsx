import React from 'react';

const AboutUs = () => {
  return (
    <section className="my-12 py-8 px-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-warm-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-heading font-bold text-center mb-6 text-gradient-gold">
        Welcome to Valentine Unimuke Foundation
      </h1>
      <p className="text-lg text-gray-800 dark:text-gray-100 mb-4">
        A Pan African nonprofit and non-governmental organization committed to humanitarian efforts and driving sustainable development across Africa.
      </p>
      <h2 className="text-2xl font-heading font-bold text-center mb-4 text-gradient-gold">
        Our Objectives
      </h2>
      <ul className="list-disc pl-6 text-gray-800 dark:text-gray-100">
        <li>Provide Medical Outreach Across African Communities</li>
        <li>Support Out-of-School Children</li>
        <li>Promote and Maintain Peace in Africa</li>
        <li>Advocate for African Unity</li>
        <li>Promote Self-Reliance in Africa</li>
        <li>Empower Youth Across Africa</li>
        <li>Promote Entrepreneurship and Economic Empowerment</li>
        <li>Advance Access to Quality Education</li>
        <li>Preserve and Promote African Cultural Heritage</li>
        <li>Advocate for Sustainable Development in Africa</li>
        <li>Promote Good Governance and Leadership</li>
        <li>Strengthen Humanitarian Response in Crisis Situations</li>
        <li>Foster Gender Equality and Women’s Empowerment</li>
        <li>Collaborate with Local, Regional, and International Partners</li>
      </ul>
      <div className="mt-8">
        <img
          src="/assets/images/1001535678.webp"
          alt="Valentine Unimuke Foundation Logo"
          className="w-40 h-40 mx-auto mb-4"
        />
        <video
          src="/assets/images/1001211467.mp4"
          controls
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutUs;
