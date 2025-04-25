import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              <span className="text-[hsl(var(--jupita-primary))] font-bold text-2xl">Jupita</span>
            </a>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <a 
              href="#features" 
              className="text-[hsl(var(--jupita-dark))] hover:text-[hsl(var(--jupita-primary))] transition px-3 py-2 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
              }}
            >
              Features
            </a>
            <a 
              href="#solutions" 
              className="text-[hsl(var(--jupita-dark))] hover:text-[hsl(var(--jupita-primary))] transition px-3 py-2 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('solutions');
              }}
            >
              Solutions
            </a>
            <a 
              href="#about" 
              className="text-[hsl(var(--jupita-dark))] hover:text-[hsl(var(--jupita-primary))] transition px-3 py-2 text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
            <a href="https://app.getjupita.com" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[hsl(var(--jupita-primary))] hover:bg-[hsl(var(--jupita-secondary))] transition shadow-md hover:shadow-lg">
              Sign Up
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[hsl(var(--jupita-dark))] hover:text-[hsl(var(--jupita-primary))] focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t border-gray-200 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#features" 
            className="block px-3 py-2 rounded-md text-base font-medium text-[hsl(var(--jupita-dark))] hover:text-[hsl(var(--jupita-primary))]"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('features');
            }}
          >
            Features
          </a>
          <a 
            href="#solutions" 
            className="block px-3 py-2 rounded-md text-base font-medium text-[hsl(var(--jupita-dark))] hover:text-[hsl(var(--jupita-primary))]"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('solutions');
            }}
          >
            Solutions
          </a>
          <a 
            href="#about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-[hsl(var(--jupita-dark))] hover:text-[hsl(var(--jupita-primary))]"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a 
            href="https://app.getjupita.com" 
            className="block mt-3 px-3 py-2 rounded-md text-base font-medium text-white bg-[hsl(var(--jupita-primary))] hover:bg-[hsl(var(--jupita-secondary))]"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
