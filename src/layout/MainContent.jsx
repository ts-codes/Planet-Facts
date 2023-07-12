import React, { useState, useEffect } from 'react';
import iconSource from '/assets/icon-source.svg';
import PlanetStat from '../components/PlanetStat';
import InfoButtons from '../components/InfoButtons';

const MainContent = ({ activePlanet }) => {
  const [planetName, setPlanetName] = useState('');
  const [activeButton, setActiveButton] = useState('overview');
  useEffect(() => {
    setPlanetName(activePlanet.name);
  }, [activePlanet]);

  return (
    <main className="flex flex-col items-center flex-grow ">
      <div className="w-full lg:max-w-[1110px] lg:mt-24">
        <InfoButtons
          activePlanet={activePlanet}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          variant="mobile-only"
        />

        <div className="flex flex-col text-white lg:flex-row lg:justify-between">
          <div className="w-full">
            <div className="flex items-center justify-center w-full h-full">
              <div
                className={`relative m-4 lg:m-16 ${
                  activePlanet.name === 'Saturn' ? 'lg:-mb-4' : ''
                }`}
              >
                {console.log(activePlanet.name)}
                <img
                  src={`${
                    activeButton === 'structure'
                      ? activePlanet.images.internal
                      : activePlanet.images.planet
                  }`}
                  alt="planet"
                />
                <img
                  src={activePlanet.images.geology}
                  alt="planet surface"
                  className={`hidden lg:w-[160px] absolute left-1/2 transform -translate-x-1/2 top-[60%] z-10 ${
                    activeButton === 'surface' && 'lg:block'
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="md:mx-10 lg:mx-0 md:mb-8 lg:mb-0 md:flex md:justify-between lg:block lg:p-10 lg:pl-0">
            <div className=" flex flex-col md:w-1/2 lg:w-[350px] text-center md:text-left">
              <h1 className=" text-[40px] md:text-[80px] font-antonio uppercase ">
                {planetName}
              </h1>
              <p className="mx-[6%] my-8 text-xs md:my-6 md:mx-0">
                {activePlanet[activeButton].content}
              </p>
              <p className="mb-8 text-xs opacity-50 md:mb-6 md:my-6 md:mx-0 lg:mt-0">
                Source:{' '}
                <a
                  href={`${activePlanet[activeButton].source}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  Wikipedia
                  <img
                    className="inline-block px-1"
                    src={iconSource}
                    alt="icon"
                  />
                </a>
              </p>
            </div>

            <InfoButtons
              activePlanet={activePlanet}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              variant="desktop"
            />
          </div>
        </div>

        {/* ======= Stats ======= */}
        <div className="flex flex-col justify-between px-[6%] pb-12 md:px-0 md:mx-10 lg:mx-0 md:flex-row lg:w-full lg:px-10">
          <PlanetStat title="rotation time" content={activePlanet.rotation} />
          <PlanetStat
            title="revolution time"
            content={activePlanet.revolution}
          />
          <PlanetStat title="radius" content={activePlanet.radius} />
          <PlanetStat
            title="average temp."
            content={activePlanet.temperature}
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
