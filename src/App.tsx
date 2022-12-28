import { MutableRefObject, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import Navigation from './components/Navigation';
import About from './page_sections/About';
import BookOnline from './page_sections/BookOnline';
import Hero from './page_sections/Hero';

function App() {
  const ref = useRef<HTMLElement>(null);
  const observer = new IntersectionObserver((position) =>
    console.log(position)
  );
  return (
    <>
      <div className="background" />
      <Navigation blah={observer} sectionRef={ref} />
      <Hero />
      <About ref={ref} />
      <BookOnline />
    </>
  );
}

export default App;
