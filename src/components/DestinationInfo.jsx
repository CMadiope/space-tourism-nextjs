import React from "react";

const DestinationInfo = ({ moon, mars, titan, europa }) => {
  return (
    <div className='pt-6 flex flex-col items-center md:items-start'>
      {moon && (
        <h1 className='text-[56px] sm:text-[80px] md:text-[100px] uppercase max-md:text-center font-bellefair py-4'>
          Moon
        </h1>
      )}
      {mars && (
        <h1 className='text-[56px] sm:text-[80px] md:text-[100px] uppercase max-md:text-center font-bellefair py-4'>
          Mars
        </h1>
      )}
      {europa && (
        <h1 className='text-[56px] sm:text-[80px] md:text-[100px] uppercase max-md:text-center font-bellefair py-4'>
          europa
        </h1>
      )}
      {titan && (
        <h1 className='text-[56px] sm:text-[80px] md:text-[100px] uppercase max-md:text-center font-bellefair py-4'>
          titan
        </h1>
      )}
      <div className='py-3 text-[15px] font-barlow  flex justify-center  max-sm:w-[330px] sm:px-20 sm:w-[573px] md:px-0 md:pr-20 md:w-[450px] text-[#D0D6F9] text-justify pb-6'>
        {moon && (
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        )}
        {mars && (
          <p>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
        )}
        {europa && (
          <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
        )}
        {titan && (
          <p>
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
        )}
      </div>
      <div className='border-t  pt-4 pb-8 w-[80%]  md:mr-10  flex flex-col sm:flex-row max-sm:text-center text-left'>
        <div className='flex-1'>
          <p className='text-[14px] text-[#D0D6F9] font-barlow py-2'>
            AVG. DISTANCE
          </p>
          {moon && <h3 className='font-bellefair text-[28px]'>384,400 km</h3>}
          {mars && <h3 className='font-bellefair text-[28px]'>225 MIL. km</h3>}
          {europa && (
            <h3 className='font-bellefair text-[28px]'>628 MIL. km</h3>
          )}
          {titan && <h3 className='font-bellefair text-[28px]'>1.6 BIL. km</h3>}
        </div>
        <div className='flex-1'>
          <p className='text-[14px] text-[#D0D6F9] font-barlow py-2 '>
            Est. travel time
          </p>
          {moon && (
            <h3 className='font-bellefair text-[28px] uppercase'>3 days</h3>
          )}
          {mars && (
            <h3 className='font-bellefair text-[28px] uppercase'>9 months</h3>
          )}
          {europa && (
            <h3 className='font-bellefair text-[28px] uppercase'>3 years</h3>
          )}
          {titan && (
            <h3 className='font-bellefair text-[28px] uppercase'>7 years</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationInfo;
