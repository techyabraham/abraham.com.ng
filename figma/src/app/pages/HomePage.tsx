import { HeroSection } from '@/app/components/HeroSection';
import { PathSelection } from '@/app/components/PathSelection';
import { StackSection } from '@/app/components/StackSection';
import { FeaturedWork } from '@/app/components/FeaturedWork';
import { WritingSection } from '@/app/components/WritingSection';
import { BooksSection } from '@/app/components/BooksSection';
import { SpeakingSection } from '@/app/components/SpeakingSection';
import { LabSection } from '@/app/components/LabSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PathSelection />
      <StackSection />
      <FeaturedWork />
      <WritingSection />
      <BooksSection />
      <SpeakingSection />
      <LabSection />
      <ContactSection />
      <Footer />
    </>
  );
}
