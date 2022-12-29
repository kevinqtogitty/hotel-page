import React from 'react';
import rooftop from '../assets/pictures/magazine/rooftop_1.webp';

import './Magazine.css';

const Magazine = () => {
  return (
    <section className="magazine-section">
      <div className="magazine-header-container">
        <h2 className="magazine-h2-mobile">HURON MAG</h2>
        <div className="magazine-image-text-container">
          <div className="image-wrapper">
            <img className="rooftop" src={rooftop} alt="" />
          </div>
          <article className="magazine-text">
            <h2 className="magazine-h2-desktop">HURON MAG</h2>
            <h3 className="magazine-h3">TOP 10 CITY ATTRACTIONS IN ŁÓDŹ</h3>
            <p className="magazine-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur corrupti quaerat consequuntur, voluptas autem delectus
              temporibus obcaecati minus, optio accusamus odit recusandae
              explicabo ut hic pariatur? Fugit, quibusdam sit. Expedita!
            </p>
            <span>Find out more...</span>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Magazine;
