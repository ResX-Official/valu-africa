import AfricanCuisineSpotlight from '../../components/AfricanCuisineSpotlight';
import AfricanInnovatorSpotlight from '../../components/AfricanInnovatorSpotlight';
import AfricanAttireGallery from '../../components/AfricanAttireGallery';
import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionVisionSection from './components/MissionVisionSection';
import LeadershipSection from './components/LeadershipSection';
import TransparencySection from './components/TransparencySection';
import RecognitionSection from './components/RecognitionSection';
import TimelineSection from './components/TimelineSection';
import CareersSection from './components/CareersSection';
import ContactSection from './components/ContactSection';
import AfricaFacts from '../../components/AfricaFacts';
import AfricanProverb from '../../components/AfricanProverb';
import TrendingAfricanNews from '../../components/TrendingAfricanNews';
import FeaturedAfricanArtist from '../../components/FeaturedAfricanArtist';
import AfricanLanguageOfTheDay from '../../components/AfricanLanguageOfTheDay';
import OrganizationOverview from './components/OrganizationOverview';
import Objectives from './components/Objectives';
import MediaShowcase from './components/MediaShowcase';
import FounderMessage from './components/FounderMessage';
import Reveal from '../../components/Reveal';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen app-bg">
      <Header />
      
      <main className="pt-16">
        <Reveal><HeroSection /></Reveal>
        <Reveal delay={50}><OrganizationOverview /></Reveal>
        <Reveal delay={100}><MissionVisionSection /></Reveal>
        <Reveal delay={150}><Objectives /></Reveal>
        <Reveal delay={200}><MediaShowcase /></Reveal>
        <Reveal delay={250}><LeadershipSection /></Reveal>
        <Reveal delay={300}><TransparencySection /></Reveal>
        <Reveal delay={350}><RecognitionSection /></Reveal>
        <Reveal delay={400}><TimelineSection /></Reveal>
        <Reveal delay={450}><FounderMessage /></Reveal>
  <CareersSection />
  <AfricanProverb />
  <FeaturedAfricanArtist />
  <AfricanLanguageOfTheDay />
  <TrendingAfricanNews />
  <AfricaFacts />
  <AfricanCuisineSpotlight />
  <AfricanInnovatorSpotlight />
  <AfricanAttireGallery />
  <ContactSection />
      </main>
    </div>
  );
};

export default AboutUsPage;