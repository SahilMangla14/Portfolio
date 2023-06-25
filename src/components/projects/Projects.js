import React, {useEffect} from 'react'
import ProjectsCard from './ProjectsCard'
import { Sahil } from '../../assets/index'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { hms, riscv_img, cbir, morphing, boha, lzw, task_manager_api, compiler  } from '../../assets/index'
const Projects = () => {

    useEffect(()=>{
        Aos.init({
          duration: 1000,
          offset: 180
        })
      },[])

    return (
        <div>
            <section id="projects" className='w-full py-10 border-b-[1px] border-b-black'>
                <div className='flex items-center justify-center text-center'>
                    <div className="flex flex-col gap-4 font-titleFont mb-14">
                        <h3 className="text-sm uppercase font-light text-designColor tracking-wide" data-aos="fade-down">
                            My Projects
                        </h3>
                        <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize" data-aos="fade-down"><span className='text-yellowColor capitalize'>My</span> Projects</h1>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14'>
                    <ProjectsCard
                        title="MEDICARE"
                        des="Medicare is an innovative hospital management platform to streamline and optimize the administrative tasks, patient appointments, and medical records of a healthcare facility, ensuring efficient operations and enhanced patient care."
                        src={hms}
                        github_link= "https://github.com/SahilMangla14/Hospital-Management-System"
                    />
                    <ProjectsCard
                        title="RISC V SIMULATOR"
                        des="The RISC-V simulator is a computer architecture project that showcases the remarkable performance improvements of modern computer hardware resulting from optimizations such as pipelining and caching."
                        src={riscv_img}
                        github_link= "https://github.com/SahilMangla14/RISC_V-Simulator"
                    />
                    <ProjectsCard
                        title="CONTENT BASED IMAGE RETRIEVAL"
                        des="CBIR is a machine learning project that uses the complex models like RESNET and VGG to look for features in the image and based on the features retreives the best possible matches from the dataset."
                        src={cbir}
                        github_link= "https://github.com/SahilMangla14/CBIR"
                    />
                    <ProjectsCard
                        title="IMAGE MORPHING"
                        des="This project utilizes Delaunay triangulation to achieve seamless image morphing, transforming one image into another through a series of intermediate frames. This technique finds applications in animation, visual effects, and digital art."
                        src={morphing}
                        github_link= "https://github.com/SahilMangla14/Image-Morphing"
                    />
                    <ProjectsCard
                        title="IMAGE COMPRESSION"
                        des="This project explores image compression using LZW and JPEG techniques, allowing for efficient storage and transmission of images while maintaining a balance between compression and quality."
                        src={lzw}
                        github_link= "https://github.com/SahilMangla14/Image-Compression"
                    />
                    <ProjectsCard
                        title="BOHA WEBSITE"
                        des="This website has been developed for the Board of Hostel Affairs, a student council body, to provide comprehensive information about past and upcoming events, as well as the facilities offered by the hostels and mess at IIT Ropar."
                        src={boha}
                        github_link="https://github.com/SahilMangla14/boha-website-v2"
                    />
                    <ProjectsCard
                        title="B-- COMPILER"
                        des="This project involves defining the grammar rules for a new language called B-- and utilizing lex and yacc for lexical and syntactical analysis. It can accurately parse and process code written in the B-- language."
                        src={compiler}
                        github_link= "https://github.com/SahilMangla14/CS202-PROJECT"
                    />
                    <ProjectsCard
                        title="TASK MANAGER API"
                        des="The Task Manager API project, implemented using Node.js and Express, provides a powerful and flexible backend solution for managing tasks. It offers all the CRUD operations making it an ideal solution for efficient task management."
                        src={task_manager_api}
                        github_link= "https://github.com/SahilMangla14/TASK-MANAGER-API"
                    />
                </div>
            </section>
        </div>
    )
}

export default Projects
