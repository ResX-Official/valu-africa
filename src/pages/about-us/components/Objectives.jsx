import React from 'react';

const objectives = [
  'Provide Medical Outreach Across African Communities: Deliver free medical care, health education, and support services to underserved populations in rural and urban areas throughout Africa.',
  'Support Out-of-School Children: Provide educational opportunities, scholarships, learning materials, and psychosocial support to children who are out of school due to poverty, conflict, or displacement.',
  'Promote and Maintain Peace in Africa: Engage in conflict resolution, peacebuilding initiatives, mediation, and the promotion of a culture of nonviolence and dialogue across African nations.',
  'Advocate for African Unity: Foster Pan-African consciousness, collaboration among African nations, and solidarity in pursuit of a common African identity and destiny.',
  'Promote Self-Reliance in Africa: Empower individuals, families, and communities with the tools and resources needed to become self-sustaining and independent.',
  'Empower Youth Across Africa: Train, mentor, and support young people to become leaders, innovators, and agents of positive change in their communities and nations.',
  'Promote Entrepreneurship and Economic Empowerment: Provide business training, funding opportunities, mentorship, and market access for SMEs, especially among youth and women.',
  'Advance Access to Quality Education: Advocate for inclusive and quality education for all, improve infrastructure, and invest in teacher training and curriculum development across Africa.',
  'Preserve and Promote African Cultural Heritage: Safeguard African traditions, languages, values, and historical sites while celebrating and showcasing Africa’s rich cultural diversity.',
  'Advocate for Sustainable Development in Africa: Support initiatives that ensure responsible environmental stewardship, economic development, and social progress aligned with the UN SDGs and AU Agenda 2063.',
  'Promote Good Governance and Leadership: Encourage accountability, transparency, civic responsibility, and democratic values in African leadership at all levels.',
  'Strengthen Humanitarian Response in Crisis Situations: Provide timely support and relief to communities affected by natural disasters, armed conflict, disease outbreaks, or famine.',
  'Foster Gender Equality and Women’s Empowerment: Promote equal opportunities for women and girls in education, leadership, and economic participation.',
  'Collaborate with Local, Regional, and International Partners: Build strategic alliances with governments, NGOs, institutions, and international bodies to achieve collective development goals.'
];

const Objectives = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-gradient-gold mb-6 text-center">
          Our Objectives
        </h3>
        <div className="bg-card rounded-2xl shadow-warm border border-warm p-6 md:p-8">
          <ol className="list-decimal pl-6 space-y-4 text-foreground/90">
            {objectives.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Objectives;


