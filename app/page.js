
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Services from "./components/homepage/services";



export default async function Home() {
 
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Services />     
      <Education />      
      <ContactSection />
    </>
  )
};