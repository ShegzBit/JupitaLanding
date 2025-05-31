import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient"; // Assuming this path is correct
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster"; // Assuming this path is correct
import NotFound from "@/pages/not-found"; // Assuming this path is correct
import Home from "@/pages/Home"; // Assuming this path is correct
import PrivacyPolicy from "@/pages/PrivacyPolicy"; // Assuming this path is correct
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      {/* <Route path="/home" component={Home} /> Removed redundant route */}
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Initialize reveal animations
    // For improved performance on complex pages or with many animated elements,
    // consider using the IntersectionObserver API instead of querying the DOM on every scroll event.
    const checkReveal = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150; // Element becomes active when its top is within `revealPoint`px from the bottom of the viewport

      // Query elements that haven't been activated yet to potentially reduce query scope on subsequent calls
      document
        .querySelectorAll(".reveal:not(.active), .scale-in:not(.active)")
        .forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;

          if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
          }
        });
    };

    // Check on page load
    checkReveal();

    // Check on scroll
    window.addEventListener("scroll", checkReveal, { passive: true }); // Added passive: true for potentially smoother scrolling

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", checkReveal);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;