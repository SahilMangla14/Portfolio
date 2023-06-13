import React,{useState} from 'react'
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'
import {Link, BrowserRouter} from 'react-router-dom';

const Contact = () => {

    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };


    const handleSend = (e) => {
        e.preventDefault();
        if (username === "") {
            setErrMsg("Username is required!");
        } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!");
        } else if (email === "") {
            setErrMsg("Please give your Email!");
        } else if (!emailValidation(email)) {
            setErrMsg("Give a valid Email!");
        } else if (message === "") {
            setErrMsg("Message is required!");
        } else {
            setSuccessMsg(
                `Thank you dear ${username}, Your Message has been sent Successfully!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setMessage("");
        }
    };


    return (
        <section id="contact" className='w-full py-10 border-b-[1px] border-b-black '>
            <div className='flex items-center justify-center text-center'>
                <div className="flex flex-col gap-4 font-titleFont mb-14">
                    <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
                        Contact
                    </h3>
                    <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize"><span className='text-yellowColor capitalize'>Contact</span> Me</h1>
                </div>
            </div>
            <div className='w-full h-auto flex-row sml:flex sml:justify-center'>
                <div className='w-full sml:w-1/2 flex flex-col items-center justify-center'>
                    <h1 className='text-6xl font-bold text-white md:pl-10 lg:pl-0 mt-20 mb-10'>Get In <span className='text-yellowColor capitalize'>Touch</span></h1>
                    <div>
                    <BrowserRouter>
                        <div className="flex gap-4">
                            <Link to="https://www.linkedin.com/in/sahil-mangla-2a074b238/">
                                <span className="homeIcon bg-boxColor">
                                    <FaLinkedinIn />

                                </span>
                            </Link>
                            <Link to="https://github.com/SahilMangla14">
                                <span className="homeIcon bg-boxColor">
                                    <FaGithub />
                                </span>
                            </Link>
                            <Link to="https://www.instagram.com/sahilmangla148/">
                                <span className="homeIcon bg-boxColor">
                                    <FaInstagram />
                                </span>
                            </Link>

                        </div>
                    </BrowserRouter>
                </div>
                </div>
                <div className="w-full sml:w-1/2 lgl:w-[60%] h-full py-10 bg-boxColor flex flex-col gap-8 p-4 lgl:p-8 rounded-lg mt-10 sml:mt-0">
                    <form className='w-full flex flex-col gap-6 py-2'>
                        {
                            errMsg &&  <p className='py-3 bg-gradient-to-r  bg-yellowColor rounded-xl  text-center text-[#1A1A1A] text-base tracking-wide animate-bounce'>{errMsg}</p>
                        }
                        
                        <div className='w-full flex gap-10'>
                            <div className='w-1/2 flex flex-col gap-4'>
                                <p className='text-sm uppercase tracking-wide'>Your Name</p>
                                <input onChange={(e) => setUsername(e.target.value)} value={username} className={`${errMsg == 'Username is required!' && 'outlined-yellowColor'} contactInput`} type="text" />
                            </div>
                            <div className='w-1/2 flex flex-col gap-4'>
                                <p className='text-sm uppercase tracking-wide'>Phone No</p>
                                <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className='contactInput' type="text" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-sm uppercase tracking-wide'>Email</p>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className='contactInput' type="text" />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-sm uppercase tracking-wide'>Message</p>
                            <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='contactTextArea' cols="30" rows="7" placeholder='Write Something'></textarea>
                        </div>
                        <div className='w-[50%] xl:w-[20%]'>
                            <button onClick={handleSend} className='contactInput'>Submit</button>
                        </div>
                        {
                            successMsg && <p >{successMsg}</p>
                        }
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
