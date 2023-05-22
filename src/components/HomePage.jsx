import React from "react";

const HomePage = () => {
  return (
    <div className='bg-[url(/assets/home/background-home-mobile.jpg)] sm:bg-[url(/assets/home/background-home-tablet.jpg)] md:bg-[url(/assets/home/background-home-desktop.jpg)] min-h-screen bg-no-repeat bg-center bg-cover'>
      <div className='flex max-sm:gap-10 sm:gap-4 max-md:flex-col justify-between text-white pt-36 md:pt-64 px-20 h-full'>
        <div className='flex flex-col items-center md:flex-1'>
          <p className='uppercase text-[16px] sm:text-[20px] md:text-[28px] font-barlow max-md:text-center'>
            So, you want to travel to
          </p>
          <h2 className='uppercase max-md:text-center font-bellefair text-[80px] sm:text-[150px]'>
            Space
          </h2>
          <p className='text-[15px] sm:text-[16px] font-barlow text-center max-w-[410px]'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className='flex justify-center  max-sm:pt-6 max-md:pb-6 md:flex-1 '>
          <div className='bg-white py-16 sm:py-20 px-10 md:px-24 rounded-full text-center '>
            <h3 className='uppercase font-bellefair text-[20px] text-black sm:text-[32px] md:pt-[50%]'>
              Explore
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
