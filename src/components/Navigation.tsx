import React, { useState } from 'react';
import { a, useTransition, useTrail, useSpring, config } from 'react-spring';
import './Navigation.css';

const locations = ['Mykonos', 'Lódź', 'New York', 'Miami', 'Paris', 'London'];

const Navigation = () => {
  const [location, setLocation] = useState('Mykonos');
  const [locationMenuActive, setLocationMenuActive] = useState(false);

  const handleLocationMenu = () => {
    setLocationMenuActive((state) => !state);
  };

  const arrowSpring = useSpring({
    transform: locationMenuActive ? 'rotateX(0deg)' : 'rotateX(180deg)',
    transformOrigin: '15px 15px'
  });

  return (
    <div>
      <nav className="nav-bar">
        <p>
          HURON{' '}
          <span className="location-menu-span" onClick={handleLocationMenu}>
            {location}
            {'  '}
            <a.p style={arrowSpring} className="location-menu-open-arrow">
              ^
            </a.p>
          </span>
        </p>
        <ul className="nav-menu">
          <li className="nav-menu-item">Experience</li>
          <li className="nav-menu-item">Rooms</li>
          <li className="nav-menu-item">Restuarants</li>
          <li className="nav-menu-item">Conference Rooms</li>
          <li className="nav-menu-item">Gallery</li>
          <li className="nav-menu-item">Contact</li>
          <li className="nav-menu-item">Book</li>
        </ul>
      </nav>
      <Locations
        locationMenuActive={locationMenuActive}
        setLocationMenuActive={setLocationMenuActive}
        setLocation={setLocation}
      />
    </div>
  );
};

interface LocationProps {
  locationMenuActive: boolean;
  setLocationMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Locations: React.FC<LocationProps> = ({
  locationMenuActive,
  setLocationMenuActive,
  setLocation
}) => {
  const locationTrail = useTrail(locations.length, {
    opacity: locationMenuActive ? 1 : 0,
    transform: locationMenuActive ? 'translateX(0%)' : 'translateX(-100%)',
    config: config.gentle
  });

  const handleChooseLocation = (location: string) => {
    setLocation(location);
    setLocationMenuActive(false);
  };

  const spring = useSpring({
    transform: locationMenuActive ? 'translateX(0%)' : 'translateX(-100%)'
  });

  return (
    <a.ul style={spring} className="location-list">
      {locationTrail.map((spring, i) => (
        <a.li
          style={spring}
          className="location-item"
          onClick={() => handleChooseLocation(locations[i])}
        >
          {locations[i]}
        </a.li>
      ))}
    </a.ul>
  );
};

export default Navigation;
