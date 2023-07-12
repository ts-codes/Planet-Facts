import React, { useState } from 'react';
import IconHamburger from '../components/IconHamburger';
import MobileNavItem from '../components/MobileNavItem';
import { data } from '../PlanetData';

const navItems = [
  {
    name: 'Mercury',
    color: '#DEF4FC',
  },
  {
    name: 'Venus',
    color: '#F7CC7F',
  },
  {
    name: 'Earth',
    color: '#545BFE',
  },
  {
    name: 'Mars',
    color: '#FF6A45',
  },
  {
    name: 'Jupiter',
    color: '#ECAD7A',
  },
  {
    name: 'Saturn',
    color: '#FCCB6B',
  },
  {
    name: 'Uranus',
    color: '#65F0D5',
  },
  {
    name: 'Neptune',
    color: '#497EFA',
  },
];

const Navbar = ({ setActivePlanet, activePlanet }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleClick = () => setNavIsOpen((navIsOpen) => !navIsOpen);

  const handlePlanetClick = (planet) => {
    const filteredObject = data.filter((object) => object.name === planet);
    if (activePlanet !== filteredObject[0]) {
      setActivePlanet(filteredObject[0]);
    }
  };

  return (
    <div className="relative border-b-[1px] border-b-white border-opacity-20 ">
      <div className="px-6 py-4  flex md:flex-col lg:flex-row justify-between items-center md:py-8 lg:py-6 lg:px-8  mx-auto max-w-[1360px]">
        <div className="text-3xl text-white font-antonio md:mb-10 lg:mb-0 ">
          THE PLANETS
        </div>
        <button
          aria-label="toggle mobile nav"
          className="md:hidden"
          onClick={handleClick}
        >
          <IconHamburger isActive={navIsOpen} />
        </button>
        {/* ============ DESKTOP NAV =========== */}
        <nav className="items-center justify-center hidden md:flex">
          <ul className="flex">
            {navItems.map((planet) => (
              <>
                <li
                  className="relative mx-4 text-xs text-white uppercase cursor-pointer "
                  key={planet.name}
                  onClick={() => {
                    handlePlanetClick(planet.name);
                  }}
                >
                  {planet.name}
                  {planet.name === activePlanet.name && (
                    <div
                      className="absolute inset-x-0 -top-[215%] pointer-events-none"
                      aria-hidden="true"
                    >
                      <div
                        className={`hidden lg:block h-[5px] w-full`}
                        style={{ background: `${activePlanet.color}` }}
                      ></div>
                    </div>
                  )}
                </li>
              </>
            ))}
          </ul>
        </nav>
        {/* ============ MOBILE NAV ============  */}
        {navIsOpen ? (
          <div className="md:hidden bg-theme_mars_active absolute top-[100%] left-0 right-0 z-50">
            <div className="bg-theme_dark_bg t h-screen border-t-[1px] border-t-white border-opacity-20 ">
              <nav>
                <ul>
                  {navItems.map((planet, index) => (
                    <MobileNavItem
                      key={planet.name}
                      planet={planet.name}
                      color={planet.color}
                      hasBorder={index !== navItems.length - 1}
                      setNavIsOpen={setNavIsOpen}
                      handlePlanetClick={handlePlanetClick}
                    />
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
