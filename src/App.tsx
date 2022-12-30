import React, { useRef } from 'react';
import Navigation from './components/Navigation';
import About from './page_sections/About';
import BookOnline from './page_sections/BookOnline';
import FAQ from './page_sections/FAQ';
import Footer from './page_sections/Footer';
import GiftShop from './page_sections/GiftShop';
import Hero from './page_sections/Hero';
import Magazine from './page_sections/Magazine';
import MobileBookingFooter from './page_sections/MobileBookingFooter';
import Rooms from './page_sections/Rooms';

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
      <Magazine />
      <GiftShop />
      <Rooms />
      <FAQ />
      <Footer />
      <MobileBookingFooter />
    </>
  );
}

export default App;
