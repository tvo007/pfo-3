import AboutContent from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import HeroContent from '../components/HeroSection';
import NavContent from '../components/nav/NavSection';
import ProjectsContent from '../components/ProjectsSection';
import {NavProvider} from '../lib/NavContext';

export default function Home () {
  return (
    <NavProvider>
      <div className="w-full">
        <NavContent />
        <HeroContent />
        <AboutContent />
        <ProjectsContent />
        <ContactSection />
        <FooterSection />
      </div>
    </NavProvider>
  );
}
