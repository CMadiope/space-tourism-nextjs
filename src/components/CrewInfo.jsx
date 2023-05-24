import React from 'react'

const CrewInfo = ({name, title, description}) => {
  return (
    <div>
      <h4 className='uppercase text-white/50 pb-2'>{title}</h4>
      <h3 className='uppercase text-[24px] sm:text-[40px] md:text[56px]'>
        {name}
      </h3>
      <p className='text-[#D0D6F9] font-barlow sm:text-[16px] md:text-[18px] px-[35px] sm:px-[155px] md:px-[24px] lg:px-[80px]'>
        {description}
      </p>
    </div>
  );
}

export default CrewInfo