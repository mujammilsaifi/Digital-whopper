import Base from "./component/Base";
import React,{useEffect} from "react";
import {Routes,Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import WebDevelopment from "./pages/WebDevelopment";
import SEO from "./pages/SEO";
import SocialMedia from "./pages/SocialMedia";
import Ecommerce from "./pages/Ecommerce";
import PPCmarketing from "./pages/PPCmarketing";
import Software from "./pages/Software";
import Android from "./pages/Android";
import ProductDevelopment from "./pages/ProductDevelopment";
import Career from "./pages/Career";
import ApplyForm from "./pages/ApplyForm";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CompanyPolicy from "./pages/CompanyPolicy";
import Founder from "./pages/Founder";
import PageNotFoud from "./pages/PageNotFoud";
import Blogpage from "./pages/Blogpage.js";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2.js";
import Blog3 from "./pages/Blog3.js";
import Blog4 from "./pages/Blog4.js";

function App() {
  const {pathname}=useLocation();
  useEffect(() => {
   window.scrollTo(0,0);
  }, [pathname])
  return (  
    <Base>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="about"  element={<About/>}/> 
        <Route path="contact"  element={<Contact/>}/>
        <Route path="portfolio"  element={<Portfolio/>}/>
        <Route path="web-development"  element={<WebDevelopment/>}/> 
        <Route path="seo"  element={<SEO/>}/>
        <Route path="social-media-marketing"  element={<SocialMedia/>}/>
        <Route path="e-commerce-marketing"  element={<Ecommerce/>}/>
        <Route path="ppc-marketing"  element={<PPCmarketing/>}/>
        <Route path="software-development"  element={<Software/>}/>
        <Route path="mobile-app-development"  element={<Android/>}/>
        <Route path="product-development"  element={<ProductDevelopment/>}/>
        <Route path="career"  element={<Career/>}/>
        <Route path="apply"  element={<ApplyForm/>}/>
        <Route path="privacy-policy"  element={<PrivacyPolicy/>}/>
        <Route path="company-policy"  element={<CompanyPolicy/>}/>
        <Route path="our-founder"  element={<Founder/>}/>
        <Route path="blog"  element={<Blogpage/>}/>
        <Route path="The-Future-of-Digital-Marketing-Emerging-Trends-to-Watch"  element={<Blog1/>}/>
        <Route path="strategies-for-social-media-marketing-on-a-limited-budget"  element={<Blog2/>}/>
        <Route path="how-to-create-lms-learning-management-system-from-scratch-a-complete-2024-guide"  element={<Blog3/>}/>
        <Route path="crafting-high-impact-ppc-campaigns-digital-marketing-success"  element={<Blog4/>}/>
        <Route path="/*"  element={<PageNotFoud/>}/>
      </Routes>
    </Base> 

   
   
  );
}

export default App;
