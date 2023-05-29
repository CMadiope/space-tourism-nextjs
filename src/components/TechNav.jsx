import React from "react";

const TechNav = ({ handleCapsule, handleLaunch, handleSpaceport }) => {
  return (
    <div className='flex gap-5 justify-center font-bellefair text-[16px] sm:text-[24px] md:text-[32px] text-black'>
      <span
        onClick={handleLaunch}
        className={` bg-white hover:bg-white/50 h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]  text-center  rounded-full pt-[5%] cursor-pointer md:h-[80px] md:w-[80px] md:pt-[7%]`}
      >
        1
      </span>
      <span
        onClick={handleSpaceport}
        className='bg-white hover:bg-white/50 h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]  text-center  rounded-full pt-[5%] cursor-pointer md:h-[80px] md:w-[80px] md:pt-[7%]'
      >
        2
      </span>
      <span
        onClick={handleCapsule}
        className=' bg-white hover:bg-white/50 h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]  text-center  rounded-full pt-[5%] cursor-pointer md:h-[80px] md:w-[80px] md:pt-[7%]'
      >
        3
      </span>
    </div>
  );
};

export default TechNav;
