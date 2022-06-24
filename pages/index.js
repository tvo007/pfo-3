import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import HeroContent from '../components/HeroSection';
import NavContent from '../components/nav/NavSection';
import {NavProvider} from '../lib/NavContext';
import {AboutSection, ProjectsSection} from '../components';
import FloatingNav from '../components/nav/FloatingNav';

export default function Home () {
  // const {isVisible} = useContext (NavContext);
  return (
    <NavProvider>
      <div className="w-full">
        <NavContent />
        <FloatingNav />
        <HeroContent />
        {/* <AboutContent />
        */}
        <AboutSection />
        {/* <ProjectsContent /> */}

        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </NavProvider>
  );
}
