import React from "react";

const TechInfo = ({ terminology, description }) => {
  return (
    <div className='md:max-w-[470px] md:h-[350px]'>
      <h3 className='text-center  text-[14px] uppercase sm:text-[16px]'>
        The terminology. . .
      </h3>
      <h2 className='uppercase font-bellefair text-[24px] text-center py-2 sm:text-[40px] md:text-[56px] '>
        {terminology}
      </h2>
      <p className='text-[#D0D6F9] text-justify '>{description}</p>
    </div>
  );
};

export default TechInfo;
