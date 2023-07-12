import React from 'react';

const MobileNavItem = ({
  planet,
  color,
  hasBorder,
  setNavIsOpen,
  handlePlanetClick,
}) => {
  return (
    <li
      className="px-6 "
      onClick={() => {
        setNavIsOpen(false);
        handlePlanetClick(planet);
      }}
    >
      <div
        className={`flex justify-between items-center py-4 cursor-pointer ${
          hasBorder ? 'border-b-[1px] border-b-white border-opacity-10' : ''
        }`}
      >
        <div className="flex items-center justify-center">
          <div
            className={`rounded-full h-6 w-6 `}
            style={{ background: color }}
          ></div>
          <p className=" pl-4 text-white text-base uppercase font-semibold text-center ">
            {planet}
          </p>
        </div>
        <div className="chevron flex items-center justify-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </div>
      </div>
    </li>
  );
};

export default MobileNavItem;
