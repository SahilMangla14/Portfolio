import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
const ProjectsCard = ({ title, des, src, github_link }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg  flex flex-col bg-boxColor group">
      <div className='w-full h-[80%] overflow-hidden rounded-lg'>
        <img className='w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer' src={src} alt="src" />
      </div>
      {/* My Project */}
      <div className='w-full mt-5 flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <h3 className='font-bold text-lg hover:text-yellowColor'>{title}</h3>

        </div>
        <div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 text-lg">{des}</p>
        </div>
        <div className="flex gap-2">
          <span className="text-lg w-10 h-10 rounded-full bg-black group-hover:bg-[#1A1A1A] inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <BrowserRouter>
            <Link to={github_link}>
              <span>
                <BsGithub />
              </span>
            </Link>
            </BrowserRouter>
          </span>
          <span className="text-lg w-10 h-10 rounded-full bg-black group-hover:bg-[#1A1A1A] inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <FaGlobe />
          </span>
        </div>
      </div>
      <div>

      </div>
    </div>

  )
}

export default ProjectsCard
