import React from 'react';
import room from '../assets/pictures/rooms/rooms_1.webp';

import './Rooms.css';

const Rooms = () => {
  return (
    <section className="rooms-section">
      <img className="rooms-img" src={room} alt="" />
      <article className="rooms-article">
        <div className="rooms-main-desc">
          <h2 className="rooms-main-h2">ROOMS</h2>
          <div className="rooms-main-text">
            <p className="rooms-main-p">
              Designed in a modern, minimalist style. Regardless of whether you
              stay for one night or for longer. In one of the 130 rooms you will
              feel at home.
            </p>
            <span className="rooms-main-span">View all rooms</span>
          </div>
        </div>
        <div className="room-options-container">
          <div className="room-option">
            <p className="room-option-name">/ Classic Room /</p>
            <p className="room-option-desc">
              An elegant, sunny room, just right for you
            </p>
          </div>
          <div className="room-option">
            <p className="room-option-name">/ Classic Plus Room /</p>
            <p className="room-option-desc">Unique space, unique accessories</p>
          </div>
          <div className="room-option">
            <p className="room-option-name">/ Apartment /</p>
            <p className="room-option-desc">First: convenience</p>
          </div>
          <div className="room-option">
            <p className="room-option-name">/ Executive Suite /</p>
            <p className="room-option-desc">
              Maximum comfort, with that special touch
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Rooms;
