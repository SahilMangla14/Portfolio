import React from 'react'
import {navLinksdata} from '../../constants'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='w-full h-20 mx-auto flex justify-center items-center border-b-[1px] border-b-greyColor bg-boxColor sticky top-0 z-50'>
        <div>
            <ul className='flex items-center gap-10'>
                {
                    navLinksdata.map((navLink) => (
                        <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-yellowColor duration-300"
                            key={navLink._id}>
                            <Link
                                activeClass="active"
                                to={navLink.link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            {navLink.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar
