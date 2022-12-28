import React, { ForwardedRef } from 'react';
import hands from '../assets/pictures/about/hands_1.webp';
import redCouch from '../assets/pictures/about/interior_1.webp';
import cinema from '../assets/pictures/about/interior_2.webp';
import lounge from '../assets/pictures/about/interior_3.webp';

import './About.css';

// interface Props {
//   ref: React.MutableRefObject<undefined>;
// }

const About = React.forwardRef((props, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} className="about-section-container">
      <article className="about-article-1">
        <div className="about-content-container-1">
          <h2>UNIQUE</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              voluptatibus minus rem aspernatur harum nobis facere provident
              eveniet quidem, cum perspiciatis repellendus tempore officiis
              incidunt adipisci quisquam! Id, adipisci voluptates.
            </p>
            <span>Discover Huron...</span>
          </div>
        </div>
        <div className="about-image-container">
          <img className="square-photo" src={cinema} alt="Hotel cinema" />
          <img className="square-photo" src={lounge} alt="Lounge area" />
        </div>
      </article>
      <article className="about-article-2">
        <div className="about-content-container-2">
          <h2>IN THE CENTER</h2>
          <div className="about-image-container-2">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                voluptatibus minus rem aspernatur harum nobis facere provident
                eveniet quidem, cum perspiciatis repellendus tempore officiis
                incidunt adipisci quisquam! Id, adipisci voluptates.
              </p>
              <span>See our location...</span>
            </div>
            <img
              className="square-photo hands"
              src={hands}
              alt="Woman with bike and hotel coffee"
            />
          </div>
        </div>
        <img
          className="square-photo couch"
          src={redCouch}
          alt="Woman with bike and hotel coffee"
        />
      </article>
    </section>
  );
});

export default About;
