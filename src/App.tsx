/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Heritage from './components/Heritage';
import Gallery from './components/Gallery';
import Materials from './components/Materials';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Heritage />
        <Gallery />
        <Materials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
