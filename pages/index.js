import AboutContent from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import HeroContent from '../components/HeroSection';
import NavContent from '../components/NavSection';
import ProjectsContent from '../components/ProjectsSection';

export default function Home () {
  return (
    <div className="w-full">
      <NavContent />
      <HeroContent />
      <AboutContent />
      <ProjectsContent />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
