import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import WhatsIncluded from './components/WhatsIncluded';
import Pricing from './components/Pricing';
import WhoItsFor from './components/WhoItsFor';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <WhatsIncluded />
        <Pricing />
        <WhoItsFor />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
