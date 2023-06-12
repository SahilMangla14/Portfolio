import React from 'react'

const About = () => {
  return (
    <section id="about" className='w-full h-[700px] pt-10 pb-20 flex'>
      <div className='w-1/2 flex justify-center items-center'>
        <h1 className='text-6xl font-bold text-white mt-20'>About <span className='text-yellowColor capitalize'>Me</span></h1>
      </div>
      <div className='w-1/2 pt-20'>
        <div className='h-[70%]  border-l-[6px] border-[#1A1A1A] flex flex-col justify-evenly'>
          <div className='w-full group flex items-center'>
            <div className='border border-[#1A1A1A] w-10 h-[6px] bgOpacity  relative'>
              <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-[#1A1A1A] bg-opacity-60'>
                <span className='w-3 h-3 rounded-full bg-[#1A1A1A] inline-flex group-hover:bg-yellowColor duration-300'></span>
              </span>
              {/* <span> hello world</span> */}
            </div>
            <div className='flex pl-2'>
              <h2 className='font-bold text-white'>Name: </h2>
              <span className='pl-2 flex items-center font-medium'>Sahil</span>
            </div>
          </div>
          <div className='w-full group flex items-center'>
            <div className='border border-[#1A1A1A] w-10 h-[6px] bgOpacity  relative'>
              <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-[#1A1A1A] bg-opacity-60'>
                <span className='w-3 h-3 rounded-full bg-[#1A1A1A] inline-flex group-hover:bg-yellowColor duration-300'></span>
              </span>
              {/* <span> hello world</span> */}
            </div>
            <div className='flex pl-2'>
              <h2 className='font-bold text-white'>Date of Birth: </h2>
              <span className='pl-2 flex items-center font-medium'>August 14, 2003</span>
            </div>
          </div>
          <div className='w-full group flex items-center'>
            <div className='border border-[#1A1A1A] w-10 h-[6px] bgOpacity  relative'>
              <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-[#1A1A1A] bg-opacity-60'>
                <span className='w-3 h-3 rounded-full bg-[#1A1A1A] inline-flex group-hover:bg-yellowColor duration-300'></span>
              </span>
              {/* <span> hello world</span> */}
            </div>
            <div className='flex pl-2'>
              <h2 className='font-bold text-white'>Name: </h2>
              <span className='pl-2 flex items-center font-medium'>Sahil</span>
            </div>
          </div>
          <div className='w-full group flex items-center'>
            <div className='border border-[#1A1A1A] w-10 h-[6px] bgOpacity  relative'>
              <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-[#1A1A1A] bg-opacity-60'>
                <span className='w-3 h-3 rounded-full bg-[#1A1A1A] inline-flex group-hover:bg-yellowColor duration-300'></span>
              </span>
              {/* <span> hello world</span> */}
            </div>
            <div className='flex justify-evenly items-center pl-2'>
              <h2 className='font-bold text-white'>Name: </h2>
              <span className='pl-2 flex items-center font-medium'>Sahil</span>
            </div>
          </div>
          <div className='w-full group  flex items-center'>
            <div className='border border-[#1A1A1A] w-10 h-[6px] bgOpacity  relative'>
              <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-[#1A1A1A] bg-opacity-60'>
                <span className='w-3 h-3 rounded-full bg-[#1A1A1A] inline-flex group-hover:bg-yellowColor duration-300'></span>
              </span>
              {/* <span> hello world</span> */}
            </div>
            <div className='flex pl-2'>
              <h2 className='font-bold text-white'>Name: </h2>
              <span className='pl-2 flex items-center font-medium'>Sahil</span>
            </div>
          </div>
          <div className='w-full group flex items-center'>
            <div className='border border-[#1A1A1A] w-10 h-[6px] bgOpacity  relative'>
              <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-[#1A1A1A] bg-opacity-60'>
                <span className='w-3 h-3 rounded-full bg-[#1A1A1A] inline-flex group-hover:bg-yellowColor duration-300'></span>
              </span>
              {/* <span> hello world</span> */}
            </div>
            <div className='flex pl-2'>
              <h2 className='font-bold text-white'>Name: </h2>
              <span className='pl-2 flex items-center font-medium'>Sahil</span>
            </div>
          </div>
        </div>

        <div className='w-full mt-6'>
          <div className='h-[35px] ml-[52px] w-[20%] bg-yellowColor text-black flex items-center justify-center rounded-xl'>Download CV</div>
        </div>
      </div>

    </section>
  )
}

export default About
