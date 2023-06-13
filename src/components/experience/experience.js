import React from 'react'

const experience = () => {
    return (
        <section id="experience" className='w-full py-10 border-b-[1px] border-b-black'>
            <div className='flex items-center justify-center text-center'>
                <div className="flex flex-col gap-4 font-titleFont mb-14">
                    <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
                        My Experience
                    </h3>
                    <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize"><span className='text-yellowColor capitalize'>My </span>Experience</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 sml:grid-cols-2 gap-14">
                <div className='h-auto bg-boxColor rounded-md'>
                    <div className='flex justify-center align-center my-3'>
                        <span className='font-bold hover:text-yellowColor'>CODING CLUB COORDINATOR</span>
                    </div>
                    <div className='px-2 bg-[#292828] rounded-md mx-10 my-3 py-4 px-4'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum harum vitae quae minus excepturi explicabo quibusdam quas, veritatis iusto! Fugit dolores voluptate minus. Aspernatur reprehenderit impedit vitae maiores excepturi exercitationem.
                    </div>
                </div>
                <div className='h-auto bg-boxColor rounded-md'>
                    <div className='flex justify-center align-center my-3'>
                        <span className='font-bold hover:text-yellowColor'>ISMP MENTOR</span>
                    </div>
                    <div className='px-2 bg-[#292828] rounded-md mx-10 my-3 py-4 px-4'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum harum vitae quae minus excepturi explicabo quibusdam quas, veritatis iusto! Fugit dolores voluptate minus. Aspernatur reprehenderit impedit vitae maiores excepturi exercitationem.
                    </div>
                </div>
                <div className='h-auto bg-boxColor rounded-md'>
                    <div className='flex justify-center align-center my-3'>
                        <span className='font-bold hover:text-yellowColor'>SOFTCOM SUPER-COORDINATOR</span>
                    </div>
                    <div className='px-2 bg-[#292828] rounded-md mx-10 my-3 py-4 px-4'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum harum vitae quae minus excepturi explicabo quibusdam quas, veritatis iusto! Fugit dolores voluptate minus. Aspernatur reprehenderit impedit vitae maiores excepturi exercitationem.
                    </div>
                </div>
                <div className='h-auto bg-boxColor rounded-md'>
                    <div className='flex justify-center align-center my-3 hover:text-yellowColor'>
                        <span className='font-bold'>STUDENT COUNCIL TECH TEAM</span>
                    </div>
                    <div className='px-2 bg-[#292828] rounded-md mx-10 my-3 py-4 px-4'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum harum vitae quae minus excepturi explicabo quibusdam quas, veritatis iusto! Fugit dolores voluptate minus. Aspernatur reprehenderit impedit vitae maiores excepturi exercitationem.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default experience
