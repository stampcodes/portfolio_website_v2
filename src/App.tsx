import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-scrollify";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import ContactForm from "./components/Contact/ContactForm";

const App: React.FC = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;

    if (!isMobile) {
      ($ as any).scrollify({
        section: ".section",
        scrollSpeed: 1800,
        offset: 0,
        scrollbars: false,
        setHeights: true,
        updateHash: true,
      });
    }

    return () => {
      if (!isMobile) {
        ($ as any).scrollify.destroy();
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="section">
          <Hero />
        </div>
        <div className="section">
          <About />
        </div>
        <div className="section">
          <Work />
        </div>
        <div className="section">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default App;
