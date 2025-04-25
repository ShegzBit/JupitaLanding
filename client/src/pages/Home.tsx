import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollingBrands from "@/components/ScrollingBrands";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  // Set page title and meta data
  return (
    <>
      <Helmet>
        <title>Jupita - Fintech Solutions for Microfinance Banks</title>
        <meta name="description" content="Jupita delivers tailored SaaS platforms for microfinance banks to streamline loan origination, customer onboarding, and credit risk assessment." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <div className="overflow-x-hidden font-sans">
        <Navbar />
        <Hero />
        <ScrollingBrands />
        <Features />
        <Solutions />
        <About />
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default Home;
