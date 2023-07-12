import React from 'react';
const PlanetStat = ({ title, content }) => {
  return (
    <div className="mb-2 p-3 md:mb-0 text-white border-[1px] border-white border-opacity-20 lg:w-56 lg:h-28 flex justify-between md:flex-col md:justify-center md:w-[22%] md:max-w-[200px] md:h-20 md:p-4 lg:max-w-none lg:p-0 ">
      <p className="text-[10px] mb-2 lg:ml-4 font-semibold text-left uppercase opacity-50 lg:text-xs">
        {title}
      </p>
      <p className="font-normal text-left uppercase lg:ml-4 text-lg md:text-[22px] lg:text-3xl">
        {content}
      </p>
    </div>
  );
};

export default PlanetStat;
