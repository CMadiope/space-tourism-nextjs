import DestinationNav from "@/components/DestinationNav";
import React, { useState } from "react";
import moonPic from "../../../public/static/assets/destination/image-moon.png";
import Image from "next/image";
import DestinationInfo from "@/components/DestinationInfo";
import moonHero from "../../../public/static/assets/destination/image-moon.png";
import marsHero from "../../../public/static/assets/destination/image-mars.png";
import europaHero from "../../../public/static/assets/destination/image-europa.png";
import titanHero from "../../../public/static/assets/destination/image-titan.png";

const Destination = () => {
  const [moon, setMoon] = useState(true);
  const [mars, setMars] = useState(false);
  const [europa, setEuropa] = useState(false);
  const [titan, setTitan] = useState(false);

  const handleMoon = () => {
    setMoon(!moon);
    setMars(false);
    setTitan(false);
    setEuropa(false);
    if (moon) {
      setMoon(true);
    }
  };
  const handleMars = () => {
    setMars(!mars);
    setMoon(false);
    setTitan(false);
    setEuropa(false);
    if (mars) {
      setMoon(true);
    }
  };
  const handleEuropa = () => {
    setEuropa(!europa);
    setMars(false);
    setMoon(false);
    setTitan(false);
    if (europa) {
      setMoon(true);
    }
  };
  const handleTitan = () => {
    setTitan(!titan);
    setMars(false);
    setMoon(false);
    setEuropa(false);
    if (titan) {
      setMoon(true);
    }
  };

  return (
    <div className='bg-[url(/static/assets/destination/background-destination-mobile.jpg)] sm:bg-[url(/static/assets/destination/background-destination-tablet.jpg)] md:bg-[url(/static/assets/destination/background-destination-desktop.jpg)] min-h-screen bg-no-repeat bg-center bg-cover'>
      <div className='pt-36 text-white'>
        <h1 className='font-barlow text-[18px] text-center sm:text-left sm:pl-24 md:pl-32 sm:text-[24px] md:text-[28px] uppercase pb-10'>
          Pick your destination
        </h1>

        <div className='py-8 flex flex-col md:flex-row max-md:gap-8 md:gap-20'>
          <div className='flex-1 flex justify-center'>
            {moon && (
              <Image
                src={moon ? moonHero : moonHero}
                alt='destination'
                width={300}
                height={300}
                className='sm:w-[350px]  md:w-[400px] '
              />
            )}
            {mars && (
              <Image
                src={mars ? marsHero : moonHero}
                alt='destination'
                width={300}
                height={300}
                className='sm:w-[350px]  md:w-[400px] '
              />
            )}
            {europa && (
              <Image
                src={europa ? europaHero : moonHero}
                alt='destination'
                width={300}
                height={300}
                className='sm:w-[350px]  md:w-[400px] '
              />
            )}
            {titan && (
              <Image
                src={titan ? titanHero : moonHero}
                alt='destination'
                width={300}
                height={300}
                className='sm:w-[350px]  md:w-[400px] '
              />
            )}
          </div>
          <div className='flex-1  item-center'>
            <DestinationNav
              handleEuropa={handleEuropa}
              handleMars={handleMars}
              handleTitan={handleTitan}
              handleMoon={handleMoon}
            />
            <DestinationInfo
              moon={moon}
              mars={mars}
              europa={europa}
              titan={titan}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
