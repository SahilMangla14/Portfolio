import React, {useEffect} from 'react'
import ProjectsCard from './ProjectsCard'
import { Sahil } from '../../assets/index'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { hms, riscv_img, cbir, morphing, boha, lzw, task_manager_api, compiler, eertree, infonest, adobe, devrev, gomory, social, iot } from '../../assets/index'
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
                        title="INFONEST"
                        des="Infonest is a platform for managing academic resources, enabling efficient organization and accessibility with categorization, user ratings, and commenting. Interactive features like upvoting, downvoting, and bookmarking, along with a leaderboard, foster engagement and resource sharing."
                        src={infonest}
                        github_link= "https://github.com/SahilMangla14/Resource-Portal"
                    />
                    <ProjectsCard
                        title="ADOBE BEHAVIOUR SIMULATION"
                        des="This challenge is focused on enhancing the user social media engagement through behaviour and content simulation. Managed to achieve the accuracy of 96% in predicting the no. of likes on a tweet and predicting the tweet content based on various factors like no. of likes and company's brand value etc."
                        src={adobe}
                        github_link= "https://github.com/SahilMangla14/Adobe-Behaviour-Simulation"
                    />
                    <ProjectsCard
                        title="GOMORY HU TREE"
                        des="This project is focused on facilitating the efficent computation of minimum cuts in a graph for applications in network flow problems. It significantly reduced the computational time, achieving a time complexity of O(V^2 log V). It can also be used to approximate the minimum k-cut problem."
                        src={gomory}
                        github_link= "https://github.com/SahilMangla14/Gomory-Hu-Tree-Algorithm"
                    />
                    <ProjectsCard
                        title="RISC V SIMULATOR"
                        des="The RISC-V simulator is a computer architecture project that showcases the remarkable performance improvements of modern computer hardware resulting from optimizations such as pipelining and caching."
                        src={riscv_img}
                        github_link= "https://github.com/SahilMangla14/RISC_V-Simulator"
                    />
                    <ProjectsCard
                        title="DEVREV AI AGENTS"
                        des="This challenge is focused on predicting the set of tools required to answer the user query and the order in which these tools should be executed. Through the use of various agents, langchain and techniques like problem segmentation and toposort, we managed to predict significantly accurate results."
                        src={devrev}
                        github_link= "https://github.com/SahilMangla14/devrev-ai-agents"
                    />
                    <ProjectsCard
                        title="SOCIAL NETWORKING SYSTEM"
                        des="This project is about the database design and implementation of a social networking system. Utilized the concepts of normalization and indexing to optimize the database and ensure efficient storage and retrieval of user data and posts."
                        src={social}
                        github_link= "https://github.com/SahilMangla14/social-networking-system"
                    />
                    <ProjectsCard
                        title="EERTREE"
                        des="EERTREE is a new linear-size data structure which provides a fast access to all palindromic substrings of a string or a set of strings. This structure inherits some ideas from the construction of both the suffix trie and suffix tree. Using this structure, it provides simple and efficient solutions for a number of problems involving palindromes."
                        src={eertree}
                        github_link= "https://github.com/SahilMangla14/eertree"
                    />
                    <ProjectsCard
                        title="MEDICARE"
                        des="Medicare is an innovative hospital management platform to streamline and optimize the administrative tasks, patient appointments, and medical records of a healthcare facility, ensuring efficient operations and enhanced patient care."
                        src={hms}
                        github_link= "https://github.com/SahilMangla14/Hospital-Management-System"
                    />
                    <ProjectsCard
                        title="IOT_BLOCKCHAIN"
                        des="This project is about securing the user privacy and data integrity in the Internet of Things (IoT) environment using blockchain technology. It ensures secure and tamper-proof data storage and transmission, making it an ideal solution for IoT applications."   
                        src={iot}
                        github_link= "https://github.com/SahilMangla14/IOT_Blockchain"
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
