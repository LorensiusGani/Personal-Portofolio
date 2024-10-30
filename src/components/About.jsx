import React from 'react';
import paskah1 from '../Assets/Foto-Paskah-1.jpeg';
import paskah2 from '../Assets/Foto-Paskah-2.jpeg';
import fotoldka from '../Assets/Foto-LDK-Activist.jpeg';
import rod from '../Assets/ROD.jpeg';

const About = () => {

    return (
        <div id='about' className='w-full bg-black'>
            <div className='flex justify-center items-center'>
                <h1 className='text-5xl sn:7-xl font-bold text-white'>About</h1>
            </div>

            <p className='flex flex-col justify-center items-center text-white mt-10 mx-5 text-justify text-lg'>
                As an undergraduate student at Binus University majoring in Computer Science, I actively explore opportunities to improve my skills and gain practical experience. I am heavily involved in campus organizations and academic activities, where I challenge myself to grow both personally and professionally. With a strong passion for problem-solving and dedication to overcoming challenges, I constantly push myself to learn new concepts and technologies, aiming to make meaningful contributions to every project or team I join.
            </p>

            <div className='h-0.5 mt-7 mx-5 bg-white'></div>

            <div className='text-white'>
                <h3 className='mt-8 ml-14 text-4xl sn:5-xl font-bold text-center'>Organizational Experience</h3>
                <div className="bg-black text-white p-8">
                    <ul className="relative">
                        <li className="mb-10 flex items-start relative">
                            <div className="z-10 h-4 w-4 bg-white rounded-full mr-3 mt-1"></div>
                            <span className='absolute left-1.5 top-1 h-44 w-0.5 bg-white'></span>
                            <div>
                                <h3 className="font-semibold text-xl">Coordinator Of Equipment Division | KMK BINUS 2024 </h3>
                                <p className="text-white text-lg">
                                    Feb 2024 - Saat ini
                                </p>
                                <p className="mt-2 text-lg">Prepare equipment required for organizing activities and build relationships with activists in the division</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-lg">
                                        Skill: Time Management, Communication, Teamwork
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="mb-10 flex items-start relative">
                            <div className="z-10 h-4 w-4 bg-white rounded-full mr-3 mt-1"></div>
                            <span className='absolute left-1.5 top-1 h-full w-0.5 bg-white'></span>
                            <div>
                                <h3 className="font-semibold text-xl">Vice Coordinator of Equipment Division | Easter Event KMK BINUS 2024 </h3>
                                <p className="text-white text-lg">
                                    Jan 2024 - Mar 2024
                                </p>
                                <p className="mt-2 text-lg">Provide equipment that will be used during the Easter event</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-lg">
                                        Skill: Time Management, Communication, Teamwork
                                    </span>
                                </div>
                                <div className='mt-4 flex'>
                                    <img className='w-96 h-full' src={paskah1} alt="" />
                                    <img className='w-96 h-full ml-6' src={paskah2} alt="" />
                                </div>
                            </div>
                        </li>
                        <li className="mb-10 flex items-start relative">
                            <div className="z-10 h-4 w-4 bg-white rounded-full mr-3 mt-2"></div>
                            <span className='absolute left-1.5 bottom-20 h-full w-0.5 bg-white'></span>
                            <div>
                                <h3 className="font-semibold text-xl">Coordinator of Equipment Division | LDK Activist KMK BINUS 2024 </h3>
                                <p className="text-white text-lg">
                                    Jan 2024 - Jan 2024
                                </p>
                                <p className="mt-2 text-lg">Provide equipment that will be used in the LDK event</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-lg">
                                        Skill: Time Management, Communication, Teamwork
                                    </span>
                                </div>
                                <div className='mt-4 flex'>
                                    <img className='w-96 h-full' src={fotoldka} alt="" />
                                </div>
                            </div>
                        </li>
                        <li className="mb-10 flex items-start relative">
                            <div className="z-10 h-4 w-4 bg-white rounded-full mr-3 mt-2"></div>
                            <span className='absolute left-1.5 bottom-32 h-full w-0.5 bg-white'></span>
                            <div>
                                <h3 className="font-semibold text-xl">Equipment Division Staff | Refresh Our Dreams KMK BINUS 2023 </h3>
                                <p className="text-white text-lg">
                                    Mei 2023 - Des 2023
                                </p>
                                <p className="mt-2 text-lg">Provide equipment that will be used in the Refresh Our Dreams event</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-lg">
                                        Skill: Communication, Teamwork
                                    </span>
                                </div>
                                <div className='mt-4'>
                                    <img className='w-96 h-full' src={rod} alt="" />
                                </div>
                            </div>
                        </li>
                        <li className="mb-10 flex items-start relative">
                            {/* <div className="relative z-10 h-4 w-4 bg-white rounded-full mr-3 mb-44"></div> */}
                            <span className='absolute left-1.5 bottom-48 h-full w-0.5 bg-white'></span>
                        </li>
                    </ul>
                </div>
            </div>




        </div>
    )
}

export default About