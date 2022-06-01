import AboutContent from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import HeroContent from '../components/HeroSection';
import NavContent from '../components/nav/NavSection';
import ProjectsContent from '../components/ProjectsSection';
import NavContext, {NavProvider} from '../lib/NavContext';
import {motion} from 'framer-motion';
import {useContext} from 'react';
import BurgerButton from '../components/nav/BurgerButton';
import FloatingNav from '../components/nav/FloatingNav';

export default function Home () {
  const {isVisible} = useContext (NavContext);
  return (
    <NavProvider>
      <div className="w-full">
        <NavContent />
        <FloatingNav />
        <HeroContent />
        <AboutContent />
        <ProjectsContent />
        <ContactSection />
        <FooterSection />
      </div>
    </NavProvider>
  );
}
