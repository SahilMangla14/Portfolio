import React from 'react'
import ProjectsCard from './ProjectsCard'
import { Sahil } from '../../assets/index'
const Projects = () => {
    return (
        <div>
            <section id="projects" className='w-full py-10 border-b-[1px] border-b-black'>
                <div className='flex items-center justify-center text-center'>
                    <div className="flex flex-col gap-4 font-titleFont mb-14">
                        <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
                            My Projects
                        </h3>
                        <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize"><span className='text-yellowColor capitalize'>My</span> Projects</h1>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-14'>
                    <ProjectsCard
                        title="SOCIAL MEDIA CLONE"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={Sahil}
                    />
                    <ProjectsCard
                        title="E-commerce Website"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={Sahil}
                    />
                    <ProjectsCard
                        title="Chatting App"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={Sahil}
                    />
                    <ProjectsCard
                        title="SOCIAL MEDIA CLONE"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={Sahil}
                    />
                    <ProjectsCard
                        title="E-commerce Website"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={Sahil}
                    />
                    <ProjectsCard
                        title="Chatting App"
                        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
                        src={Sahil}
                    />
                </div>
            </section>
        </div>
    )
}

export default Projects
