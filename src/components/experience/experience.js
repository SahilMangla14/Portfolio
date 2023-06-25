import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {
    
    useEffect(()=>{
        Aos.init({
          duration: 1000,
          offset: 180
        })
      },[])

    return (
        <section id="experience" className='w-full py-10 border-b-[1px] border-b-black'>
            <div className='flex items-center justify-center text-center'>
                <div className="flex flex-col gap-4 font-titleFont mb-14">
                    <h3 className="text-sm uppercase font-light text-designColor tracking-wide" data-aos="fade-down">
                        My Experience
                    </h3>
                    <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize" data-aos="fade-down"><span className='text-yellowColor capitalize'>My </span>Experience</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 sml:grid-cols-2 gap-14" >
                <div className='h-auto bg-boxColor rounded-md' data-aos="fade-right">
                    <div className='flex justify-center align-center my-3'>
                        <span className='font-bold hover:text-yellowColor'>CODING CLUB COORDINATOR</span>
                    </div>
                    <div className='px-2 bg-[#292828] rounded-md mx-10 my-3 py-4 px-4'>
                    During my tenure as the Coordinator of the Coding Club at IIT Ropar, I took numerous sessions on problem-solving techniques and algorithms, providing valuable guidance to the members. Alongside my dedicated team, we successfully organized several coding competitions, fostering a competitive spirit and nurturing the coding culture within the club.
                    </div>
                </div>
                <div className='h-auto bg-boxColor rounded-md' data-aos="fade-left">
                    <div className='flex justify-center align-center my-3'>
                        <span className='font-bold hover:text-yellowColor'>ISMP MENTOR</span>
                    </div>
                    <div className='px-2 bg-[#292828] rounded-md mx-10 my-3 py-4 px-4'>
                    As a Mentor within the Institute Student Mentorship Program (ISMP) at our college, I had the privilege of guiding and mentoring students throughout my tenure. I consistently made myself available to them, providing support and guidance whenever needed. Through this position, I had the opportunity to positively impact the lives of my mentees, fostering their personal growth and academic success.
                    </div>
                </div>
                <div className='h-auto bg-boxColor rounded-md' data-aos="fade-right">
                    <div className='flex justify-center align-center my-3'>
                        <span className='font-bold hover:text-yellowColor'>SOFTCOM SUPER-COORDINATOR</span>
                    </div>
                    <div className='px-2 bg-[#292828] rounded-md mx-10 my-3 py-4 px-4'>
                    In my role as the Super Coordinator of the Softcom Club at our college, I hold the responsibility of guiding club members in various technical skills, including web development, computer vision, and artificial intelligence etc. Through the organization of workshops, guest lectures, and hands-on sessions, I created a conducive learning environment that facilitated their growth and proficiency in these cutting-edge technologies.
                    </div>
                </div>
                <div className='h-auto bg-boxColor rounded-md' data-aos="fade-left">
                    <div className='flex justify-center align-center my-3 hover:text-yellowColor'>
                        <span className='font-bold'>STUDENT COUNCIL TECH TEAM</span>
                    </div>
                    <div className='px-2 bg-[#292828] rounded-md mx-10 my-3 py-4 px-4'>
                    As a member of the Student Council Tech Team, I manage websites and handle all the technical aspects for various student bodies in our college. This involves regularly updating and providing all the necessary information, including event details, announcements, and resources, to ensure accurate and up-to-date content.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
