import React from "react";

const CrewNav = ({ handleMark, handleDouglas, handleAnsari, handleVictor }) => {
  return (
    <div>
      <ul className='flex gap-4 justify-center uppercase text-white md:justify-start max-sm:pb-8 sm:pt-10 md:pt-20'>
        <li
          className='h-3 w-3 rounded-full bg-white cursor-pointer hover:opacity-50'
          onClick={handleDouglas}
        ></li>
        <li
          className='h-3 w-3 rounded-full bg-white cursor-pointer hover:opacity-50'
          onClick={handleMark}
        ></li>
        <li
          className='h-3 w-3 rounded-full bg-white cursor-pointer hover:opacity-50'
          onClick={handleVictor}
        ></li>
        <li
          className='h-3 w-3 rounded-full bg-white cursor-pointer hover:opacity-50'
          onClick={handleAnsari}
        ></li>
      </ul>
    </div>
  );
};

export default CrewNav;
