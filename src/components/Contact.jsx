import React from 'react';

const Contact = () => {

  return (
    <div className="h-screen w-full bg-black pt-20">
      <div className='text-white'>
        <h1 className="text-center font-bold text-4xl">CONTACT</h1>
      </div>

      <div className='flex justify-center items-center mt-10'>
        <h2 className='text-center font-bold text-xl text-white'>Please fill out the form belows</h2>
      </div>

      <div className='flex justify-center items-center mt-10'>
        <form className='form flex flex-col w-full md:w-1/2'>
          <input type="text" name="nama" id="" 
          placeholder='Enter your Name'
          className='p-2 bg-transparent border-4 text-white mb-2'
          />
          <input type="text" name="email" id="" 
          placeholder='Enter your Email'
          className=' p-2 bg-transparent border-4 text-white my-2'
          />
          <input type="text" name="pesan" id="" 
          placeholder='Enter your message'
          className=' p-6 bg-transparent border-4 text-white my-2'
          />
          <button type='submit' className='bg-blue-500 text-black font-bold px-6 py-3 my-6 mx-auto rounded-xl cursor-pointer hover:scale-90 hover:bg-white hover:text-black duration-200'>Submit</button>
        </form>
      </div>

    </div>
  );
}

export default Contact;
