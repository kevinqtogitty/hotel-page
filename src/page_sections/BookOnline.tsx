import React from 'react';
import inBed from '../assets/pictures/discount/discount_1.webp';

import './BookOnline.css';

const BookOnline = () => {
  return (
    <section className="book-online-container">
      <img className="book-online-desktop-img" src={inBed} alt="" />
      <div className="book-online-text">
        <h2>15% DISCOUNT ON THE HURON WEBSITE</h2>
        <img className="book-online-mobile-img" src={inBed} alt="" />

        <p>
          Book directly through our website and get up to 15% discount and
          access to city guides curated by local experts.
        </p>
        <span>Book now</span>
      </div>
    </section>
  );
};

export default BookOnline;
