import { Footer } from './components/layout/Footer';
import { AboutSection } from './components/sections/AboutSection';
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
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <CasesSection />
      <QuoteSection />
      <SupportSection />
      <ProcessSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
