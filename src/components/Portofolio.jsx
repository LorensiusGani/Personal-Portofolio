import React from 'react';
import Shoe from '../Assets/FootLockRE.jpg'
import pet from '../Assets/PetCare.jpg'
import html from '../Assets/HTML.png'
import css from '../Assets/CSS.png'
import js from '../Assets/JS.png'
import react from '../Assets/react.png'
import tailwind from '../Assets/tailwind.jpg';
import figma from '../Assets/Figma.png'
import python from '../Assets/python.png'
import c from '../Assets/C.png'

const Portofolio = () => {
  return (
    <div className='bg-black w-full'>
      <div>
        <h1 className='text-white text-center text-5xl sn:8xl font-bold'>Portofolio</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-14'>
        <div className='rounded-xl overflow-hidden shadow-lg bg-white mx-14'>
          <div>
            <a
              className='cursor-pointer hover:scale-90 relative block'
              href='https://shoestore-olive.vercel.app/'
              target='_blank'
              rel="noopener noreferrer"
            >
              <img className='w-full rounded-xl transition-opacity duration-300 hover:opacity-100' src={Shoe} alt="" />
              <div className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-15 rounded-xl">
                Visit
              </div>
            </a>
          </div>
          <div className='mt-8 mb-3 text-center text-black'>
            <h1 className='text-xl font-bold'>FootLockRE - Shoe Store</h1>
            <p className='text-lg font-semibold'>With HTML CSS JS</p>
            <p className='text-lg font-semibold'>Source Code : <a className='text-blue-600' href="https://github.com/LorensiusGani/Portofolio-FootLockRE" target='_blank'
              rel="noopener noreferrer">Github</a></p>
            <p className='text-lg font-semibold'>Design : <a className='text-blue-600' href="https://www.figma.com/design/iBQUYhTvXCW9U0ame4AvGp/Figma-FootLockRE-Projects-Lab---HCI?node-id=0-1&node-type=canvas&t=pFeFNjZXcWMOrpGj-0" target='_blank'
            rel="noopener noreferrer">Figma</a></p>
          </div>
        </div>

        <div>
          <div className='rounded-xl overflow-hidden shadow-lg bg-white mx-14'>
            <div>
              <a className='cursor-pointer hover:scale-90 relative block'>
                <img className='w-full h-72 rounded-xl transition-opacity duration-300 hover:opacity-100' src={pet} alt="" />
              </a>
            </div>
            <div className='mt-3 mb-3 text-center text-black'>
              <h1 className='text-xl font-bold'>Pet Care</h1>
              <p className='text-lg font-semibold'>With HTML CSS Express-JS Postgress SQL</p>
              <p className='text-lg font-semibold'>Source Code : <a className='text-blue-600' href="https://github.com/ryoa30/Pet-Care" target='_blank'
                rel="noopener noreferrer">Github</a></p>
              <p className='text-lg font-semibold'>Design : <a className='text-blue-600' href="https://www.figma.com/design/6dTqh2QH0JJHWk5YXOe5FR/PROJECT-PET-CARE?node-id=0-1&node-type=canvas&t=GoMmykDWBl4ji2Jc-0" target='_blank'
                rel="noopener noreferrer">Figma</a></p>
            </div>
          </div>
        </div>

      </div>

      <div >
        <div className=' grid grid-cols-2 mt-14'>
          <div className='max-w-xl rounded-xl overflow-hidden shadow-lg bg-white mx-14'>
            <div>
              <a className='cursor-pointer hover:scale-90 relative block'>

              </a>
            </div>
            <div className='mt-3 mb-3 text-center text-black'>
              <h1 className='text-xl font-bold'>Txt</h1>
              <p className='text-lg font-semibold'>Txt</p>
              <p className='text-lg font-semibold'>Source Code : <a className='text-blue-600' href="https://github.com/ryoa30/Pet-Care" target='_blank'
                rel="noopener noreferrer">Github</a></p>
            </div>
          </div>
        </div>

      </div>

      <div>
        <div className='mt-10'>
          <h1 className='text-white text-center text-5xl sn:8xl font-bold'>Skills</h1>
        </div>

        <div className='flex flex-wrap mt-12'>
          <div className='rounded-xl overflow-hidden shadow-xl bg-white mx-14 flex flex-col items-center'>
            <div className='flex items-center justify-center h-60 w-60'>
              <img className='max-h-full max-w-full cursor-pointer' src={html} alt="" />
            </div>
            <div className='text-center mt-3 mb-3'>
              <h1 className='font-bold text-3xl'>HTML</h1>
            </div>
          </div>

          <div className='rounded-xl overflow-hidden shadow-xl bg-white mx-10 flex flex-col items-center'>
            <div className='flex items-center justify-center h-60 w-60'>
              <img className='max-h-full max-w-full cursor-pointer' src={css} alt="" />
            </div>
            <div className='text-center mt-3 mb-3'>
              <h1 className='font-bold text-3xl'>CSS</h1>
            </div>
          </div>

          <div className='rounded-xl overflow-hidden shadow-xl bg-white mx-10 flex flex-col items-center  '>
            <div className='flex items-center justify-center h-60 w-60'>
              <img className='max-h-full max-w-full cursor-pointer' src={js} alt="" />
            </div>
            <div className='text-center mt-3 mb-3'>
              <h1 className='font-bold text-3xl'>Javascript</h1>
            </div>
          </div>

          <div className='rounded-xl overflow-hidden shadow-xl bg-white mx-14 flex flex-col items-center'>
            <div className='flex items-center justify-center h-60 w-60'>
              <img className='max-h-full max-w-full cursor-pointer' src={react} alt="" />
            </div>
            <div className='text-center mt-3 mb-3'>
              <h1 className='font-bold text-3xl'>React</h1>
            </div>
          </div>

          <div className='rounded-xl overflow-hidden shadow-xl bg-white mx-14 flex flex-col items-center mt-14'>
            <div className='flex items-center justify-center h-60 w-60'>
              <img className='max-h-full max-w-full cursor-pointer' src={tailwind} alt="" />
            </div>
            <div className='text-center mt-3 mb-3'>
              <h1 className='font-bold text-3xl'>Tailwind</h1>
            </div>
          </div>

          <div className='rounded-xl overflow-hidden shadow-xl bg-white mx-10 flex flex-col items-center mt-14'>
            <div className='flex items-center justify-center h-60 w-60'>
              <img className='max-h-full max-w-full cursor-pointer' src={figma} alt="" />
            </div>
            <div className='text-center mt-3 mb-3'>
              <h1 className='font-bold text-3xl'>Figma</h1>
            </div>
          </div>

          <div className='rounded-xl overflow-hidden shadow-xl bg-white mx-10 flex flex-col items-center mt-14'>
            <div className='flex items-center justify-center h-60 w-60'>
              <img className='max-h-full max-w-full cursor-pointer' src={python} alt="" />
            </div>
            <div className='text-center mt-3 mb-3'>
              <h1 className='font-bold text-3xl'>Python</h1>
            </div>
          </div>

          <div className='rounded-xl overflow-hidden shadow-xl bg-white mx-14 flex flex-col items-center mt-14'>
            <div className='flex items-center justify-center h-60 w-60'>
              <img className='max-h-full max-w-full cursor-pointer' src={c} alt="" />
            </div>
            <div className='text-center mt-3 mb-3'>
              <h1 className='font-bold text-3xl'>C</h1>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Portofolio;
