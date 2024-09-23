import React  from 'react';
import personalphoto from '../Assets/Foto-Diri.png';

const Home = () => {
  return (
    <div className='h-screen w-full bg-black'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
            <h1 className='text-5xl sn:7-xl font-bold text-white'>I'm Lorensius Bernard Gani</h1>
            <p className='text-white text-2xl py-3 font-semibold'>From Binus University</p>
            <p className='text-white text-2xl font-semibold'>Front End Developer</p>
            </div>
            <div>
                <img src={personalphoto} alt="personal photo" className='rounded-xl ml-10 w-56 h-72' />
            </div>
        </div>
    </div>
  )
}

export default Home