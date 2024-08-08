// import CustomCursor from './components/CustomCursor';
import { Navbar } from "./components/Navbar";
import { ParallaxSlider } from "./components/ParallaxSlider";
import AboutSection from "./components/AboutSection";
import FeaturedService from "./components/FeatureService";
import ServiceSlider from "./components/ServiceSlider";
import CounterSection from './components/CounterSection';
import Testimonials from "./components/Testimonials";
import BlogSlider from "./components/BlogSlider";
import { Technology } from './components/Technology';
// import { LastContent } from "./components/LastContent";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* <CustomCursor/> */}
      <Navbar/>
      <ParallaxSlider/>
      <ServiceSlider/>
      <FeaturedService/>
      {/* <AboutSection/> */}
      <BlogSlider/>
      <Technology/>
      <CounterSection/>
      <Testimonials/>
      {/* <LastContent/> */}
      <Footer/>
    </>
  );
}
