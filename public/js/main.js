// Jupita Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      mobileMenuButton.setAttribute(
        'aria-expanded', 
        mobileMenuButton.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
      );
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
  
  // Reveal animations on scroll
  function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    const scaleElements = document.querySelectorAll('.scale-in');
    
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
    
    scaleElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }
  
  // Run once on load
  revealOnScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', revealOnScroll);
  
  // Track redirects
  const redirectLinks = document.querySelectorAll('a[href^="https://getjupita.com"], a[href^="https://app.getjupita.com"]');
  
  redirectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const originalHref = this.getAttribute('href');
      let apiEndpoint = '';
      
      if (originalHref.includes('app.getjupita.com')) {
        apiEndpoint = '/api/redirect/app';
      } else if (originalHref.includes('getjupita.com')) {
        apiEndpoint = '/api/redirect/jupita';
      }
      
      // Track redirect then navigate
      if (apiEndpoint) {
        fetch(apiEndpoint)
          .then(response => {
            // Redirect to original URL regardless of response
            window.location.href = originalHref;
          })
          .catch(error => {
            // If tracking fails, still redirect
            console.error('Redirect tracking error:', error);
            window.location.href = originalHref;
          });
      } else {
        // Fallback to direct navigation if no API endpoint
        window.location.href = originalHref;
      }
    });
  });
  
  // Create floating dots dynamically
  const createFloatingDots = () => {
    const dotsContainer = document.querySelector('.floating-dots');
    if (!dotsContainer) return;
    
    const dotCount = 5;
    const positions = [
      { top: '10%', left: '20%', size: '8px', duration: '13s' },
      { top: '70%', left: '80%', size: '12px', duration: '17s' },
      { top: '30%', left: '60%', size: '6px', duration: '15s' },
      { top: '60%', left: '30%', size: '10px', duration: '19s' },
      { top: '20%', left: '90%', size: '7px', duration: '14s' }
    ];
    
    positions.forEach((pos, index) => {
      const dot = document.createElement('div');
      dot.className = 'absolute rounded-full bg-white/20';
      dot.style.top = pos.top;
      dot.style.left = pos.left;
      dot.style.width = pos.size;
      dot.style.height = pos.size;
      dot.style.animation = `float ${pos.duration} ease-in-out infinite`;
      dot.style.animationDelay = `${index * 0.5}s`;
      
      dotsContainer.appendChild(dot);
    });
  };
  
  createFloatingDots();
});