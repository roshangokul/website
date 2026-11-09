import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import Hero from './Hero';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
