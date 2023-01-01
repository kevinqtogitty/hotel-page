import React from 'react';
import gift1 from '../assets/pictures/gift_shop/gift_1.webp';
import gift2 from '../assets/pictures/gift_shop/gift_2.webp';

import './GiftShop.css';

const GiftShop = () => {
  return (
    <section className="gift-shop-section">
      <h2 className="gift-shop-h2">THE HURON GIFT SHOP</h2>
      <article className="gift-shop-article">
        <div className="gift-shop-img-container">
          <img className="gift-shop-img" src={gift1} alt="Huron candle gift" />
          <img className="gift-shop-img" src={gift2} alt="Huron blanket gift" />
        </div>
        <div className="gift-shop-text">
          <p className="gift-shop-p">
            Do you dream of HURON in your home? The Gift Shop is a selection of
            items co-created by local design studios and craftsmen we value.
          </p>
          <span>Visit the HURON store</span>
        </div>
      </article>
    </section>
  );
};

export default GiftShop;
