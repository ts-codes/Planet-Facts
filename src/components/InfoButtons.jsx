import React, { useEffect } from 'react';

const InfoButtons = ({
  activePlanet,
  activeButton,
  setActiveButton,
  variant,
}) => {
  const buttons = ['overview', 'structure', 'surface'];

  useEffect(() => {
    setActiveButton('overview');
  }, [activePlanet]);

  const handleBtnClick = (button) => {
    if (button !== activeButton) {
      setActiveButton(button);
    }
  };

  return (
    <>
      {variant === 'mobile-only' ? (
        // mobile buttons
        <div className="flex px-[6%] w-full justify-between border-b-[1px] border-b-white border-opacity-20 md:hidden">
          {buttons.map((button, index) => (
            <button
              key={index + 'mobile'}
              onClick={() => handleBtnClick(button)}
              style={{
                borderColor: activePlanet.color,
              }}
              className={`${
                button === activeButton ? 'border-b-[4px]' : ''
              } pt-4 pb-3 `}
            >
              <p className="text-[14px] text-white  uppercase font-semibold">
                {button}
              </p>
            </button>
          ))}
        </div>
      ) : (
        // desktop buttons
        <div className="flex-col justify-center hidden w-full md:flex lg:justify-start lg:w-full md:w-1/2 md:ml-24 lg:ml-0">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleBtnClick(button)}
              style={{
                backgroundColor: activeButton === button && activePlanet.color,
                borderColor: activeButton === button && activePlanet.color,
                transition: 'background 0.2s ease-in-out',
              }}
              className={`border-[1px] border-white border-opacity-20 flex py-2 px-4 mb-4 ${
                activeButton !== button ? 'hover:bg-theme_dark_gray ' : ''
              } `}
            >
              <p className="text-base font-semibold opacity-50">{`0${
                index + 1
              }`}</p>
              <p className="ml-4 text-base font-semibold uppercase">
                {index === 0
                  ? 'overview'
                  : index === 1
                  ? 'internal structure'
                  : 'surface geology'}
              </p>
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default InfoButtons;
