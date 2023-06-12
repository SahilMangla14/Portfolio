import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'
const Home = () => {

    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <section id="home" className='w-full py-20 flex border-b-[1px] border-b-white'>
            <div className='w-1/2 flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-lg font-normal'>Welcome to my world</h4>
                    <h1 className='text-6xl font-bold text-white'>
                        Hi, I'm
                        <span className='text-yellowColor capitalize'> Sahil</span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>a {" "}
                        <span>
                            {text}
                        </span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="#FFBD39"
                        />
                    </h2>
                    <p className='text-base font-bodyFont leading-6 tracking-wide'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum animi voluptates inventore velit quod cupiditate alias delectus eaque dolor, eius incidunt quam neque eum iste commodi quo est maiores maxime!
                    </p>
                </div>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Connect with me
                    </h2>
                    <div className="flex gap-4">
                        <span className="homeIcon bg-boxColor">
                            <FaLinkedinIn />
                        </span>
                        <span className="homeIcon bg-boxColor">
                            <FaFacebookF />
                        </span>
                        <span className="homeIcon bg-boxColor">
                            <FaTwitter />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
