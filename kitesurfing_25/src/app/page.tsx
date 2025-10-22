import Hero from './components/Hero';
import About from './components/About';
import Lesson from './components/Lesson';
import Location from './components/Location';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div>
      <Hero />
      <Lesson />
      <About />
      <Location />
      <Footer />
    </div>
  );
}
