import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const Navbar = () => {

  const [nav, setNav] = useState(false);

  // const links = [
  //   {
  //     id: 1,
  //     link: "Home",
  //   },
  //   {
  //     id: 2,
  //     link: "About",
  //   },
  //   {
  //     id: 3,
  //     link: "Portofolio",
  //   },
  //   {
  //     id: 4,
  //     link: "Contact",
  //   },
  // ]


  return (
    <div className="flex justify-between items-center w-full h-20 px-14 text-black bg-white fixed z-50">
      <div>
        <h1 className='text-3xl font-serif font-bold ml-5 cursor-pointer scale-105 duration-100'>Lorensius Gani</h1>
      </div>
      <ul className="hidden md:flex">
        <li className="px-5  cursor-pointer font-semibold hover:text-white hover:bg-black scale-105 duration-100">Home</li>
        <li className="px-5  cursor-pointer font-semibold hover:text-white hover:bg-black scale-105 duration-100">About</li>
        <li className="px-5  cursor-pointer font-semibold hover:text-white hover:bg-black scale-105 duration-100">Portofolio</li>
        <li className="px-5  cursor-pointer font-semibold hover:text-white hover:bg-black scale-105 duration-100">Contact</li>
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-20 text-slate-900 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-200 text-black">
          <li className="px-5  cursor-pointer font-semibold hover:text-white hover:bg-black scale-105 duration-100 text-2xl mt-10">Home</li>
          <li className="px-5  cursor-pointer font-semibold hover:text-white hover:bg-black scale-105 duration-100 text-2xl mt-10">About</li>
          <li className="px-5  cursor-pointer font-semibold hover:text-white hover:bg-black scale-105 duration-100 text-2xl mt-10">Portofolio</li>
          <li className="px-5  cursor-pointer font-semibold hover:text-white hover:bg-black scale-105 duration-100 text-2xl mt-10">Contact</li>
        </ul>
      )}

    </div>
  );
}

export default Navbar