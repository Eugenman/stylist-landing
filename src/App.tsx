import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { AboutSection } from './components/sections/AboutSection';
import { AudienceSection } from './components/sections/AudienceSection';
import { CasesSection } from './components/sections/CasesSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { QuoteSection } from './components/sections/QuoteSection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { SupportSection } from './components/sections/SupportSection';

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AudienceSection />
      <AboutSection />
      <QuoteSection />
      <SkillsSection />
      <CasesSection />
      <SupportSection />
      <ProcessSection />
      <ExperienceSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
