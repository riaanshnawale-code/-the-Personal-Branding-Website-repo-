import React from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-purple-100 selection:text-purple-900 scroll-smooth">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <div id="portfolio">
          <Projects />
        </div>
        <Testimonials />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;