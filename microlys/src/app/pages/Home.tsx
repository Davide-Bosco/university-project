import HeroSection from '../components/HeroSection';
import TrustBadges from '../components/TrustBadges';
import ContentSection from '../components/ContentSection';
import SolutionsGrid from '../components/SolutionsGrid';
import Testimonials from '../components/Testimonials';
import KnowledgeSection from '../components/KnowledgeSection';
import DemoRequestBanner from '../components/DemoRequestBanner';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />

      <TrustBadges />

      <ContentSection
        title="Soluzioni Pionieristiche"
        description="Nel panorama in continua evoluzione della tecnologia elettromeccanica, Microlys si distingue come leader nell'adozione di tecnologie pionieristiche per aziende in vari mercati. La nostra vasta esperienza, combinata con la nostra dedizione incrollabile, ci posiziona per guidare l'adozione diffusa delle soluzioni industriali più avanzate."
        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop"
        imageAlt="Pioneering Solutions"
        reverse={false}
      />

      <SolutionsGrid />

      <ContentSection
        title="Componenti di Precisione"
        description="Al centro delle nostre operazioni c'è la qualità. In Microlys abbiamo fatto passi significativi creando meticolosamente componenti all'avanguardia per dispositivi medici, macchine diagnostiche e strumenti di test. Le nostre tecnologie all'avanguardia soddisfano le esigenze uniche dell'intero ciclo di vita del prodotto."
        imageSrc="https://images.unsplash.com/photo-1581092918484-8313e1f7e8c7?w=1200&h=800&fit=crop"
        imageAlt="Crafting Components"
        reverse={true}
        background="gray"
      />

      <Testimonials />

      <KnowledgeSection />

      <DemoRequestBanner />

      <ContactSection />
    </>
  );
}
