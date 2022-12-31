import React, { useEffect, useState } from 'react';
import { a, useTrail, useSpring, config } from 'react-spring';
import './Navigation.css';

import { ChevronDownIcon } from '@radix-ui/react-icons';

const locations = ['Mykonos', 'Lódź', 'New York', 'Miami', 'Paris', 'London'];
const menuItems = [
  'Experience',
  'Rooms',
  'Restuarant',
  'Conference Room',
  'Gallery',
  'Contact'
];

interface NavigationProps {
  blah: IntersectionObserver;
  sectionRef: React.RefObject<HTMLElement>;
}

const Navigation: React.FC<NavigationProps> = ({ blah, sectionRef }) => {
  const [location, setLocation] = useState('Mykonos');
  const [isIntersecting, setIntersecting] = useState(false);
  const [locationMenuActive, setLocationMenuActive] = useState(false);

  const handleLocationMenu = () => {
    setLocationMenuActive((state) => !state);
  };

  const observer = new IntersectionObserver(
    ([element]) => setIntersecting(element.isIntersecting),
    {
      threshold: [0.5]
    }
  );

  useEffect(() => {
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  window.onscroll = function (e) {
    if (window.scrollY > 656) {
      setIntersecting(true);
    } // Value of scroll Y in px
  };

  return (
    <>
      <NavigationDesktop
        location={location}
        locationMenuActive={locationMenuActive}
        handleLocationMenu={handleLocationMenu}
        setLocationMenuActive={setLocationMenuActive}
        setLocation={setLocation}
        isIntersecting={isIntersecting}
      />
      <MobileHamburgerMenu
        location={location}
        locationMenuActive={locationMenuActive}
        handleLocationMenu={handleLocationMenu}
        setLocationMenuActive={setLocationMenuActive}
        setLocation={setLocation}
      />
    </>
  );
};

interface NavProps extends LocationProps {
  location: string;
  locationMenuActive: boolean;
  handleLocationMenu: () => void;
  isIntersecting?: boolean;
}

const NavigationDesktop: React.FC<NavProps> = ({
  locationMenuActive,
  handleLocationMenu,
  location,
  setLocationMenuActive,
  setLocation,
  isIntersecting
}) => {
  const arrowSpring = useSpring({
    transform: locationMenuActive ? 'rotate(0deg)' : 'rotate(-180deg)'
  });

  const menuSpring = useSpring({
    backgroundColor: isIntersecting ? 'blanchedalmond' : 'rgba(0, 0, 0, 0)',
    color: isIntersecting ? '#000' : '#fff',
    borderBottom: isIntersecting
      ? '1px solid #000'
      : '1px solid rgba(0, 0, 0, 0)'
  });

  const bookSpring = useSpring({
    color: isIntersecting ? '#fff' : '#fff'
  });

  return (
    <a.div style={menuSpring} className="desktop-header-container">
      <div className="desktop-header-logo-location">
        <h2 className="desktop-navigation-h2">HURON</h2>
        <span
          className="desktop-location-menu-span"
          onClick={handleLocationMenu}
        >
          <p className="desktop-location-chosen">{location}</p>
          <a.p style={arrowSpring} className="desktop-location-menu-open-arrow">
            ^
          </a.p>
        </span>
      </div>
      <nav className="desktop-nav-bar">
        <ul className="desktop-nav-menu">
          {menuItems.map((item) => (
            <li className="desktop-nav-menu-item">{item}</li>
          ))}
          <a.li style={bookSpring} className="desktop-nav-menu-item">
            Book
          </a.li>
        </ul>
      </nav>
      <Locations
        locationMenuActive={locationMenuActive}
        setLocationMenuActive={setLocationMenuActive}
        setLocation={setLocation}
        isIntersecting={isIntersecting}
      />
    </a.div>
  );
};

const MobileHamburgerMenu: React.FC<NavProps> = ({
  locationMenuActive,
  handleLocationMenu,
  location,
  setLocationMenuActive,
  setLocation
}) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [hamburgerLocationsOpen, setHamburgerLocationsOpen] = useState(false);
  const showMenu = useSpring({
    opacity: hamburgerOpen ? 1 : 0,
    transform: hamburgerOpen ? 'translateX(0%)' : 'translateX(100%)'
  });

  const arrowSpring = useSpring({
    transform: hamburgerLocationsOpen ? 'rotateX(0deg)' : 'rotateX(180deg)',
    transformOrigin: '5px 5px'
  });

  const locationsSpring = useSpring({
    transform: hamburgerLocationsOpen ? 'translateX(0%)' : 'translateX(100%)'
  });

  const handleHamburgerMenu = () => {
    setHamburgerOpen((state) => !state);
  };

  const handleLocationChange = (location: string) => {
    setLocation(location);
    handleOpenLocationMenu();
  };

  const handleOpenLocationMenu = () => {
    setHamburgerLocationsOpen((state) => !state);
    handleHamburgerMenu();
  };

  const handleCloseOverlayButton = () => {
    setHamburgerLocationsOpen(false);
    setHamburgerOpen(false);
  };

  return (
    <>
      <div className="hamburger-container">
        <div className="hamburger-first-row">
          <h2>HURON</h2>
          <button className="hamburger-button" onClick={handleHamburgerMenu}>
            <div className="hamburger-line-1" />
            <div className="hamburger-line-1" />
            <div className="hamburger-line-1" />
          </button>
        </div>
        <div className="hamburger-second-row">
          <button
            className="hamburger-button-main-location"
            onClick={handleOpenLocationMenu}
          >
            {location}
            <a.p style={arrowSpring} className="hamburger-open-arrow">
              ^
            </a.p>
          </button>
        </div>
      </div>
      <a.div style={showMenu} className="hamburger-overlay">
        <div>
          <div className="hamburger-overlay-header">
            <h2>HURON</h2>
            <button onClick={handleCloseOverlayButton}>
              <div className="hamburger-line-2" />
              <div className="hamburger-line-3" />
            </button>
          </div>
          <div className="hamburger-overlay-second-row">
            <button
              onClick={() => setHamburgerLocationsOpen((state) => !state)}
            >
              {location}
              <a.p style={arrowSpring} className="overlay-open-arrow">
                ^
              </a.p>
            </button>
          </div>
          <br />
          <div className="hamburger-menu-items-container">
            <ul className="hamburger-menu-ul">
              {menuItems.map((item) => (
                <li className="hamburger-menu-li" onClick={handleHamburgerMenu}>
                  {item}
                </li>
              ))}
            </ul>
            <a.div style={locationsSpring} className="hamburger-menu-locations">
              <ul className="hamburger-menu-ul">
                {locations.map((item) => (
                  <li
                    className="hamburger-menu-li-location"
                    onClick={() => handleLocationChange(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </a.div>
          </div>
        </div>
      </a.div>
    </>
  );
};

interface LocationProps {
  locationMenuActive: boolean;
  setLocationMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  isIntersecting?: boolean;
}

const Locations: React.FC<LocationProps> = ({
  locationMenuActive,
  setLocationMenuActive,
  setLocation,
  isIntersecting
}) => {
  const locationTrail = useTrail(locations.length, {
    opacity: locationMenuActive ? 1 : 0,
    transform: locationMenuActive ? 'translateX(0%)' : 'translateX(-100%)',
    color: isIntersecting ? '#fff' : '#fff',
    config: config.gentle
  });

  const handleChooseLocation = (location: string) => {
    setLocation(location);
    setLocationMenuActive(false);
  };

  const spring = useSpring({
    transform: locationMenuActive ? 'translateX(0%)' : 'translateX(-100%)',
    backgroundColor: isIntersecting ? '#383838' : 'rgba(0, 0, 0, 0)',
    height: isIntersecting ? '100vh' : '0vh'
  });

  return (
    <a.ul style={spring} className="desktop-location-list">
      {locationTrail.map((spring, i) => (
        <a.li
          style={spring}
          className="desktop-location-item"
          onClick={() => handleChooseLocation(locations[i])}
        >
          {locations[i]}
        </a.li>
      ))}
    </a.ul>
  );
};

export default Navigation;
