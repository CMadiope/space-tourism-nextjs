import React, { useState } from "react";
import logo from "../../public/static/assets/shared/logo.svg";
import menu from "../../public/static/assets/shared/icon-hamburger.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full fixed  pl-[39px] my-[24px] pr-[24px] bg-inherit top-0 left-0 right-0 '>
      <div className='flex items-center justify-between md:px-16'>
        <Link href='/' className='z-20'>
          <Image src={logo} alt='logo' />
        </Link>
        <div className='flex items-center gap-16'>
          <div>
            <ul className='flex font-barlow text-xl gap-8 bg-white/20 text-white py-4 pl-10 px-6 md:w-full pr-28 max-sm:hidden'>
              <li
                className={`${
                  router.pathname == "/" ? " underline underline-offset-8" : ""
                }`}
              >
                <Link href='/'>Home</Link>
              </li>
              <li
                className={`${
                  router.pathname == "/destination"
                    ? " underline underline-offset-8"
                    : ""
                }`}
              >
                <Link href='/destination'>Destination</Link>
              </li>
              <li
                className={`${
                  router.pathname == "/crew"
                    ? " underline underline-offset-8"
                    : ""
                }`}
              >
                <Link href='/crew'>Crew</Link>
              </li>
              <li
                className={`${
                  router.pathname == "/technology"
                    ? " underline underline-offset-8"
                    : ""
                }`}
              >
                <Link href='/technology'>Technology</Link>
              </li>
            </ul>
          </div>
          <div
            className='cursor-pointer sm:hidden text-white text-2xl z-20'
            onClick={handleNav}
          >
            {nav ? <RxCross1 /> : <AiOutlineMenu />}
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden sm:hidden ease-in duration-300 absolute text-white/90 left-0 -top-10 w-full -bottom-10 min-h-screen bg-black/90 px-4 py-16 flex flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className='h-full w-full text-center pt-20 flex flex-col text-xl text-gay-300 gap-8 uppercase font-barlow'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/destination'>Destination</Link>
          </li>
          <li>
            <Link href='/crew'>Crew</Link>
          </li>
          <li>
            <Link href='/technology'>Technology</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
