import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Navigation from './components/Navigation';
import Hero from './page_sections/Hero';

function App() {
  return (
    <>
      <div className="background" />
      <Navigation />
      <Hero />
    </>
  );
}

export default App;
