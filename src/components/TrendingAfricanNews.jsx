import React, { useEffect, useState } from 'react';

const demoNews = [
  {
    title: 'Kenya Launches Africa’s Largest Wind Power Project',
    summary: 'The Lake Turkana Wind Power project is now operational, providing clean energy to millions and setting a new standard for renewable energy in Africa.',
    url: 'https://www.bbc.com/news/world-africa-49025247',
    source: 'BBC Africa',
  },
  {
    title: 'Nigeria’s Tech Startups Attract Record Investment',
    summary: 'Nigerian tech companies raised over $1.5 billion in 2025, making Lagos a leading African innovation hub.',
    url: 'https://techcabal.com/2025/07/10/nigeria-tech-investment/',
    source: 'TechCabal',
  },
  {
    title: 'South Africa Hosts Pan-African Art Biennale',
    summary: 'Artists from across the continent gather in Johannesburg to celebrate African creativity and cultural heritage.',
    url: 'https://www.southafrican.com/lifestyle/art-biennale-2025/',
    source: 'South African',
  },
  {
    title: 'Ghana’s Cocoa Farmers Go Digital',
    summary: 'Mobile technology is transforming the cocoa industry, improving traceability and boosting farmer incomes.',
    url: 'https://www.ghanaweb.com/GhanaHomePage/business/Cocoa-farmers-go-digital-2025-1845678',
    source: 'GhanaWeb',
  },
  {
    title: 'Egypt’s Solar Farms Expand Rapidly',
    summary: 'Egypt is now home to some of the world’s largest solar farms, accelerating the country’s green energy transition.',
    url: 'https://english.ahram.org.eg/NewsContent/3/12/507890/Business/Economy/Egypt-solar-farms-2025.aspx',
    source: 'Ahram Online',
  },
];

const TrendingAfricanNews = () => {
  const [news, setNews] = useState(demoNews);

  // In production, fetch from a real news API
  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/top-headlines?category=general&q=Africa&apiKey=YOUR_API_KEY')
  //     .then(res => res.json())
  //     .then(data => setNews(data.articles));
  // }, []);

  return (
  <section className="my-12 py-8 px-4 bg-gradient-to-br from-accent/10 to-primary/10 dark:bg-transparent rounded-2xl shadow-warm-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-heading font-bold text-center mb-6 text-gradient-gold">Trending African News</h2>
      <ul className="space-y-6">
        {news.map((item, idx) => (
          <li key={idx} className="bg-white/90 dark:bg-green-900 !bg-green-900 dark:!bg-green-900 rounded-lg p-4 shadow-warm flex flex-col sm:flex-row sm:items-center sm:space-x-4 border border-yellow-700/30 dark:border-yellow-400/20 transition-colors">
            <div className="flex-1">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-yellow-300 hover:underline">
                {item.title}
              </a>
              <div className="text-sm text-yellow-100 mt-1 mb-2">{item.source}</div>
              <p className="text-base text-gray-100">{item.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrendingAfricanNews;
