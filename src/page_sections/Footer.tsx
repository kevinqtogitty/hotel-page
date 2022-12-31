import React from 'react';

import {
  SewingPinFilledIcon,
  EnvelopeClosedIcon,
  MobileIcon,
  ChevronDownIcon
} from '@radix-ui/react-icons';

import './Footer.css';
import * as Accordion from '@radix-ui/react-accordion';

const data = [
  {
    value: 'item-1',
    trigger: 'Pages',
    content: ['Puro Mag', 'Newsletter', 'Careers', 'Privacy Policy', 'Statute']
  },
  {
    value: 'item-2',
    trigger: 'Social Media',
    content: ['Instagram', 'Facebook']
  },
  {
    value: 'item-3',
    trigger: 'Language',
    content: ['English', 'Polish', 'Spanish', 'French']
  }
];

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-title-container">
        <h2 className="footer-h2">HURON</h2>
        <span className="footer-span">Hotels</span>
      </div>
      <article className="footer-article">
        <div className="footer-contact-container">
          <div className="footer-contact-item">
            <SewingPinFilledIcon className="footer-icon" />
            <p className="footer-contact-p">Address here</p>
          </div>
          <div className="footer-contact-item">
            <MobileIcon className="footer-icon" />
            <p className="footer-contact-p">+48 12 3456 789</p>
          </div>
          <div className="footer-contact-item">
            <EnvelopeClosedIcon className="footer-icon" />
            <p className="footer-contact-p">huron@huron.com</p>
          </div>
        </div>
        <MobileAccordion />
        <DesktopFooterContent />
      </article>
    </section>
  );
};

export default Footer;

const MobileAccordion = () => {
  return (
    <Accordion.Root className="footer-accordion-root" type="single" collapsible>
      {data.map((item) => (
        <Accordion.Item className="footer-accordion-item" value={item.value}>
          <Accordion.Trigger className="footer-accordion-trigger">
            {item.trigger}
            <ChevronDownIcon className="footer-accordion-chevron" aria-hidden />
          </Accordion.Trigger>
          <Accordion.Content className="footer-accordion-content">
            {item.content.map((item) => (
              <p className="footer-accordion-item-content-p">{item}</p>
            ))}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

const DesktopFooterContent = () => {
  return (
    <div className="desktop-footer-content-container">
      {data.map((item) => (
        <div className="desktop-footer-item">
          <h3 className="desktop-footer-h3">{item.trigger}</h3>
          {item.content.map((el) => (
            <p className="desktop-footer-p">{el}</p>
          ))}
        </div>
      ))}
    </div>
  );
};
