import Image from "next/image";
import React, { useState } from "react";
import launchMobile from "../../public/assets/technology/image-launch-vehicle-landscape.jpg";
import lauchDesktop from "../../public/assets/technology/image-launch-vehicle-portrait.jpg";
import TechNav from "@/components/TechNav";
import spaceportMobile from "../../public/assets/technology/image-spaceport-landscape.jpg";
import spaceportDesktop from "../../public/assets/technology/image-spaceport-portrait.jpg";
import capsuleMobile from "../../public/assets/technology/image-space-capsule-landscape.jpg";
import capsuleDesktop from "../../public/assets/technology/image-space-capsule-portrait.jpg";
import TechInfo from "@/components/TechInfo";

const Technology = () => {
  const [launch, setLaunch] = useState(true);
  const [spaceport, setSpaceport] = useState(false);
  const [capsule, setCapsule] = useState(false);
  const [terminology, setTerminology] = useState("Launch vehicle");
  const [description, setDescription] = useState(
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  );

  const handleLaunch = () => {
    setLaunch(!launch);
    setSpaceport(false);
    setCapsule(false);
    setTerminology("Launch vehicle");
    if (launch) {
      setLaunch(true);
      setTerminology("Launch vehicle");
      setDescription(
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
      );
    }
  };
  const handleSpaceport = () => {
    setSpaceport(!spaceport);
    setTerminology("spaceport");
    setDescription(
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    );
    setLaunch(false);
    setCapsule(false);
    if (spaceport) {
      setLaunch(true);
      setTerminology("launch vehicle");
      setDescription(
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
      );
    }
  };
  const handleCapsule = () => {
    setCapsule(!capsule);
    setTerminology("space capsule");
    setDescription(
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    );
    setSpaceport(false);
    setLaunch(false);
    if (capsule) {
      setLaunch(true);
      setTerminology("launch vehicle");
      setDescription(
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
      );
    }
  };

  return (
    <div className='bg-[url(/assets/technology/background-technology-mobile.jpg)] sm:bg-[url(/assets/technology/background-technology-tablet.jpg)] md:bg-[url(/assets/technology/background-technology-desktop.jpg)] min-h-screen bg-no-repeat bg-center bg-cover'>
      <div className='text-white pt-36'>
        <h1 className=' text-[18px] text-center sm:text-left sm:pl-24 md:pl-32 sm:text-[24px] md:text-[28px] uppercase pb-10'>
          space launch 101
        </h1>
        <div className='flex flex-col-reverse md:flex-row pb-10  gap-8'>
          <div className='flex flex-col px-[24px]  md:flex-row gap-6 items-center sm:px-[155px] '>
            <TechNav
              handleCapsule={handleCapsule}
              handleLaunch={handleLaunch}
              handleSpaceport={handleSpaceport}
            />
            <TechInfo description={description} terminology={terminology} />
          </div>
          <div className='flex justify-center flex-1'>
            <style>
              {`
  .hero__desktop-image {
    display: none !important;
  }
  @media(min-width:1060px) {
    .hero__desktop-image {
      display: block !important;
    }
    .hero__mobile-image {
      display: none !important;
    }
  }
`}
            </style>
            {launch && (
              <Image
                src={launch ? launchMobile : launchMobile}
                alt='launch'
                width={400}
                height={400}
                className='hero__mobile-image w-full'
                sizes='100vw'
              />
            )}
            {launch && (
              <Image
                src={launch ? lauchDesktop : lauchDesktop}
                alt='launch'
                width={400}
                height={400}
                className='hero__desktop-image md:max-w-[525px]  '
                sizes='100vw'
              />
            )}
            {spaceport && (
              <Image
                src={spaceport ? spaceportMobile : lauchDesktop}
                alt='launch'
                width={400}
                height={400}
                className='hero__mobile-image w-full'
                sizes='100vw'
              />
            )}
            {spaceport && (
              <Image
                src={spaceport ? spaceportDesktop : lauchDesktop}
                alt='launch'
                width={400}
                height={400}
                className='hero__desktop-image md:max-w-[525px]  '
                sizes='100vw'
              />
            )}
            {capsule && (
              <Image
                src={capsule ? capsuleMobile : lauchDesktop}
                alt='launch'
                width={400}
                height={400}
                className='hero__mobile-image w-full'
                sizes='100vw'
              />
            )}
            {capsule && (
              <Image
                src={capsule ? capsuleDesktop : lauchDesktop}
                alt='launch'
                width={400}
                height={400}
                className='hero__desktop-image md:max-w-[525px]  '
                sizes='100vw'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
