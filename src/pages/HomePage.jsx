import Header from '../components/Header';
import MainSection from '../components/MainSection';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';
import ContactSection from '../components/ContactSection';
import ReturnTop from '../components/ReturnTop';
import Skills from '../components/Skills';
import Overview from '../components/Overview';
import ProjectShowcase from '../components/ProjectShowcase';

function HomePage() {
  return (
    <div className="wrap">
      <Header />
      <MainSection />
      <AboutSection />
      <Skills />
      <ProjectShowcase />
      <Overview />
      <ContactSection />
      <ReturnTop />
    </div>
  );
}

export default HomePage;
