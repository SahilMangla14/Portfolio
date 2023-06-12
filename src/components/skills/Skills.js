import React from 'react'
import SkillCard from './SkillCard'
import {c, cpp, python, html, css, javacript, reactjs, express, mongodb, bootstrap3, opencv, numpy} from '../../assets/index'
const Skills = () => {
    return (
        <section id="skills" className='w-full py-10 border-b-[1px] border-b-black'>
            <div className='flex items-center justify-center text-center'>
                <div className="flex flex-col gap-4 font-titleFont mb-14">
                    <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
                        My Skills
                    </h3>
                    <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize"><span className='text-yellowColor capitalize'>My</span> Skills</h1>
                </div>
            </div>
            <div className='mb-3'>
                <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex  flex-wrap items-center bg-gradient-to-r bg-boxColor group hover:bg-gradient-to-b hover:from-yellowColor   duration-1000">
                    <span className='font-bold mr-10'>Programming Languages</span>   
                    <span className='mr-3'>C </span><span className='mr-5'><img src={c} alt="C" /></span> 
                    <span className='mr-3'>C++ </span><span className='mr-5'><img src={cpp} alt="C" /></span> 
                    <span className='mr-3'>Python </span><span className='mr-5'><img src={python} alt="C" /></span> 
                </div>
            </div>
            <div className='mb-3'>
            <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-wrap items-center bg-gradient-to-r bg-boxColor group hover:bg-gradient-to-b hover:from-yellowColor   duration-1000">
                    <span className='font-bold mr-10'>Web Development</span>   
                    <span className='mr-3'>Html </span><span className='mr-5'><img src={html} alt="C" /></span> 
                    <span className='mr-3'>Css </span><span className='mr-5'><img src={css} alt="C" /></span> 
                    <span className='mr-3'>Javascript</span><span className='mr-5'><img src={javacript} alt="C" /></span> 
                    <span className='mr-3'>React Js </span><span className='mr-5'><img src={reactjs} alt="C" /></span> 
                    <span className='mr-3'>Express Js </span><span className='mr-5'><img src={express} alt="C" /></span> 
                    <span className='mr-3'>MongoDB </span><span className='mr-5'><img src={mongodb} alt="C" /></span> 
                    <span className='mr-3'>Bootstrap </span><span className='mr-5'><img src={bootstrap3} alt="C" /></span> 
                </div>
            </div>
            <div className='mb-3'>
                <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex  flex-wrap items-center bg-gradient-to-r bg-boxColor group hover:bg-gradient-to-b hover:from-yellowColor   duration-1000">
                    <span className='font-bold mr-10'>Other Languages</span>   
                    <span className='mr-3'>OpenCV </span><span className='mr-5'><img src={opencv} alt="C" /></span> 
                    <span className='mr-3'>Matplotlib </span><span className='mr-5'><img src={python} alt="C" /></span> 
                    <span className='mr-3'>Numpy</span><span className='mr-5'><img src={numpy} alt="C" /></span> 
                </div>
            </div>
            <div className='mb-3'>
            <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex  flex-wrap items-center bg-gradient-to-r bg-boxColor group hover:bg-gradient-to-b hover:from-yellowColor   duration-1000">
                    <span className='font-bold mr-10'>Other Skills</span>   
                    <span className='mr-3'>Leadership</span>
                    <span className='mr-3'>Team Management</span>
                    <span className='mr-3'>Problem Solving </span>
                </div>
            </div>
        </section>
    )
}

export default Skills
