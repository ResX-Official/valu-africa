import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const resourceCategories = [
    { id: 'all', name: 'All Resources', icon: 'Grid3X3', count: 24 },
    { id: 'templates', name: 'Templates', icon: 'FileText', count: 8 },
    { id: 'guides', name: 'Guides', icon: 'BookOpen', count: 6 },
    { id: 'reports', name: 'Reports', icon: 'BarChart3', count: 5 },
    { id: 'frameworks', name: 'Frameworks', icon: 'Settings', count: 5 }
  ];

  const resources = [
    {
      id: 1,
      title: 'Partnership Agreement Template',
      description: 'Comprehensive legal template for formalizing partnership agreements with clear terms, responsibilities, and success metrics.',
      category: 'templates',
      type: 'PDF Template',
      size: '2.4 MB',
      downloads: 1250,
      lastUpdated: '2025-01-15',
      tags: ['Legal', 'Contracts', 'Corporate'],
      featured: true
    },
    {
      id: 2,
      title: 'Corporate Partnership Guide',
      description: 'Step-by-step guide for corporations looking to establish meaningful partnerships with Valu Africa.',
      category: 'guides',
      type: 'PDF Guide',
      size: '5.8 MB',
      downloads: 890,
      lastUpdated: '2025-01-10',
      tags: ['Corporate', 'Strategy', 'CSR']
    },
    {
      id: 3,
      title: 'Impact Measurement Framework',
      description: 'Comprehensive framework for measuring and reporting partnership impact with standardized metrics and KPIs.',
      category: 'frameworks',
      type: 'Excel Framework',
      size: '1.2 MB',
      downloads: 670,
      lastUpdated: '2025-01-08',
      tags: ['Impact', 'Metrics', 'Reporting'],
      featured: true
    },
    {
      id: 4,
      title: 'Due Diligence Checklist',
      description: 'Essential checklist for conducting thorough due diligence on potential partnership opportunities.',
      category: 'templates',
      type: 'PDF Checklist',
      size: '800 KB',
      downloads: 1100,
      lastUpdated: '2025-01-05',
      tags: ['Due Diligence', 'Assessment', 'Risk']
    },
    {
      id: 5,
      title: 'Annual Partnership Impact Report 2024',
      description: 'Comprehensive report showcasing partnership achievements, impact metrics, and success stories from 2024.',
      category: 'reports',
      type: 'PDF Report',
      size: '12.5 MB',
      downloads: 2100,
      lastUpdated: '2024-12-31',
      tags: ['Annual Report', 'Impact', 'Statistics'],
      featured: true
    },
    {
      id: 6,
      title: 'Government Partnership Handbook',
      description: 'Detailed handbook for government entities interested in establishing official partnerships and development assistance programs.',
      category: 'guides',
      type: 'PDF Handbook',
      size: '8.2 MB',
      downloads: 450,
      lastUpdated: '2024-12-20',
      tags: ['Government', 'Policy', 'Development']
    },
    {
      id: 7,
      title: 'NGO Collaboration Framework',
      description: 'Structured framework for NGO partnerships including resource sharing, program integration, and joint implementation strategies.',
      category: 'frameworks',
      type: 'PDF Framework',
      size: '3.1 MB',
      downloads: 320,
      lastUpdated: '2024-12-15',
      tags: ['NGO', 'Collaboration', 'Joint Programs']
    },
    {
      id: 8,
      title: 'Partnership ROI Calculator',
      description: 'Interactive calculator to estimate return on investment for different partnership models and engagement levels.',
      category: 'templates',
      type: 'Excel Calculator',
      size: '950 KB',
      downloads: 780,
      lastUpdated: '2024-12-10',
      tags: ['ROI', 'Calculator', 'Financial']
    }
  ];

  const filteredResources = resources?.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource?.category === activeCategory;
    const matchesSearch = resource?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         resource?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         resource?.tags?.some(tag => tag?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (resourceId, title) => {
    // Simulate download
    alert(`Downloading: ${title}`);
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Library" size={16} />
            <span>Resource Library</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Partnership Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive resources, templates, and guides to support your partnership journey with Valu Africa.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e?.target?.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {resourceCategories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setActiveCategory(category?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === category?.id
                      ? 'bg-primary text-primary-foreground shadow-warm'
                      : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border'
                  }`}
                >
                  <Icon name={category?.icon} size={16} />
                  <span>{category?.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    activeCategory === category?.id
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {category?.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources?.map((resource) => (
              <div
                key={resource?.id}
                className={`bg-card rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-1 ${
                  resource?.featured 
                    ? 'border-primary shadow-warm' 
                    : 'border-border hover:border-primary/20'
                }`}
              >
                {/* Featured Badge */}
                {resource?.featured && (
                  <div className="inline-flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mb-4">
                    <Icon name="Star" size={12} />
                    <span>Featured</span>
                  </div>
                )}

                {/* Resource Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-foreground mb-2 line-clamp-2">
                      {resource?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {resource?.description}
                    </p>
                  </div>
                </div>

                {/* Resource Meta */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium text-foreground">{resource?.type}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Size:</span>
                    <span className="font-medium text-foreground">{resource?.size}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Downloads:</span>
                    <span className="font-medium text-foreground">{resource?.downloads?.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Updated:</span>
                    <span className="font-medium text-foreground">
                      {new Date(resource.lastUpdated)?.toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {resource?.tags?.slice(0, 3)?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {resource?.tags?.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{resource?.tags?.length - 3}
                    </span>
                  )}
                </div>

                {/* Download Button */}
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleDownload(resource?.id, resource?.title)}
                  iconName="Download"
                  iconPosition="left"
                  className={resource?.featured 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                  }
                >
                  Download Resource
                </Button>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredResources?.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                No resources found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;