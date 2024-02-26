import Blog from "../component/Blog";
import Faq from "../component/Faq";
import GetStarted from "../component/GetStarted";
import HeroSection from "../component/HeroSection";
import OurResult from "../component/OurResult";
import OurStrategy from "../component/OurStrategy";
import SecondSection from "../component/SecondSection";
import Services from "../component/Services";
import Specialised from "../component/Specialised";

const Home = () => {
  return (
    <>
     
      <HeroSection/>
      <SecondSection/>
      <Services/>
      <GetStarted/>
      <OurResult/>
      <Specialised/>
      <OurStrategy/>
      <Faq/>
      <Blog/>
      
    </>
  )
}

export default Home