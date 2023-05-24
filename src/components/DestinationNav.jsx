import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const DestinationNav = ({
  handleMoon,
  handleMars,
  handleTitan,
  handleEuropa,
}) => {
  return (
    <div className=''>
      <ul className='font-barlow text-[16px] flex gap-10 justify-center uppercase text-white md:justify-start'>
        <li
          onClick={handleMoon}
          className='cursor-pointer hover:underline-offset-8'
        >
          Moon
        </li>
        <li
          onClick={handleMars}
          className='cursor-pointer hover:underline-offset-8'
        >
          Mars
        </li>
        <li
          onClick={handleEuropa}
          className='cursor-pointer hover:underline-offset-8'
        >
          Europa
        </li>
        <li
          onClick={handleTitan}
          className='cursor-pointer hover:underline-offset-8'
        >
          Titan
        </li>
      </ul>
    </div>
  );
};

export default DestinationNav;
