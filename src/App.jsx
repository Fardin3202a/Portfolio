import React from 'react';
import Main from './Components/Main';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Navbar from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
