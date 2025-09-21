import React, { useState } from 'react';
import { CalendarDays, Clock, Tag, ExternalLink, Search, Filter, TrendingUp, Users, Globe, Heart, Award, Sparkles } from 'lucide-react';
import Header from '../../components/ui/Header';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', icon: Globe, count: 12, color: 'bg-gradient-primary' },
    { id: 'impact', name: 'Impact Stories', icon: TrendingUp, count: 4, color: 'bg-gradient-success' },
    { id: 'community', name: 'Community', icon: Users, count: 3, color: 'bg-gradient-accent' },
    { id: 'culture', name: 'Cultural Heritage', icon: Heart, count: 3, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { id: 'development', name: 'Development', icon: Award, count: 2, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
  ];

  const posts = [
    {
      id: 1,
      title: "Valu Africa Foundation Champions The Africa We Want",
      excerpt: "Discover how our foundation is leading transformative change across the continent, promoting peace, unity, and sustainable development through innovative programs and community partnerships.",
      url: "https://www.citypeopleonline.com/valu-africa-foundation-champions-the-africa-we-want/",
      category: 'development',
      author: "Valu Africa Team",
      publishDate: "2024-01-15",
      readTime: "5 min read",
      featured: true,
      tags: ['Leadership', 'Sustainability', 'Peace Building'],
      image: '/src/assets/images/no_image.png'
    },
    {
      id: 2,
      title: "Empowering Youth Through Digital Innovation in Rural Communities",
      excerpt: "Our groundbreaking digital literacy program has reached over 10,000 young people across 15 African countries, equipping them with essential skills for the modern economy.",
      url: "https://www.facebook.com/share/v/1CymYJLQLx/",
      category: 'impact',
      author: "Sarah Mwangi",
      publishDate: "2024-01-10",
      readTime: "4 min read",
      featured: false,
      tags: ['Youth Empowerment', 'Digital Skills', 'Innovation'],
      image: '/src/assets/images/no_image.png'
    },
    {
      id: 3,
      title: "Celebrating African Cultural Heritage: A Journey Through Traditions",
      excerpt: "From ancient storytelling traditions to modern artistic expressions, explore how we're preserving and promoting the rich cultural diversity that makes Africa unique.",
      url: "https://www.facebook.com/share/p/15mpRycg7g/",
      category: 'culture',
      author: "Dr. Amina Diallo",
      publishDate: "2024-01-08",
      readTime: "6 min read",
      featured: false,
      tags: ['Cultural Heritage', 'Traditions', 'Art'],
      image: '/src/assets/images/no_image.png'
    },
    {
      id: 4,
      title: "Building Sustainable Communities: Our Holistic Approach",
      excerpt: "Learn about our integrated community development model that addresses education, healthcare, economic empowerment, and environmental sustainability simultaneously.",
      url: "https://www.facebook.com/share/p/1Ncy1CttV9/",
      category: 'community',
      author: "Marcus Ochieng",
      publishDate: "2024-01-05",
      readTime: "7 min read",
      featured: false,
      tags: ['Community Development', 'Sustainability', 'Holistic Approach'],
      image: '/src/assets/images/no_image.png'
    },
    {
      id: 5,
      title: "The Power of Partnership: Collaborating for Greater Impact",
      excerpt: "Discover how strategic partnerships with local organizations, governments, and international bodies are amplifying our impact across the continent.",
      url: "https://www.facebook.com/share/p/1B2yTLS9Zf/",
      category: 'impact',
      author: "Grace Nkosi",
      publishDate: "2024-01-03",
      readTime: "5 min read",
      featured: false,
      tags: ['Partnerships', 'Collaboration', 'Impact'],
      image: '/src/assets/images/no_image.png'
    },
    {
      id: 6,
      title: "Women Leading Change: Stories of Transformation",
      excerpt: "Meet the remarkable women who are driving positive change in their communities through our leadership development and entrepreneurship programs.",
      category: 'community',
      author: "Fatima Hassan",
      publishDate: "2023-12-28",
      readTime: "6 min read",
      featured: false,
      tags: ['Women Empowerment', 'Leadership', 'Entrepreneurship'],
      image: '/src/assets/images/no_image.png'
    },
    {
      id: 7,
      title: "Environmental Stewardship: Protecting Africa's Natural Resources",
      excerpt: "Explore our environmental conservation initiatives and how communities are becoming guardians of their local ecosystems for future generations.",
      category: 'development',
      author: "David Kiprop",
      publishDate: "2023-12-25",
      readTime: "5 min read",
      featured: false,
      tags: ['Environment', 'Conservation', 'Sustainability'],
      image: '/src/assets/images/no_image.png'
    },
    {
      id: 8,
      title: "Education for All: Breaking Barriers to Learning",
      excerpt: "From mobile learning units to community libraries, discover innovative approaches that are making quality education accessible to every child.",
      category: 'impact',
      author: "Prof. Kwame Asante",
      publishDate: "2023-12-20",
      readTime: "4 min read",
      featured: false,
      tags: ['Education', 'Innovation', 'Accessibility'],
      image: '/src/assets/images/no_image.png'
    },
    {
      id: 9,
      title: "Preserving Indigenous Knowledge: Wisdom for the Future",
      excerpt: "How traditional knowledge systems are being documented and integrated with modern approaches to create sustainable solutions for contemporary challenges.",
      category: 'culture',
      author: "Elder Muthoni Wanjiku",
      publishDate: "2023-12-18",
      readTime: "7 min read",
      featured: false,
      tags: ['Indigenous Knowledge', 'Tradition', 'Innovation'],
      image: '/src/assets/images/no_image.png'
    },
    {
      id: 10,
      title: "Economic Empowerment: Creating Sustainable Livelihoods",
      excerpt: "From micro-enterprises to cooperative farming, explore how we're building economic resilience in communities across Africa.",
      category: 'community',
      author: "Dr. Emmanuel Osei",
      publishDate: "2023-12-15",
      readTime: "5 min read",
      featured: false,
      tags: ['Economic Development', 'Livelihoods', 'Resilience'],
      image: '/src/assets/images/no_image.png'
    },
    {
      id: 11,
      title: "Health and Wellness: Building Stronger Communities",
      excerpt: "Our comprehensive health programs are addressing both physical and mental well-being, creating healthier, more productive communities.",
      category: 'impact',
      author: "Dr. Aisha Bello",
      publishDate: "2023-12-12",
      readTime: "6 min read",
      featured: false,
      tags: ['Healthcare', 'Wellness', 'Community Health'],
      image: '/src/assets/images/no_image.png'
    },
    {
      id: 12,
      title: "Technology for Good: Digital Solutions in Rural Africa",
      excerpt: "How cutting-edge technology is being adapted for rural contexts, bringing connectivity, education, and economic opportunities to remote communities.",
      category: 'development',
      author: "Tech Team",
      publishDate: "2023-12-10",
      readTime: "5 min read",
      featured: false,
      tags: ['Technology', 'Rural Development', 'Innovation'],
      image: '/src/assets/images/no_image.png'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Helmet>
        <title>ValUAfrica Media</title>
        <meta name="description" content="ValUAfrica Media – insights, impact, and stories from across Africa. Explore initiatives, culture, development, and the people powering change." />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f59e0b%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Latest Stories & Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-accent font-bold text-gradient-primary mb-6 leading-tight">
              ValUAfrica Media
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Insights, impact, and stories from across Africa. Explore initiatives, culture, development, and the people powering change.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                12 Stories
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                15 Countries
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                10,000+ Lives Impacted
              </span>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="px-4 py-12 max-w-7xl mx-auto">
          <div className="card-modern-component p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all hover:scale-105 font-medium ${
                      selectedCategory === category.id
                        ? `${category.color} text-white border-transparent shadow-lg`
                        : 'bg-white text-gray-700 border-gray-200 hover:border-primary/50 hover:shadow-md'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm">{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {filteredPosts.filter(post => post.featured).length > 0 && (
          <section className="px-4 py-12 max-w-7xl mx-auto">
            <div className="card-modern-component p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured Story
                </span>
                <span className="text-gray-500 text-sm">• {formatDate(filteredPosts.filter(post => post.featured)[0]?.publishDate)}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-accent font-bold text-gradient-primary mb-6 leading-tight">
                {filteredPosts.filter(post => post.featured)[0]?.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl">
                {filteredPosts.filter(post => post.featured)[0]?.excerpt}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {filteredPosts.filter(post => post.featured)[0]?.tags.map((tag, index) => (
                  <span key={index} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {filteredPosts.filter(post => post.featured)[0]?.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {filteredPosts.filter(post => post.featured)[0]?.readTime}
                  </span>
                </div>
                <a
                  href={filteredPosts.filter(post => post.featured)[0]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern"
                >
                  Read Full Story
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="px-4 py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="card-modern-component overflow-hidden group">
                {/* Image header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={post.image?.startsWith('/src/') ? post.image.replace('/src/', '/assets/') : post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.src = '/assets/images/no_image.png'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      post.category === 'impact' ? 'bg-gradient-success' :
                      post.category === 'community' ? 'bg-gradient-accent' :
                      post.category === 'culture' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                      'bg-gradient-to-r from-blue-500 to-cyan-500'
                    }`}>
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <span>{formatDate(post.publishDate)}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gradient-primary transition-all line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      {post.author}
                    </span>
                    
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gradient-primary transition-all group-hover:gap-3"
                    >
                      Read More
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-4 py-20 max-w-4xl mx-auto">
          <div className="card-modern-component p-12 text-center bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Stay Connected
            </div>
            <h3 className="text-3xl font-accent font-bold text-gradient-primary mb-4">
              Stay Connected with ValUAfrica Media
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest updates on our impact, community stories, and cultural initiatives delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
              />
              <button className="btn-modern px-8 py-4">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
