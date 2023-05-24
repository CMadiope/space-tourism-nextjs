import React, { useState } from "react";
import douglas from "../../public/assets/crew/image-douglas-hurley.png";
import Image from "next/image";
import CrewNav from "@/components/CrewNav";
import CrewInfo from "@/components/CrewInfo";

const Crew = () => {
  const [douglas, setDouglas] = useState(true);
  const [mark, setMark] = useState(false);
  const [victor, setVictor] = useState(false);
  const [ansari, setAnsari] = useState(false);
  const [name, setName] = useState("Douglas Hurley");
  const [title, setTitle] = useState("commander");
  const [description, setDescription] = useState(
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  );

  const handleDouglas = () => {
    setDouglas(!douglas);
    setName("Douglas Hurley");
    setTitle("commander");
    setDescription(
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    );
    setMark(false);
    setAnsari(false);
    setVictor(false);
    if (douglas) {
      setDouglas(true);
      setName("Douglas Hurley");
      setTitle("commander");
      setDescription(
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      );
    }
  };
  const handleMark = () => {
    setMark(!mark);
    setName("Mark ShuttleWorth");
    setTitle("mission specialist");
    setDescription(
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    );
    setDouglas(false);
    setAnsari(false);
    setVictor(false);
    if (mark) {
      setDouglas(true);
      setName("Douglas Hurley");
      setTitle("commander");
      setDescription(
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      );
    }
  };
  const handleVictor = () => {
    setVictor(!victor);
    setName("Victor Glover");
    setTitle("pilot");
    setDescription(
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    );
    setMark(false);
    setDouglas(false);
    setAnsari(false);
    setDescription(
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    );
    if (victor) {
      setDouglas(true);
      setTitle("commander");
      setDescription(
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      );
    }
  };
  const handleAnsari = () => {
    setAnsari(!ansari);
    setName("Anousheh Ansari");
    setTitle("flight engineer");
    setDescription(
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    );
    setMark(false);
    setDouglas(false);
    setVictor(false);
    if (ansari) {
      setDouglas(true);
      setName("Douglas Hurley");
      setTitle("commander");
      setDescription(
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      );
    }
  };

  //  console.log(title);

  return (
    <div className='bg-[url(/assets/crew/background-crew-mobile.jpg)] sm:bg-[url(/assets/crew/background-crew-tablet.jpg)] md:bg-[url(/assets/crew/background-crew-desktop.jpg)] min-h-screen bg-no-repeat bg-center bg-cover'>
      <div className='text-white pt-36'>
        <h1 className='font-barlow text-[18px] text-center sm:text-left sm:pl-24 md:pl-32 sm:text-[24px] md:text-[28px] uppercase pb-10'>
          Meet your crew
        </h1>
        <div className='flex flex-col-reverse sm:flex-col md:flex-row items-center flex-1'>
          <div className=' font-bellefair text-[16px] sm:text-[24px] md:text-[32px]  border-t w-full text-center sm:border-none py-5 flex flex-col-reverse sm:flex-col items-center justify-between'>
            <div>
              <CrewInfo name={name} title={title} description={description} />
            </div>
            <div>
              <CrewNav
                handleMark={handleMark}
                handleDouglas={handleDouglas}
                handleAnsari={handleAnsari}
                handleVictor={handleVictor}
              />
            </div>
          </div>
          <div className='flex-1'>
            <div className='w-[327px] text-[15px] sm:w-[456px] md:w-[568px] '>
              {douglas && (
                <Image
                  src={`${
                    douglas
                      ? "/assets/crew/image-douglas-hurley.png"
                      : "/assets/crew/image-douglas-hurley.png"
                  }`}
                  alt='douglas'
                  width={300}
                  height={300}
                  className='w-[327px] text-[15px] sm:w-[456px] md:w-[568px] '
                />
              )}
              {mark && (
                <Image
                  src={`${
                    mark
                      ? "/assets/crew/image-mark-shuttleworth.png"
                      : "/assets/crew/image-douglas-hurley.png"
                  }`}
                  alt='mark'
                  width={300}
                  height={300}
                  className='w-[327px] text-[15px] sm:w-[456px] md:w-[568px] '
                />
              )}
              {victor && (
                <Image
                  src={`${
                    victor
                      ? "/assets/crew/image-victor-glover.png"
                      : "/assets/crew/image-douglas-hurley.png"
                  }`}
                  alt='voctor'
                  width={300}
                  height={300}
                  className='w-[327px] text-[15px] sm:w-[456px] md:w-[568px] '
                />
              )}
              {ansari && (
                <Image
                  src={`${
                    ansari
                      ? "/assets/crew/image-anousheh-ansari.png"
                      : "/assets/crew/image-douglas-hurley.png"
                  }`}
                  alt='ansari'
                  width={300}
                  height={300}
                  className='w-[327px] text-[15px] sm:w-[456px] md:w-[568px] '
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
