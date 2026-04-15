import { HeroSection } from '@/components/sections/HeroSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { QualitySection } from '@/components/sections/QualitySection';
import { QuizSection } from '@/components/sections/QuizSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { FinalLeadSection } from '@/components/sections/FinalLeadSection';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CatalogSection />
      <WhyUsSection />
      <QualitySection />
      <QuizSection />
      <TrustSection />
      <ReviewsSection />
      <FinalLeadSection />
      <Footer />
    </main>
  );
}
