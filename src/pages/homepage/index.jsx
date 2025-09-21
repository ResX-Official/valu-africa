import AfricanInnovatorSpotlight from '../../components/AfricanInnovatorSpotlight';
import AfricanAttireGallery from '../../components/AfricanAttireGallery';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroCarousel from './components/HeroCarousel';
import ImpactDashboard from './components/ImpactDashboard';
import VoicesOfAfrica from './components/VoicesOfAfrica';
import CulturalMap from './components/CulturalMap';
import AfricaFacts from '../../components/AfricaFacts';
import AfricanProverb from '../../components/AfricanProverb';
import CallToAction from './components/CallToAction';
import Reveal from '../../components/Reveal';
import Icon from '../../components/AppIcon';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Valentine Uminuke Foundation - Empowering Communities Across Africa</title>
        <meta 
          name="description" 
          content="Join ValUAfrica in creating lasting change across the continent. Support education, healthcare, conservation, and economic empowerment initiatives that transform communities." 
        />
        <meta name="keywords" content="Africa development, NGO, community empowerment, education, healthcare, conservation, African initiatives" />
        <meta property="og:title" content="ValUAfrica - Empowering Communities Across Africa" />
        <meta property="og:description" content="Creating lasting change through education, healthcare, and community empowerment across Africa." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>
      <div className="min-h-screen app-bg">
        <Header />
        
        <main>
          {/* Hero Section with Rotating Stories */}
          <Reveal>
            <HeroCarousel />
          </Reveal>
          
          {/* Real-time Impact Dashboard */}
          <Reveal delay={50}>
            <ImpactDashboard />
          </Reveal>
          
          {/* Authentic Testimonials */}
          <Reveal delay={100}>
            <VoicesOfAfrica />
          </Reveal>
          
          {/* Interactive Cultural Map */}
          <Reveal delay={150}>
            <CulturalMap />
          </Reveal>
          

          {/* Our Core Focus Areas */}
          <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Icon name="Heart" size={20} />
                  Our Mission
                </div>
                <h2 className="text-4xl md:text-5xl font-accent font-bold text-gradient-primary mb-6 leading-tight">
                  Transforming Lives Across Africa
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Through focused initiatives in medical outreach, peace promotion, and community empowerment, 
                  we're creating lasting change across the African continent.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {/* Medical Outreach */}
                <div className="card-modern-component p-8 text-center group hover-lift">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Heart" size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Outreach</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Providing essential healthcare services to underserved communities, 
                    mobile clinics, health education, and emergency medical support across Africa.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                    <Icon name="Users" size={16} />
                    <span>50,000+ Lives Reached</span>
                  </div>
                </div>

                {/* Promotion of Peace */}
                <div className="card-modern-component p-8 text-center group hover-lift">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Shield" size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Promotion of Peace</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Building bridges between communities, promoting dialogue, conflict resolution, 
                    and fostering unity through cultural exchange and understanding.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                    <Icon name="Globe" size={16} />
                    <span>25+ Communities United</span>
                  </div>
                </div>

                {/* Empowerment */}
                <div className="card-modern-component p-8 text-center group hover-lift">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="TrendingUp" size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowerment</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Empowering individuals and communities through education, skills training, 
                    economic opportunities, and leadership development programs.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                    <Icon name="Star" size={16} />
                    <span>10,000+ Empowered</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Organization Intro */}
          <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  <span className="text-gradient-primary">Valentine Unimuke Foundation</span>
              </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                A Pan-African NGO advancing healthcare, education, peace, youth empowerment, entrepreneurship,
                cultural preservation, and sustainable development across Africa.
              </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/about-us" className="btn-modern">Learn More</Link>
                  <Link to="/donate" className="btn-modern">Support Our Work</Link>
                </div>
              </div>

              {/* Foundation Details */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="card-modern-component p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Heart" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To create sustainable impact across Africa through innovative programs that empower communities, 
                    preserve cultural heritage, and foster economic development.
                  </p>
                </div>

                <div className="card-modern-component p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Target" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A united Africa where every community has access to quality education, healthcare, 
                    and economic opportunities while preserving their rich cultural identity.
                  </p>
                </div>

                <div className="card-modern-component p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Globe" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Impact</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Since 2024, we've reached over 5,000 beneficiaries across 15 African countries, 
                    investing $1000 in community development and cultural preservation initiatives.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="Users" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Community First</h4>
                    <p className="text-sm text-gray-600">Every decision is made with our communities at the heart</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="Shield" size={24} className="text-accent" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Transparency</h4>
                    <p className="text-sm text-gray-600">Complete openness in all our operations and impact</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="Leaf" size={24} className="text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sustainability</h4>
                    <p className="text-sm text-gray-600">Building programs that last for generations</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name="Star" size={24} className="text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                    <p className="text-sm text-gray-600">Striving for the highest standards in everything we do</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* African Proverb Section */}
          <AfricanProverb />

          {/* Young African Innovator */}
          <AfricanInnovatorSpotlight />

          {/* Traditional Attire Gallery */}
          <AfricanAttireGallery />

          {/* Peace and Unity Section */}
          <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Icon name="Shield" size={20} />
                  Peace & Unity
                </div>
                <h2 className="text-4xl md:text-5xl font-accent font-bold text-gradient-accent mb-6 leading-tight">
                  Building Bridges Across Africa
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  We believe that lasting peace begins with understanding, dialogue, and mutual respect. 
                  Our peace initiatives bring together communities, leaders, and nations across Africa.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* Inter-Community Dialogue */}
                <div className="card-modern-component p-8 text-center group hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Users" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Inter-Community Dialogue</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Facilitating conversations between different ethnic groups, religious communities, 
                    and cultural groups to build understanding and resolve conflicts peacefully.
                  </p>
                </div>

                {/* Cross-Border Cooperation */}
                <div className="card-modern-component p-8 text-center group hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Globe" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Cross-Border Cooperation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Promoting regional integration and cooperation between African nations through 
                    joint development projects, cultural exchanges, and diplomatic initiatives.
                  </p>
                </div>

                {/* Youth Peace Ambassadors */}
                <div className="card-modern-component p-8 text-center group hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Heart" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Youth Peace Ambassadors</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Training young leaders from across Africa to become peace advocates, 
                    conflict mediators, and agents of positive change in their communities.
                  </p>
                </div>
              </div>

              {/* Peace Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-sm text-gray-600">Nations Engaged</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                  <div className="text-sm text-gray-600">Peace Dialogues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Youth Ambassadors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Conflict Resolution Rate</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="card-modern-component p-8 bg-gradient-to-r from-blue-500/10 to-green-500/10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Join Our Peace Movement
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Together, we can build a more peaceful and united Africa. 
                    Every conversation, every understanding, every bridge we build brings us closer to lasting peace.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/get-involved" className="btn-modern">
                      Become a Peace Ambassador
                    </Link>
                    <Link to="/donate" className="btn-modern bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                      Support Peace Initiatives
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ValUAfrica Blog Section */}
          <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Icon name="BookOpen" size={20} />
                  Latest Stories
                </div>
                <h2 className="text-4xl md:text-5xl font-accent font-bold text-gradient-primary mb-6 leading-tight">
                  ValUAfrica Media
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Discover inspiring stories, insights, and updates from our work across Africa. 
                  Stay connected with our impact and the communities we serve.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {/* Featured Blog Post */}
                <div className="lg:col-span-2 card-modern-component overflow-hidden group hover-lift">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                      alt="Medical outreach in rural communities"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured Story
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">Bringing Healthcare to Remote Villages</h3>
                      <p className="text-gray-200 text-sm">How our mobile medical units are transforming lives in underserved communities across West Africa.</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        Dec 15, 2024
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        5 min read
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Our latest medical outreach program has reached over 2,000 people in remote villages, 
                      providing essential healthcare services and health education to communities that have never had access before.
                    </p>
                    <Link to="/blog" className="text-primary font-semibold hover:text-gradient-primary transition-colors">
                      Read Full Story →
                    </Link>
                  </div>
                </div>

                {/* Side Blog Posts */}
                <div className="space-y-6">
                  <div className="card-modern-component p-6 group hover-lift">
                    <div className="flex gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop"
                        alt="Peace dialogue session"
                        className="w-20 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-gradient-primary">
                          Building Bridges Through Dialogue
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Our latest peace initiative brings together community leaders from across the region.
                        </p>
                        <span className="text-xs text-gray-500">Dec 12, 2024</span>
                      </div>
                    </div>
                  </div>

                  <div className="card-modern-component p-6 group hover-lift">
                    <div className="flex gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1506905925346-14b1e0d0fb89?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop"
                        alt="Youth empowerment program"
                        className="w-20 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-gradient-primary">
                          Empowering the Next Generation
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Young leaders are being trained to drive positive change in their communities.
                        </p>
                        <span className="text-xs text-gray-500">Dec 10, 2024</span>
                      </div>
                    </div>
                  </div>

                  <div className="card-modern-component p-6 group hover-lift">
                    <div className="flex gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=compress&cs=tinysrgb&w=200&h=120&fit=crop"
                        alt="Cultural preservation"
                        className="w-20 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-gradient-primary">
                          Preserving African Heritage
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          New initiatives to document and preserve traditional knowledge and practices.
                        </p>
                        <span className="text-xs text-gray-500">Dec 8, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Link to="/blog" className="btn-modern">
                  View All Stories
                </Link>
              </div>
            </div>
          </section>

          {/* Africa Facts Section */}
          <AfricaFacts />

          {/* Call to Action */}
          <CallToAction />
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gradient-primary">
                      Valentine Uminuke Foundation
                    </h3>
                    <p className="text-xs text-gray-400">
                      Empowering Communities
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Creating lasting change through education, healthcare, conservation, and economic empowerment across Africa.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about-us" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="/blog" className="text-gray-300 hover:text-primary transition-colors">ValUAfrica Media</a></li>
                  <li><a href="/get-involved" className="text-gray-300 hover:text-primary transition-colors">Get Involved</a></li>
                  <li><a href="/partnership-portal" className="text-gray-300 hover:text-primary transition-colors">Partnerships</a></li>
                </ul>
              </div>

              {/* Programs */}
              <div>
                <h4 className="font-semibold text-white mb-4">Our Programs</h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-gray-300">Education & Skills</span></li>
                  <li><span className="text-gray-300">Healthcare Access</span></li>
                  <li><span className="text-gray-300">Conservation</span></li>
                  <li><span className="text-gray-300">Economic Empowerment</span></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-white mb-4">Connect</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">info@valunimuke.org</p>
                  <p className="text-gray-300">+234 (0) 123-456-7890</p>
                  <div className="flex space-x-3 mt-4">
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-sm text-gray-400">
                © {new Date()?.getFullYear()} Valentine Unimuke Foundation. All rights reserved. | 
                <a href="#" className="hover:text-primary transition-colors ml-1">Privacy Policy</a> | 
                <a href="#" className="hover:text-primary transition-colors ml-1">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;