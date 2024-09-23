import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const SocialMedia = () => {
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                <li className='flex justify-between items-center w-36 h-12 px-4 bg-white ml-[-95px] hover:ml-[-10px]'>
                    <a
                        className='flex justify-between w-full font-bold z-50'
                        href="https://www.linkedin.com/in/lorensius-bernard-gani"
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                        <FaLinkedin size={25} />
                    </a>
                </li>
                <li className='flex justify-between items-center w-36 h-12 px-4 bg-white ml-[-95px] hover:ml-[-10px]'>
                    <a
                        className='flex justify-between w-full font-bold z-50'
                        href="https://github.com/LorensiusGani"
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <span>Github</span>
                        <FaGithub size={25} />
                    </a>
                </li>
                <li className='flex justify-between items-center w-36 h-12 px-4 bg-white ml-[-95px] hover:ml-[-10px]'>
                    <a
                        className='flex justify-between w-full font-bold'
                        href="https://www.instagram.com/lorensius.gani/"
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                       <span>Instagram</span>
                       <FaInstagram size={25}/>
                    </a>
                </li>
                <li>

                </li>
            </ul>
        </div>
    )
}

export default SocialMedia